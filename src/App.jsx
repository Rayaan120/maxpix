import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import MainLayout from './layouts/MainLayout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

// Service Detail Pages
import ExhibitionStandDesign from './pages/services/ExhibitionStandDesign';
import EventManagement from './pages/services/EventManagement';
import DigitalPrinting from './pages/services/DigitalPrinting';
import VehicleGraphics from './pages/services/VehicleGraphics';
import SignageAndWayfinding from './pages/services/SignageAndWayfinding';

// Exhibition Sub-Service Pages
import CustomStand from './pages/services/exhibition/CustomStand';
import ModularStand from './pages/services/exhibition/ModularStand';
import TradeShowBooth from './pages/services/exhibition/TradeShowBooth';
import CountryPavilion from './pages/services/exhibition/CountryPavilion';

// Additional Exhibition Services
import ExhibitionStandContractor from './pages/services/exhibition/ExhibitionStandContractor';
import ExhibitionStandDesigns from './pages/services/exhibition/ExhibitionStandDesigns';
import ExhibitionStandBuilders from './pages/services/exhibition/ExhibitionStandBuilders';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="services/exhibition-stand-design" element={<ExhibitionStandDesign />} />
            <Route path="services/event-management" element={<EventManagement />} />
            <Route path="services/digital-printing" element={<DigitalPrinting />} />
            <Route path="services/vehicle-graphics" element={<VehicleGraphics />} />
            <Route path="services/signage-and-wayfinding" element={<SignageAndWayfinding />} />

            {/* Exhibition Sub-Routes */}
            <Route path="services/custom-stand" element={<CustomStand />} />
            <Route path="services/modular-stand" element={<ModularStand />} />
            <Route path="services/trade-show-booth" element={<TradeShowBooth />} />
            <Route path="services/country-pavilion" element={<CountryPavilion />} />

            {/* Additional Exhibition Service Routes */}
            <Route path="services/exhibition-stand-contractor" element={<ExhibitionStandContractor />} />
            <Route path="services/exhibition-stand-designs" element={<ExhibitionStandDesigns />} />
            <Route path="services/exhibition-stand-builders" element={<ExhibitionStandBuilders />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
