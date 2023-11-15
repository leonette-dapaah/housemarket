// Import necessary components and libraries
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import { HomePage, PropertyListing, FAQs, Buy, Fav, PropertyDetails, MapInt, } from '@/features';
import { Footer, Navbar, } from './components';

function App() {
  return (
    <div className="m-0 p-0 flex w-screen min-h-screen ">
      <Router>
        <Routes>
          <Route path="/*" element={<MainLayout />} />
        </Routes>
      </Router>
    </div>
  );
}

function MainLayout() {
  return (
    <div className="m-0 p-0 min-h-screen font-jost">
      <>
      <Navbar />
      <div className="flex flex-1 box-border mt-14 w-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/property-listing" element={<PropertyListing />} />
          <Route path="/features/faqs" element={<FAQs />} />
          <Route path="/features/buy" element={<Buy />} />
          <Route path="/features/favourites" element={<Fav />} />
          <Route path="/features/propertyDetails" element={<PropertyDetails />} />
          <Route path="/features/map" element={<MapInt />} />
        </Routes>
      </div>
      <Footer />
      </>
    </div>
  );
}

export default App;
