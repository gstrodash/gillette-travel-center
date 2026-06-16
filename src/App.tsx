import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import TruckHero from './components/TruckHero';
import Amenities from './components/Amenities';
import Location from './components/Location';
import BehindTheBuild from './components/BehindTheBuild';

function Home() {
  return (
    <main>
      <TruckHero />
      <Amenities />
      {/* Location Section (Now includes the gas station photo) */}
      <Location />
    </main>
  );
}

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/behind-the-build" element={<BehindTheBuild />} />
      </Routes>
    </div>
  );
}

export default App;
