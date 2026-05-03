export default function Sidebar() {
  const categories = [
    { name: "Mode & Tissus", desc: "Vêtements, tissus, couture", icon: "fa-tshirt" },
    { name: "Alimentation", desc: "Fruits, légumes, épices...", icon: "fa-apple-alt" },
    { name: "Maison & Électroménager", desc: "Ustensiles, déco, mobilier", icon: "fa-couch" },
    { name: "Beauté & Bien-être", desc: "Soins, maquillage, parfums", icon: "fa-spa" },
    { name: "Électronique", desc: "Téléphones, accessoires", icon: "fa-mobile-alt" },
    { name: "Chaussures & Sacs", desc: "Chaussures, sacs, accessoires", icon: "fa-shoe-prints" },
    { name: "Enfants & Jouets", desc: "Vêtements, jouets, écoles", icon: "fa-baby" },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-card">
        <div className="sidebar-title">Explorer par catégorie</div>
        <ul className="category-list">
          {categories.map((cat, i) => (
            <li className="cat-item" key={i}>
              <i className={`fas ${cat.icon}`}></i>
              <div>
                <div style={{ fontWeight: 600 }}>{cat.name}</div>
                <div style={{ fontSize: 11, color: 'var(--gray)' }}>{cat.desc}</div>
              </div>
            </li>
          ))}
        </ul>
        <div className="cat-all">
          <i className="fas fa-list" style={{ marginRight: 6 }}></i> Toutes les catégories
        </div>
      </div>

      <div className="vendor-cta">
        <div className="vendor-cta-img" style={{ background: 'var(--primary-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 32 }}>👩🏿‍</div>
        <h3>Vous êtes vendeur ?</h3>
        <p>Rejoignez des milliers de vendeurs et développez votre business.</p>
        <button className="btn-vendor-sm">Devenir vendeur</button>
      </div>
    </aside>
  )
}