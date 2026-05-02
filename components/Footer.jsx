// components/Footer.jsx
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          
          {/* Colonne 1 : À propos */}
          <div className="footer-col">
            <h3 className="footer-logo">GRANDPLACE</h3>
            <p className="footer-desc">
              La première marketplace qui regroupe tous les marchés de Dakar. Achetez local, sécurisé et livré chez vous.
            </p>
            <div className="social-icons">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-whatsapp"></i></a>
              <a href="#"><i className="fab fa-tiktok"></i></a>
            </div>
          </div>

          {/* Colonne 2 : Liens Rapides */}
          <div className="footer-col">
            <h3 className="footer-title">Explorer</h3>
            <ul>
              <li><a href="#">Accueil</a></li>
              <li><a href="#">Tous les Marchés</a></li>
              <li><a href="#">Nouveautés</a></li>
              <li><a href="#">Promotions</a></li>
            </ul>
          </div>

          {/* Colonne 3 : Services */}
          <div className="footer-col">
            <h3 className="footer-title">Services</h3>
            <ul>
              <li><a href="#">Devenir Vendeur</a></li>
              <li><a href="#">Livraison & Retours</a></li>
              <li><a href="#">Support Vendeur</a></li>
              <li><a href="#">API & Intégration</a></li>
            </ul>
          </div>

          {/* Colonne 4 : Aide & Contact */}
          <div className="footer-col">
            <h3 className="footer-title">Besoin d'aide ?</h3>
            <ul>
              <li><a href="#">Centre d'aide</a></li>
              <li><a href="#">Conditions d'utilisation</a></li>
              <li><a href="#">Politique de confidentialité</a></li>
              <li className="contact-email"><a href="mailto:contact@grandplace.sn">contact@grandplace.sn</a></li>
            </ul>
          </div>

        </div>

        {/* Barre de copyright */}
        <div className="footer-bottom">
          <p>© 2024 GRANDPLACE Dakar. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}