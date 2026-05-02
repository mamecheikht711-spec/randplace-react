export default function MainHeader() {
  return (
    <header className="main-header">
      <div className="container">
        <div className="header-inner">
          {/* Logo */}
          <a href="#" className="logo">
            <div className="logo-icon">
              <i className="fas fa-shopping-bag"></i>
            </div>
            <div className="logo-texts">
              <div className="logo-brand">GRANDPLACE</div>
              <div className="logo-sub">Trade Assurance • Dakar Markets</div>
            </div>
          </a>

          {/* Barre de Recherche */}
          <div className="search-section">
            <div className="search-tabs">
              <div className="search-tab active">Produits</div>
              <div className="search-tab">Marchés</div>
              <div className="search-tab">Fournisseurs</div>
            </div>
            <div className="search-box">
              <div className="search-cat-select">
                Tous les marchés <i className="fas fa-chevron-down"></i>
              </div>
              <input type="text" className="search-input" placeholder="Que recherchez-vous aujourd'hui?" />
              <button className="search-btn">
                <i className="fas fa-search"></i> Rechercher
              </button>
            </div>
          </div>

          {/* Actions Droite */}
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
            </div>
            <button className="btn-signin">Connexion</button>
          </div>
        </div>
      </div>
    </header>
  )
}