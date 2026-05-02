export default function TopBar() {
  return (
    <div className="top-bar">
      <div className="container">
        <div className="top-bar-inner">
          <div className="top-links">
            <a href="#"><i className="fas fa-mobile-alt"></i> Application</a>
            <span className="sep">|</span>
            <a href="#">Aide</a>
            <span className="sep">|</span>
            <a href="#">Français</a>
          </div>
          <a href="#" className="app-download">
            <i className="fas fa-download"></i> Télécharger
          </a>
        </div>
      </div>
    </div>
  )
}