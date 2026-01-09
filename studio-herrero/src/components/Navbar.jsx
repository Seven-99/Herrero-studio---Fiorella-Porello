import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleScroll = (id) => {
    setIsOpen(false);
    if (location.pathname !== '/') {
      navigate('/#' + id);
    } else {
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const navLinks = [
    { name: 'Estudio', id: 'estudio' },
    { name: 'Procesos', id: 'servicios' },
    { name: 'Pensamiento', path: '/journal' },
    { name: 'Contacto', path: '/contacto' },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full z-[100] bg-[#F5F4F1]/95 backdrop-blur-md px-6 py-6 flex justify-between items-center border-b border-[#D6D4CF]/20">
        <Link to="/" onClick={() => setIsOpen(false)} className="font-display text-xl tracking-widest text-[#1E1E1C] z-[120]">
          STUDIO HERRERO
        </Link>

        {/* Menú Escritorio: No afecta al scroll de la página */}
        <div className="hidden md:flex gap-10 font-sans text-[11px] uppercase tracking-widest text-[#8E8C88]">
          {navLinks.map((link) => (
            link.id ? (
              <button key={link.name} onClick={() => handleScroll(link.id)} className="hover:text-[#1E1E1C] transition-colors uppercase">
                {link.name}
              </button>
            ) : (
              <Link key={link.name} to={link.path} className="hover:text-[#1E1E1C] transition-colors uppercase">
                {link.name}
              </Link>
            )
          ))}
        </div>

        {/* Botón Hamburguesa: Z-index más alto para estar sobre el menú */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden z-[120] relative w-8 h-8 flex flex-col justify-center items-end gap-1.5"
        >
          <motion.span animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 7 : 0 }} className="w-6 h-px bg-[#1E1E1C]" />
          <motion.span animate={{ opacity: isOpen ? 0 : 1 }} className="w-4 h-px bg-[#1E1E1C]" />
          <motion.span animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -7 : 0 }} className="w-6 h-px bg-[#1E1E1C]" />
        </button>
      </nav>

      {/* Overlay Móvil: Cubre todo y es sólido */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#F5F4F1] z-[110] flex flex-col items-center justify-center md:hidden"
          >
            <div className="flex flex-col items-center gap-10">
              {navLinks.map((link) => (
                link.id ? (
                  <button 
                    key={link.name} 
                    onClick={() => handleScroll(link.id)} 
                    className="font-serif italic text-4xl text-[#1E1E1C]"
                  >
                    {link.name}
                  </button>
                ) : (
                  <Link 
                    key={link.name} 
                    to={link.path} 
                    onClick={() => setIsOpen(false)}
                    className="font-serif italic text-4xl text-[#1E1E1C]"
                  >
                    {link.name}
                  </Link>
                )
              ))}
            </div>
            <div className="absolute bottom-16 text-center">
              <p className="font-sans text-[9px] uppercase tracking-[0.4em] text-[#8E8C88]">
                Estética Consciente
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}