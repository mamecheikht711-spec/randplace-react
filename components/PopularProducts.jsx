export default function PopularProducts() {
  const products = [
    { name: "Parfum Lattafa Khamrah", desc: "Eau de parfum 100ml", price: "18 000 FCFA", oldPrice: "25 000 FCFA", badge: "-15%", badgeColor: "red", rating: "4.8", reviews: 124 },
    { name: "Lait Jersey 1L", desc: "Naturel et frais", price: "1 200 FCFA", oldPrice: null, badge: "Nouveau", badgeColor: "green", rating: "4.9", reviews: 156 },
    { name: "Tissu Wax Hollandais", desc: "6 yards", price: "4 500 FCFA", oldPrice: "5 300 FCFA", badge: null, badgeColor: null, rating: "5.0", reviews: 241 },
    { name: "Riz Local 50kg", desc: "Riz brisé de qualité", price: "15 000 FCFA", oldPrice: null, badge: "Populaire", badgeColor: "blue", rating: "4.8", reviews: 180 },
    { name: "Pâtes Panzani 500g x3", desc: "Qualité supérieure", price: "2 500 FCFA", oldPrice: null, badge: "Nouveau", badgeColor: "green", rating: "4.7", reviews: 89 },
    { name: "Samsung Galaxy A15", desc: "128Go, 4Go RAM", price: "95 000 FCFA", oldPrice: null, badge: null, badgeColor: null, rating: "4.6", reviews: 72 },
  ];

  return (
    <section className="products-section">
      <div className="section-header">
        <h2 className="section-title">Produits populaires</h2>
        <a href="#" className="section-link">Voir tous les produits <i className="fas fa-arrow-right"></i></a>
      </div>
      <div className="products-grid">
        {products.map((p, i) => (
          <div className="product-card" key={i}>
            <div className="product-img">
              {p.badge && <span className={`product-badge ${p.badgeColor}`}>{p.badge}</span>}
              <i className="fas fa-box" style={{ fontSize: 32, color: 'var(--gray-light)' }}></i>
            </div>
            <div className="product-info">
              <div className="product-name">{p.name}</div>
              <div className="product-desc">{p.desc}</div>
              <div className="product-price">{p.price}</div>
              {p.oldPrice && <div className="product-old-price">{p.oldPrice}</div>}
              <div className="product-rating">
                <i className="fas fa-star"></i>
                <span>{p.rating} ({p.reviews})</span>
              </div>
              <div className="product-actions">
                <div className="product-heart"><i className="far fa-heart"></i></div>
                <div className="product-cart"><i className="fas fa-shopping-cart"></i></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}