// app/markets/[slug]/page.tsx
import { getMarketBySlug } from '../../../data/markets';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export default function MarketPage({ params }: { params: { slug: string } }) {
  const market = getMarketBySlug(params.slug);

  if (!market) {
    notFound();
  }

  return (
    <main className="market-page">
      <div className="container">
        {/* Breadcrumb */}
        <div className="breadcrumb">
          <Link href="/">Accueil</Link> <span>/</span> <span>Marchés</span> <span>/</span> <span className="current">{market.name}</span>
        </div>

        {/* Market Header */}
        <div className="market-header" style={{ background: market.gradient }}>
          <div className="market-header-content">
            <h1>{market.name}</h1>
            <p>{market.description}</p>
            <div className="market-stats">
              <div className="stat-badge"><i className="fas fa-users"></i> {market.sellers} Vendeurs</div>
              <div className="stat-badge"><i className="fas fa-box-open"></i> {market.products} Produits</div>
              <div className="stat-badge"><i className="fas fa-star"></i> {market.rating}/5 ({market.reviews} avis)</div>
            </div>
          </div>
        </div>

        {/* Filter & Sort Bar */}
        <div className="market-toolbar">
          <div className="toolbar-left">
            <span className="result-count">{market.products.length} articles trouvés</span>
            <button className="filter-btn"><i className="fas fa-sliders-h"></i> Filtres</button>
          </div>
          <div className="toolbar-right">
            <select className="sort-select">
              <option>Trier par : Pertinence</option>
              <option>Prix croissant</option>
              <option>Prix décroissant</option>
              <option>Meilleures notes</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        <div className="products-grid">
          {market.products.map((product) => (
            <div className="product-card" key={product.id}>
              <div className="product-img" style={{ background: `linear-gradient(135deg, ${product.color} 0%, #ffffff 100%)` }}>
                {product.discount && <span className="discount-badge">{product.discount}</span>}
                <div className="product-overlay">
                  <button className="quick-view-btn">Aperçu rapide</button>
                </div>
              </div>
              <div className="product-info">
                <span className="product-vendor"><i className="fas fa-store"></i> {product.vendor}</span>
                <h3 className="product-name">{product.name}</h3>
                <div className="product-rating">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className={`fas fa-star ${i < Math.floor(product.rating) ? 'filled' : 'empty'}`}></i>
                  ))}
                  <span>({product.reviews})</span>
                </div>
                <div className="product-price-row">
                  <span className="price">{product.price} FCFA</span>
                  {product.oldPrice && <span className="old-price">{product.oldPrice} FCFA</span>}
                </div>
                <button className="add-cart-btn"><i className="fas fa-cart-plus"></i> Ajouter</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}