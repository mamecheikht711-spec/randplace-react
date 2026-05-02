import TopBar from '../components/TopBar';
import MainHeader from '../components/MainHeader';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import PopularMarkets from '../components/PopularMarkets';
import TrustSection from '../components/TrustSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main>
      <TopBar />
      <MainHeader />
      <Navigation />
      <Hero />
      <PopularMarkets />
      <TrustSection />
      <Footer />
    </main>
  )
}