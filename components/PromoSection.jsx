export default function PromoSection() {
  const promos = [
    { title: "Promo du jour 🔥", desc: "Jusqu'à -30% sur les tissus wax", icon: "fa-percentage", color: "red", emoji: "" },
    { title: "Frais de livraison OFFERTS", desc: "Dès 15 000 FCFA d'achat", icon: "fa-truck", color: "green", emoji: "📦" },
    { title: "Shopping collaboratif", desc: "Achetez à plusieurs, économisez plus !", icon: "fa-users", color: "blue", emoji: "👥" },
    { title: "Marché fantôme 👻", desc: "Les meilleurs prix du marché, sans que personne ne le sache", icon: "fa-ghost", color: "purple", emoji: "👻" },
  ];

  return (
    <section className="promo-section">
      {promos.map((p, i) => (
        <div className="promo-card" key={i}>
          <div className={`promo-icon ${p.color}`}>
            <i className={`fas ${p.icon}`}></i>
          </div>
          <div className="promo-content">
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
          </div>
        </div>
      ))}
    </section>
  )
}