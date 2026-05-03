export default function MarketNav() {
  const markets = [
    { name: "Sandaga", icon: "fa-shopping-bag" },
    { name: "Colobane", icon: "fa-tshirt" },
    { name: "Kermel", icon: "fa-seedling" },
    { name: "Serasse", icon: "fa-apple-alt" },
    { name: "Thiaroye", icon: "fa-fish" },
    { name: "HLM", icon: "fa-palette" },
    { name: "Sea Plaza", icon: "fa-building" },
    { name: "Almadies", icon: "fa-umbrella-beach" },
    { name: "City Dia", icon: "fa-city" },
    { name: "Luma", icon: "fa-store" },
  ];

  return (
    <nav className="market-nav">
      <div className="container">
        <div className="market-nav-inner">
          <button className="all-markets-btn">
            <i className="fas fa-th"></i> Tous les marchés <i className="fas fa-arrow-right" style={{ fontSize: 12 }}></i>
          </button>
          {markets.map((m, i) => (
            <div className="market-item" key={i}>
              <i className={`fas ${m.icon}`}></i> {m.name}
            </div>
          ))}
          <div className="market-plus">
            Plus <i className="fas fa-chevron-down" style={{ fontSize: 10 }}></i>
          </div>
        </div>
      </div>
    </nav>
  )
}