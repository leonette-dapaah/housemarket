import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { HomePage, PropertyListing } from '@/features'
import { Footer, Navbar } from './components';

function App() {
  return (
    <div className="m-0 p-0 min-h-screen flex w-screen">
      <Router>
        <Routes>
          <Route path="/*" element={<MainLayout />} />
        </Routes>
      </Router>
    </div>
  )
}

function MainLayout() {
  return (
    <div className="m-0 p-0 min-h-screen font-jost">
      <>
      <Navbar />
      <div style={{ padding: "2.5rem" }} className="flex flex-1 box-border mt-14 w-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/property-listing" element={<PropertyListing />} />
        </Routes>
      </div>
      <Footer />
      </>
    </div>
  );
}

export default App
