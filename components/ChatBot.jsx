"use client";
import { useState, useEffect, useRef } from 'react';

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Nanga def. Je suis Mère Deugeur Moussor. Si vous cherchez des produits sérieux à Dakar, je peux vous orienter. Sinon, je vous prie de ne pas abuser de mon temps. Que désirez-vous ?",
      sender: "bot"
    }
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  const toggleChat = () => setIsOpen(!isOpen);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = { id: Date.now(), text: input, sender: "user" };
    setMessages(prev => [...prev, userMsg]);
    setInput("");

    setTimeout(() => {
      let response = "Je vous ai entendu. Si votre démarche est honnête, vous trouverez satisfaction à Sandaga ou Colobane. Sinon, je ne peux rien pour vous.";
      const text = input.toLowerCase();

      if (text.includes("prix") || text.includes("cher") || text.includes("négocier")) {
        response = "Les prix à Dakar ne se négocient pas avec des sourires. Préparez votre argent, venez tôt, ou acceptez de payer le prix fort.";
      } else if (text.includes("livraison") || text.includes("livrer") || text.includes("transport")) {
        response = "La livraison coûte cher et les livreurs ne sont pas des anges. Comptez 24h à 48h. Soyez patient, ou venez chercher vous-même.";
      } else if (text.includes("arnaque") || text.includes("problème")) {
        response = "Les arnaqueurs pullulent. Ne croyez jamais les prix trop bas. Achetez auprès des vendeurs vérifiés, ou assumez vos pertes.";
      } else if (text.includes("bonjour") || text.includes("salut") || text.includes("coucou")) {
        response = "Bonjour. Je suppose que vous êtes là pour affaires. Exposez-moi votre demande clairement, nous n'avons pas toute la journée.";
      }

      setMessages(prev => [...prev, { id: Date.now() + 1, text: response, sender: "bot" }]);
    }, 1200);
  };

  return (
    <>
      <button
        className={`chat-toggle-btn ${isOpen ? 'hidden' : 'flex'}`}
        onClick={toggleChat}
        aria-label="Ouvrir le chat"
      >
        <div className="chat-avatar-wrapper">
          <img src="/image/mama-deugeur.png" alt="Mère Deugeur Moussor" />
          <span className="online-dot"></span>
        </div>
        <div className="chat-label">
          <span className="chat-name">Mère Deugeur</span>
          <span className="chat-status">En ligne</span>
        </div>
      </button>

      <div className={`chat-window ${isOpen ? 'open' : ''}`}>
        <div className="chat-header">
          <div className="chat-header-info">
            <div className="chat-avatar-sm">
              <img src="/image/mama-deugeur.png" alt="Mère Deugeur Moussor" />
            </div>
            <div>
              <h3>Mère Deugeur Moussor</h3>
              <p>Assistante SenMarket</p>
            </div>
          </div>
          <button onClick={toggleChat} className="close-chat-btn">
            <i className="fas fa-times"></i>
          </button>
        </div>

        <div className="chat-body">
          {messages.map((msg) => (
            <div key={msg.id} className={`message-bubble ${msg.sender === 'user' ? 'user' : 'bot'}`}>
              <p>{msg.text}</p>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <form onSubmit={handleSend} className="chat-input-area">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Écrivez votre message..."
          />
          <button type="submit" disabled={!input.trim()}>
            <i className="fas fa-paper-plane"></i>
          </button>
        </form>
      </div>
    </>
  );
}