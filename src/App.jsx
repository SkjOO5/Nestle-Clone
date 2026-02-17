import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Brands from './components/Brands';
import Products from './components/Products';
import Nutrition from './components/Nutrition';
import About from './components/About';
import Sustainability from './components/Sustainability';
import Footer from './components/Footer';
import Cursor from './components/Cursor';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 border-4 border-t-amber-500 border-r-transparent border-b-blue-500 border-l-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-gray-500 font-medium">Good Food, Good Life</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-gray-50 cursor-none">
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <Brands />
        <Products />
        <Nutrition />
        <About />
        <Sustainability />
      </main>
      <Footer />
    </div>
  );
}

export default App;
