export default function WhyChoose() {
  const reasons = [
    { icon: "fa-box", title: "+ 10 000 produits", desc: "De qualité au meilleur prix" },
    { icon: "fa-shield-alt", title: "Vendeurs vérifiés", desc: "Achetez en toute confiance" },
    { icon: "fa-credit-card", title: "Paiement sécurisé", desc: "Moyens de paiement diversifiés" },
    { icon: "fa-truck", title: "Livraison partout à Dakar", desc: "Rapide et sécurisée" },
    { icon: "fa-headset", title: "Support 24/7", desc: "Nous sommes là pour vous" },
  ];

  return (
    <section className="why-section">
      <div className="why-illustration">
        <div className="baobab-tree" style={{ background: 'linear-gradient(180deg, #D4A574 0%, #8B6914 100%)', height: '180px', width: '100%', borderRadius: '50% 50% 0 0', position: 'relative' }}>
          <div style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: '40%', height: '60px', background: '#8B6914', borderRadius: '4px' }}></div>
          <div style={{ position: 'absolute', top: '20px', left: '20%', width: '60%', height: '120px', background: '#2E7D32', borderRadius: '50%', opacity: 0.8 }}></div>
        </div>
        <div style={{ textAlign: 'center', marginTop: '12px', fontSize: '13px', fontWeight: '700' }}>Pourquoi choisir SenMarket ?</div>
        <div style={{ textAlign: 'center', fontSize: '12px', color: 'var(--gray)' }}>Votre satisfaction est notre priorité</div>
      </div>
      <div className="why-content">
        <div className="why-grid">
          {reasons.map((r, i) => (
            <div className="why-item" key={i}>
              <div className="why-icon"><i className={`fas ${r.icon}`}></i></div>
              <div className="why-text">
                <h3>{r.title}</h3>
                <p>{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}