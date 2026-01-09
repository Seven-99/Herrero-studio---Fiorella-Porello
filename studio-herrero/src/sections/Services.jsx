import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const mainServices = [
  {
    id: "01",
    anchor: "analisis",
    title: "Análisis de Imagen Personal",
    subtitle: "Personal Image Analysis",
    items: ["Diagnóstico de estilo personal", "Análisis de morfología", "Análisis cromático", "Evaluación de estilo de vida y objetivos"],
    delivery: "Dossier de Imagen Personal (digital, visual y escrito)"
  },
  {
    id: "02",
    anchor: "closet-curado",
    title: "Clóset Curado",
    subtitle: "Curated Closet",
    description: "Curaduría y optimización estética y funcional del guardarropa.",
    items: ["Revisión integral del guardarropa", "Identificación de piezas clave", "Detección de faltantes estratégicos", "Edición de combinaciones", "Organización estética y funcional"]
  },
  {
    id: "03",
    anchor: "organizacion",
    title: "Edición & Organización de Clóset",
    subtitle: "Closet Detox & Edit",
    items: ["Edición guiada de prendas", "Organización por categorías y uso", "Optimización del espacio", "Sistema para mantener el orden"]
  }
];

const guideSubServices = [
  { title: "Análisis de Color Personal", subtitle: "Color Analysis & Palette Design", text: "Definición de paleta personal y diseño de paleta aplicado a vestuario y accesorios." },
  { title: "Edición de Look para Eventos", subtitle: "Occasion Styling / Event Look Curation", text: "Curaduría de imagen para ocasiones especiales con enfoque estético y estratégico." },
  { title: "Edición de Viaje by Studio Herrero", subtitle: "Travel Wardrobe Edit", text: "Curaduría inteligente del guardarropa de viaje: selección estratégica y looks combinables." },
  { title: "Estilismo Integral", subtitle: "Signature Image Experience", anchor: "estilismo-integral", text: "Servicio Premium: Análisis completo, Color, Morfología, Estilo y Curated Closet con Dossier Integral.", premium: true },
  { title: "Visagismo Integral", subtitle: "Holistic Facial Analysis", text: "Análisis facial, recomendaciones de maquillaje y propuesta de estilo de cabello con especialistas." }
];

export default function Services() {
  const [openSub, setOpenSub] = useState(null);
  const location = useLocation();

  // Lógica para abrir el acordeón si el link de la Home apunta a Estilismo Integral
  useEffect(() => {
    if (location.hash === "#estilismo-integral") {
      const index = guideSubServices.findIndex(s => s.anchor === "estilismo-integral");
      setOpenSub(index);
    }
  }, [location]);

  return (
    <section id="servicios" className="py-32 bg-[#F5F4F1] px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        <header className="mb-24">
          <h2 className="font-serif italic text-5xl md:text-6xl text-[#1E1E1C]">Asesoría de Imagen</h2>
          <p className="font-sans text-[10px] uppercase tracking-[0.5em] text-[#8E8C88] mt-4">Image Consulting</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-32">
          {mainServices.map((s) => (
            <div key={s.id} id={s.anchor} className="group border-t border-[#D6D4CF] pt-10 flex flex-col justify-between scroll-mt-32">
              <div>
                <span className="font-sans text-[10px] text-[#D6D4CF] block mb-8">{s.id}</span>
                <h3 className="font-serif text-2xl text-[#1E1E1C] mb-1">{s.title}</h3>
                <p className="font-serif italic text-[#8E8C88] text-sm mb-6">{s.subtitle}</p>
                {s.description && <p className="font-sans text-[11px] text-[#6F6A63] uppercase tracking-wider leading-relaxed mb-6 italic">{s.description}</p>}
                <ul className="space-y-3 mb-10">
                  {s.items.map((item, i) => (
                    <li key={i} className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#8E8C88] flex items-center gap-2">
                      <span className="w-1 h-px bg-[#D6D4CF]" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <Link to="/contacto" className="inline-block border border-[#1E1E1C] px-8 py-4 font-sans text-[9px] uppercase tracking-[0.3em] text-[#1E1E1C] hover:bg-[#1E1E1C] hover:text-white transition-all duration-500 text-center">
                Solicitar información
              </Link>
            </div>
          ))}
        </div>

        <div className="border-t border-[#1E1E1C] pt-16 mb-40">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-4">
            <h3 className="font-serif text-4xl text-[#1E1E1C]">Guía de Estilo Personal</h3>
            <p className="font-serif italic text-[#8E8C88] text-xl">Personal Style Guide</p>
          </div>

          <div className="space-y-4">
            {guideSubServices.map((sub, index) => (
              <div key={index} id={sub.anchor || ""} className="border-b border-[#D6D4CF]/50 overflow-hidden scroll-mt-32">
                <button 
                  onClick={() => setOpenSub(openSub === index ? null : index)}
                  className="w-full py-6 flex justify-between items-center group text-left"
                >
                  <div>
                    <span className="font-serif text-xl text-[#1E1E1C] group-hover:italic transition-all uppercase tracking-tight">{sub.title}</span>
                    <span className="ml-4 font-serif italic text-[#8E8C88] text-sm hidden md:inline">{sub.subtitle}</span>
                  </div>
                  <span className={`text-[#1E1E1C] transition-transform duration-500 ${openSub === index ? 'rotate-180' : ''}`}>
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 5.5L7.5 12.5L0.5 5.5" stroke="currentColor" strokeWidth="0.5"/></svg>
                  </span>
                </button>
                
                <AnimatePresence>
                  {openSub === index && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
                    >
                      <div className={`pb-10 pt-4 flex flex-col md:flex-row justify-between items-start gap-8 ${sub.premium ? 'bg-[#CFC6B8]/10 p-6' : ''}`}>
                        <p className="font-sans text-[12px] text-[#6F6A63] uppercase tracking-[0.2em] leading-relaxed max-w-2xl">
                          {sub.text}
                        </p>
                        <Link to="/contacto" className="font-sans text-[9px] uppercase tracking-[0.3em] border-b border-[#1E1E1C] pb-1 hover:text-[#8E8C88] hover:border-[#8E8C88] transition-all whitespace-nowrap">
                          Solicitar información
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        <div className="relative py-40 border-t border-[#D6D4CF]/30 flex flex-col items-center text-center">
          <span className="font-sans text-[10px] uppercase tracking-[0.6em] text-[#D6D4CF] mb-4">Próximamente</span>
          <h2 className="font-serif italic text-6xl text-[#D6D4CF] select-none">Espacios Curados</h2>
          <p className="font-serif text-[#D6D4CF] mt-2 italic text-xl">Curated Spaces</p>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="font-sans text-[150px] font-bold text-[#1E1E1C]/[0.02] uppercase tracking-[0.2em] select-none">Studio</span>
          </div>
        </div>
      </div>
    </section>
  );
}