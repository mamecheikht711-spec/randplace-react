import Header from '../components/Header';
import MarketNav from '../components/MarketNav';
import Sidebar from '../components/Sidebar';
import HeroBanner from '../components/HeroBanner';
import PromoSection from '../components/PromoSection';
import PopularProducts from '../components/PopularProducts';
import WhyChoose from '../components/WhyChoose';
import ChatBot from '../components/ChatBot'; // <--- AJOUTE CECI

export default function Home() {
  return (
    <main>
      <Header />
      <MarketNav />
      <div className="container">
        <div className="page-layout">
          <Sidebar />
          <div className="main-content">
            <HeroBanner />
            <PromoSection />
            <PopularProducts />
            <WhyChoose />
          </div>
        </div>
      </div>
      
      {/* Le Chatbot remplace l'ancien widget */}
      <ChatBot /> 
    </main>
  )
}