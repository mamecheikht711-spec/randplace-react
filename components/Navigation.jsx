export default function Navigation() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-inner">
          {/* Bouton Catégories */}
          <div className="all-categories">
            <i className="fas fa-bars"></i>
            <span>Toutes Catégories</span>
          </div>

          {/* Liens de navigation */}
          <div className="nav-links">
            <a href="#" className="nav-item active">Accueil</a>
            <a href="#" className="nav-item">Promotions</a>
            <a href="#" className="nav-item">Marchés</a>
            <a href="#" className="nav-item">Vendeurs</a>
            <a href="#" className="nav-item">Blog</a>
          </div>
        </div>
      </div>
    </nav>
  )
}