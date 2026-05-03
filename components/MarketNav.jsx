"use client";
import Link from 'next/link';

export default function MarketNav() {
  const markets = [
    { slug: "sandaga", name: "Sandaga", icon: "fa-shopping-bag" },
    { slug: "colobane", name: "Colobane", icon: "fa-tshirt" },
    { slug: "kermel", name: "Kermel", icon: "fa-leaf" },
    { slug: "serasse", name: "Serasse", icon: "fa-drumstick-bite" },
    { slug: "thiaroye", name: "Thiaroye", icon: "fa-fish" },
    { slug: "hlm", name: "HLM", icon: "fa-palette" },
    { slug: "seaplaza", name: "Sea Plaza", icon: "fa-building" },
    { slug: "almadies", name: "Almadies", icon: "fa-umbrella-beach" },
    { slug: "petersen", name: "Petersen", icon: "fa-mobile-alt" },
    { slug: "soumbedioune", name: "Soumbedioune", icon: "fa-paint-brush" },
  ];

  return (
    <nav className="market-nav">
      <div className="container">
        <div className="market-nav-inner">
          <Link href="/" className="all-markets-btn">
            <i className="fas fa-th"></i> Tous les marchés
          </Link>
          {markets.map((m) => (
            <Link href={`/markets/${m.slug}`} key={m.slug} className="market-item">
              <i className={`fas ${m.icon}`}></i> {m.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}