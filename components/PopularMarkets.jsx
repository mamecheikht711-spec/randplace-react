// components/PopularMarkets.jsx
export default function PopularMarkets() {
  const markets = [
    { name: "Sandaga", products: "2,543", rating: "4.8", reviews: "2.1k" },
    { name: "Colobane", products: "1,827", rating: "4.6", reviews: "1.5k" },
    { name: "HLM", products: "2,341", rating: "4.9", reviews: "980" },
    { name: "Tilène", products: "1,234", rating: "4.7", reviews: "756" },
    { name: "Soumbedioune", products: "892", rating: "4.8", reviews: "654" },
    { name: "Petersen", products: "1,102", rating: "4.5", reviews: "432" },
  ];

  return (
    <section className="popular-markets">
      <div className="container">
        <div className="pm-header">
          <h2 className="pm-title">
            <i className="fas fa-fire" style={{ color: "var(--red)", marginRight: "8px" }}></i>
            Marchés Populaires
          </h2>
          <a href="#" className="pm-link">Voir tout <i className="fas fa-arrow-right"></i></a>
        </div>

        <div className="pm-grid">
          {markets.map((market, index) => (
            <div className="pm-card" key={index}>
              <div className="pm-img" style={{ background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)" }}>
                <i className="fas fa-store" style={{ fontSize: "40px", color: "var(--gray-light)" }}></i>
                {index === 0 && <span className="pm-badge">TOP 1</span>}
                {index === 1 && <span className="pm-badge" style={{ background: "#FF3D00" }}>HOT</span>}
              </div>
              <div className="pm-content">
                <h3 className="pm-name">{market.name}</h3>
                <div className="pm-meta">
                  <span className="pm-products"><strong>{market.products}</strong> produits</span>
                  <span className="pm-rating">
                    <i className="fas fa-star" style={{ color: "var(--yellow)" }}></i>{market.rating}
                    <span className="pm-reviews">({market.reviews})</span>
                  </span>
                </div>
                <div className="pm-footer">
                  <span className="pm-assurance">
                    <i className="fas fa-shield-alt" style={{ color: "var(--green)" }}></i> Trade Assurance
                  </span>
                  <button className="pm-btn">Contacter</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}