export default function HeroBanner() {
  return (
    <section className="hero-banner">
      <div className="hero-bg"></div>
      <div className="hero-content">
        <div className="hero-welcome">Bienvenue sur SenMarket 👋</div>
        <h1 className="hero-title">
          Le marché<br/><span>vient à vous !</span>
        </h1>
        <p className="hero-desc">
          Commandez dans tous les marchés de Dakar et faites-vous livrer en un clic.
        </p>
        <div className="hero-features">
          <div className="hero-feature"><i className="fas fa-shield-alt"></i> Produits authentiques</div>
          <div className="hero-feature"><i className="fas fa-check-circle"></i> Vendeurs vérifiés</div>
          <div className="hero-feature"><i className="fas fa-truck"></i> Livraison rapide</div>
          <div className="hero-feature"><i className="fas fa-lock"></i> Paiement sécurisé</div>
        </div>
        <div className="hero-buttons">
          <button className="btn-explore">Explorer les marchés <i className="fas fa-arrow-right"></i></button>
          <button className="btn-how"><i className="fas fa-play-circle"></i> Voir comment ça marche</button>
        </div>
      </div>
      
      <div className="hero-cards">
        <div className="hero-card-chat">
          <div className="chat-header">
            <div className="chat-avatar">👩‍💼</div>
            <div>
              <div className="chat-name">Nanga def ? 👋</div>
            </div>
          </div>
          <div className="chat-body">
            Moi c'est Mère Deugeur Moussor, je suis là pour vous aider à trouver les meilleures affaires !
          </div>
          <button className="chat-btn"><i className="fas fa-comment"></i> Parler avec moi</button>
        </div>
        
        <div className="hero-card-delivery">
          <div className="delivery-icon"></div>
          <div className="delivery-info">
            <div className="delivery-title">Livraison à Dakar</div>
            <div className="delivery-sub">Partout à Dakar et banlieue</div>
            <div className="delivery-time">24h - 48h</div>
          </div>
        </div>
      </div>
    </section>
  )
}