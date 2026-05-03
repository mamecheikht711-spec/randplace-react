"use client";
import { getCategoriesForMarket, ALL_CATEGORIES } from '../data/markets';

export default function Sidebar({ marketSlug = null }) {
  const categories = marketSlug 
    ? getCategoriesForMarket(marketSlug) 
    : ALL_CATEGORIES;
    
  const marketName = marketSlug 
    ? marketSlug.charAt(0).toUpperCase() + marketSlug.slice(1) 
    : null;

  return (
    <aside className="sidebar">
      <div className="sidebar-card">
        <div className="sidebar-title">
          {marketName 
            ? `Catégories - ${marketName}` 
            : 'Explorer par catégorie'}
        </div>
        <ul className="category-list">
          {categories.map((cat, i) => (
            <li className="cat-item" key={i}>
              <span className="cat-emoji">{cat.icon}</span>
              <div>
                <div style={{ fontWeight: 600 }}>{cat.name}</div>
                <div style={{ fontSize: 11, color: 'var(--gray)' }}>{cat.desc}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="vendor-cta">
        <h3>Vous êtes vendeur ?</h3>
        <p>Rejoignez des milliers de vendeurs et développez votre business.</p>
        <button className="btn-vendor-sm">Devenir vendeur</button>
      </div>
    </aside>
  )
}