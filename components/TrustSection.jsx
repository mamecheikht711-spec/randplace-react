// components/TrustSection.jsx
export default function TrustSection() {
  return (
    <section className="trust-section">
      <div className="container">
        <div className="trust-grid">
          
          <div className="trust-item">
            <div className="trust-icon">
              <i className="fas fa-shield-alt"></i>
            </div>
            <div className="trust-text">
              <h3>Paiement Sécurisé</h3>
              <p>Transaction protégée jusqu'à la réception</p>
            </div>
          </div>

          <div className="trust-item">
            <div className="trust-icon">
              <i className="fas fa-truck"></i>
            </div>
            <div className="trust-text">
              <h3>Livraison Rapide</h3>
              <p>Partout à Dakar en 24h</p>
            </div>
          </div>

          <div className="trust-item">
            <div className="trust-icon">
              <i className="fas fa-user-check"></i>
            </div>
            <div className="trust-text">
              <h3>Vendeurs Vérifiés</h3>
              <p>+2000 vendeurs certifiés</p>
            </div>
          </div>

          <div className="trust-item">
            <div className="trust-icon">
              <i className="fas fa-headset"></i>
            </div>
            <div className="trust-text">
              <h3>Support 24/7</h3>
              <p>Assistance WhatsApp & Téléphone</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}