// components/Hero.jsx
export default function Hero() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-grid">
          
          {/* --- SIDEBAR GAUCHE : Les Marchés --- */}
          <div className="hero-sidebar">
            <ul className="category-list">
              <li className="cat-item">
                <i className="fas fa-store"></i> Sandaga
                <i className="fas fa-chevron-right arrow"></i>
              </li>
              <li className="cat-item">
                <i className="fas fa-store"></i> Colobane
                <i className="fas fa-chevron-right arrow"></i>
              </li>
              <li className="cat-item">
                <i className="fas fa-store"></i> HLM
                <i className="fas fa-chevron-right arrow"></i>
              </li>
              <li className="cat-item">
                <i className="fas fa-store"></i> Tilène
                <i className="fas fa-chevron-right arrow"></i>
              </li>
              <li className="cat-item">
                <i className="fas fa-store"></i> Soumbedioune
                <i className="fas fa-chevron-right arrow"></i>
              </li>
              <li className="cat-item">
                <i className="fas fa-store"></i> Petersen
                <i className="fas fa-chevron-right arrow"></i>
              </li>
              <li className="cat-item">
                <i className="fas fa-store"></i> Kermel
                <i className="fas fa-chevron-right arrow"></i>
              </li>
            </ul>
          </div>

          {/* --- CENTRE : Bannière --- */}
          <div className="hero-banner">
            <div className="banner-content">
              <span className="badge-hot">Hot Sale</span>
              <h1 className="banner-title">
                Tous les marchés<br/>
                <span className="highlight">de Dakar</span>
              </h1>
              <p className="banner-desc">
                +14 marchés réunis • Livraison partout • Vendeurs vérifiés
              </p>
              <button className="banner-btn">Explorer les marchés</button>
            </div>
            <div className="banner-shapes">
              <div className="circle c1"></div>
              <div className="circle c2"></div>
            </div>
          </div>

          {/* --- DROITE : Carte Utilisateur --- */}
          <div className="hero-card">
            <div className="user-header">
              <div className="user-avatar">G</div>
              <div className="user-info">
                <h3>Bienvenue sur GRANDPLACE</h3>
                <p>Votre passerelle vers les marchés</p>
              </div>
            </div>
            <div className="user-stats">
              <div className="stat-box">
                <span className="num">2,000+</span>
                <span className="label">Vendeurs</span>
              </div>
              <div className="stat-box">
                <span className="num">14</span>
                <span className="label">Marchés</span>
              </div>
              <div className="stat-box">
                <span className="num">50K+</span>
                <span className="label">Produits</span>
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