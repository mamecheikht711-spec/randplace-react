export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-inner">
          <a href="/" className="logo">
            <div className="logo-icon"><i className="fas fa-store"></i></div>
            <div className="logo-texts">
              <div className="logo-brand">Sen<span>Market</span></div>
              <div className="logo-sub">Le marché du Sénégal dans votre maison</div>
            </div>
          </a>

          <button className="location-btn">
            <i className="fas fa-map-marker-alt"></i> Dakar, Sénégal <i className="fas fa-chevron-down" style={{ fontSize: 10 }}></i>
          </button>

          <div className="search-box">
            <input type="text" className="search-input" placeholder="Rechercher un produit, un marché..." />
            <button className="search-btn"><i className="fas fa-search"></i></button>
          </div>

          <div className="header-actions">
            <div className="action-item">
              <i className="far fa-user"></i>
              <span>Compte</span>
            </div>
            <div className="action-item">
              <i className="far fa-heart"></i>
              <span>Favoris</span>
            </div>
            <div className="action-item">
              <i className="fas fa-shopping-cart"></i>
              <span>Panier</span>
              <span className="action-badge">3</span>
            </div>
            <button className="btn-vendor">Devenir vendeur</button>
          </div>
        </div>
      </div>
    </header>
  )
}