import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Landing from './pages/Landing'; 
import Blog from './pages/Blog';       
import Contact from './sections/Contact'; 
import ScrollToTop from './components/ScrollToTop'; // Componente vital

export default function App() {
  return (
    <Router>
      {/* ScrollToTop debe estar dentro del Router para escuchar los cambios de ruta */}
      <ScrollToTop /> 
      
      <main className="bg-[#F5F4F1] min-h-screen antialiased selection:bg-[#CFC6B8] selection:text-[#1E1E1C]">
        <Navbar />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/journal" element={<Blog />} />
            <Route path="/contacto" element={<Contact />} />
          </Routes>   
        <Footer />
      </main>
    </Router>
  );
}