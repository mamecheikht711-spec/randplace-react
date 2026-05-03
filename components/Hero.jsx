// components/Hero.jsx
import Link from 'next/link';

export default function Hero() {
  const markets = [
    { slug: "sandaga", name: "Sandaga", icon: "fa-shopping-bag", desc: "Le plus grand marché" },
    { slug: "colobane", name: "Colobane", icon: "fa-tshirt", desc: "Spécialiste fripe 6h-8h" },
    { slug: "hlm", name: "HLM", icon: "fa-palette", desc: "Temple du wax" },
    { slug: "kermel", name: "Kermel", icon: "fa-apple-alt", desc: "Fruits, légumes, fleurs" },
    { slug: "serasse", name: "Serasse", icon: "fa-drumstick-bite", desc: "Viande et épices" },
    { slug: "thiaroye", name: "Thiaroye", icon: "fa-fish", desc: "Poissons frais" },
    { slug: "petersen", name: "Petersen", icon: "fa-mobile-alt", desc: "Quartier de la tech" },
    { slug: "soumbedioune", name: "Soumbedioune", icon: "fa-paint-brush", desc: "Artisanat d'art" },
    { slug: "seaplaza", name: "Sea Plaza", icon: "fa-building", desc: "Centre commercial" },
    { slug: "almadies", name: "Almadies", icon: "fa-gem", desc: "Boutiques de luxe" },
  ];

  return (
    <section className="hero-banner">
      <div className="hero-bg"></div>
      <div className="hero-overlay"></div>

      <div className="container">
        <div className="hero-grid">
          
          {/* SIDEBAR DES MARCHÉS */}
          <div className="hero-sidebar">
            <ul className="category-list">
              {markets.map((m) => (
                <li className="cat-item" key={m.slug}>
                  <Link href={`/markets/${m.slug}`} className="cat-link">
                    <div>
                      <i className={`fas ${m.icon}`}></i> {m.name}
                    </div>
                    <span className="cat-desc">{m.desc}</span>
                  </Link>
                  <i className="fas fa-chevron-right arrow"></i>
                </li>
              ))}
            </ul>
            <Link href="/markets" className="cat-all">
              <i className="fas fa-list" style={{ marginRight: 6 }}></i> Voir tous les marchés
            </Link>
          </div>

          {/* CONTENU PRINCIPAL DU HERO */}
          <div className="hero-content">
            <div className="hero-welcome">Bienvenue sur GrandPlace 👋</div>
            <h1 className="hero-title">
              Le marché<br/><span>vient à vous !</span>
            </h1>
            <p className="hero-desc">
              Commandez dans tous les marchés de Dakar et faites-vous livrer en un clic.
            </p>
            <div className="hero-features">
              <div className="hero-feature">
                <i className="fas fa-shield-alt"></i> Produits authentiques
              </div>
              <div className="hero-feature">
                <i className="fas fa-check-circle"></i> Vendeurs vérifiés
              </div>
              <div className="hero-feature">
                <i className="fas fa-truck"></i> Livraison rapide
              </div>
              <div className="hero-feature">
                <i className="fas fa-lock"></i> Paiement sécurisé
              </div>
            </div>
            <div className="hero-buttons">
              <Link href="/markets/sandaga" className="btn-explore">
                Explorer les marchés <i className="fas fa-arrow-right"></i>
              </Link>
              <button className="btn-how">
                <i className="fas fa-play-circle"></i> Comment ça marche
              </button>
            </div>
          </div>

          {/* CARDS DU HERO */}
          <div className="hero-cards">
            {/* Card Chat Mère Deugeur */}
            <div className="hero-card-chat">
              <div className="chat-header">
                <div className="chat-avatar-wrapper">
                  <img src="/image/mama-deugeur.png" alt="Mère Deugeur Moussor" />
                  <span className="online-dot"></span>
                </div>
                <div>
                  <div className="chat-name">Mère Deugeur</div>
                  <div className="chat-status">Assistante GrandPlace</div>
                </div>
              </div>
              <div className="chat-body">
                Nanga def. Je suis là pour vous aider à trouver les meilleures affaires dans tous les marchés de Dakar.
              </div>
              <button className="chat-btn">
                <i className="fas fa-comment"></i> Parler avec moi
              </button>
            </div>
            
            {/* Card Livraison */}
            <div className="hero-card-delivery">
              <div className="delivery-icon">
                <i className="fas fa-motorcycle"></i>
              </div>
              <div className="delivery-info">
                <div className="delivery-title">Livraison Express</div>
                <div className="delivery-sub">Partout à Dakar et banlieue</div>
                <div className="delivery-time">24h - 48h</div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}