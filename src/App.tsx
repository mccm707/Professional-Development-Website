import { Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar';
import Footer from './components/footer';

import Home from './pages/home'; // You'll move your current main content into here
import About from './pages/about';
import Contact from './pages/contact';
import Services from './pages/services';

const App = (): JSX.Element => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;