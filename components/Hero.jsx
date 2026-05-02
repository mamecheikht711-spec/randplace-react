// components/Hero.jsx

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-grid">
          
          {/* --- 1. SIDEBAR GAUCHE (Catégories) --- */}
          <div className="hero-sidebar">
            <ul className="category-list">
              <li className="cat-item">
                <i className="fas fa-tshirt"></i> Vêtements & Mode
                <i className="fas fa-chevron-right arrow"></i>
              </li>
              <li className="cat-item">
                <i className="fas fa-mobile-alt"></i> Électronique
                <i className="fas fa-chevron-right arrow"></i>
              </li>
              <li className="cat-item">
                <i className="fas fa-home"></i> Maison & Jardin
                <i className="fas fa-chevron-right arrow"></i>
              </li>
              <li className="cat-item">
                <i className="fas fa-apple-alt"></i> Alimentation
                <i className="fas fa-chevron-right arrow"></i>
              </li>
              <li className="cat-item">
                <i className="fas fa-paint-brush"></i> Artisanat
                <i className="fas fa-chevron-right arrow"></i>
              </li>
              <li className="cat-item">
                <i className="fas fa-shoe-prints"></i> Chaussures
                <i className="fas fa-chevron-right arrow"></i>
              </li>
              <li className="cat-item">
                <i className="fas fa-gem"></i> Bijoux & Montres
                <i className="fas fa-chevron-right arrow"></i>
              </li>
            </ul>
          </div>

          {/* --- 2. CENTRE (Bannière Principale) --- */}
          <div className="hero-banner">
            <div className="banner-content">
              <span className="badge-hot">Hot Sale</span>
              <h1 className="banner-title">
                Marchés de Dakar<br/>
                <span className="highlight">Direct Usine</span>
              </h1>
              <p className="banner-desc">
                +50,000 produits disponibles • Livraison rapide • Trade Assurance
              </p>
              <button className="banner-btn">Acheter Maintenant</button>
            </div>
            
            {/* Cercles décoratifs en fond */}
            <div className="banner-shapes">
              <div className="circle c1"></div>
              <div className="circle c2"></div>
            </div>
          </div>

          {/* --- 3. DROITE (Carte Utilisateur) --- */}
          <div className="hero-card">
            <div className="user-header">
              <div className="user-avatar">G</div>
              <div className="user-info">
                <h3>Bienvenue sur GRANDPLACE</h3>
                <p>Votre marketplace de confiance</p>
              </div>
            </div>
            
            <div className="user-stats">
              <div className="stat-box">
                <span className="num">2,000+</span>
                <span className="label">Vendeurs</span>
              </div>
              <div className="stat-box">
                <span className="num">50K+</span>
                <span className="label">Produits</span>
              </div>
              <div className="stat-box">
                <span className="num">14</span>
                <span className="label">Marchés</span>
              </div>
            </div>

            <div className="user-actions">
              <button className="btn-card primary">Devenir Vendeur</button>
              <button className="btn-card outline">Commencer à Acheter</button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}