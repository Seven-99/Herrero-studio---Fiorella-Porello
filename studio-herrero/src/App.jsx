import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Landing from './pages/Landing'; 
import Blog from './pages/Blog'; 
import PostDetail from './pages/PostDetail'; // 1. Importamos la nueva página
import Contact from './sections/Contact'; 
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <Router>
      <ScrollToTop /> 
      
      <main className="bg-[#F5F4F1] min-h-screen antialiased selection:bg-[#CFC6B8] selection:text-[#1E1E1C]">
        <Navbar />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/journal" element={<Blog />} />
            {/* 2. Esta ruta detecta el enlace único (slug) de cada artículo de Sanity */}
            <Route path="/post/:slug" element={<PostDetail />} />
            <Route path="/contacto" element={<Contact />} />
          </Routes>   
        <Footer />
      </main>
    </Router>
  );
}