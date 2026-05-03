// app/markets/[slug]/page.jsx
import { marketDefinitions } from '@/data/markets';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import MarketNav from '@/components/MarketNav';
import Sidebar from '@/components/Sidebar';
import CategoryCards from '@/components/CategoryCards'; // ← Nouveau composant

export default async function MarketPage({ params }) {
  const { slug } = await params;
  const market = marketDefinitions[slug];
  
  if (!market) {
    notFound();
  }

  return (
    <main>
      <Header />
      <MarketNav />
      <div className="container">
        <div className="page-layout">
          
          <Sidebar marketSlug={slug} />
          
          <div className="main-content">
            
            <div className="market-banner" style={{
              background: 'linear-gradient(135deg, #FF6A00, #FF8C00)',
              borderRadius: '16px',
              padding: '32px',
              color: 'white',
              marginBottom: '24px',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <h1 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '8px' }}>
                {market.icon} {market.name}
              </h1>
              <p style={{ fontSize: '16px', opacity: 0.9 }}>{market.desc}</p>
              
              {market.specialRule === 'flash_sale' && (
                <span style={{
                  background: '#FFD700',
                  color: '#000',
                  padding: '6px 16px',
                  borderRadius: '20px',
                  fontSize: '14px',
                  fontWeight: 'bold',
                  display: 'inline-block',
                  marginTop: '12px'
                }}>
                  🔥 Vente flash 6h-8h
                </span>
              )}
            </div>
            
            <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '16px', color: '#333' }}>
              Que trouve-t-on à {market.name} ?
            </h2>
            
            {/* Utilisation du Client Component pour les cartes avec hover */}
            <CategoryCards categories={market.categories} />
            
          </div>
        </div>
      </div>
    </main>
  );
}