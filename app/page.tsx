import TopBar from '../components/TopBar';
import MainHeader from '../components/MainHeader';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <main>
      <TopBar />
      <MainHeader />
      <Navigation />
      <Hero />
      
      {/* Espace vide pour l'instant */}
      <div className="container" style={{ padding: '40px 0' }}>
        <h2>Section Suivante : Marchés Populaires...</h2>
      </div>
    </main>
  )
}