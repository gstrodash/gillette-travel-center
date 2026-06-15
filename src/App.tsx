import './App.css';
import Header from './components/Header';
import TruckHero from './components/TruckHero';
import Amenities from './components/Amenities';
import Location from './components/Location';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <TruckHero />
        <Amenities />
        
        {/* Location Section (Now includes the gas station photo) */}
        <Location />
      </main>
    </div>
  );
}

export default App;
