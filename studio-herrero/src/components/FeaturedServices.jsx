import { motion } from 'framer-motion';
import { HashLink as Link } from 'react-router-hash-link';

const homeServices = [
  {
    title: "Análisis de Imagen Personal",
    subtitle: "Diagnóstico integral de estilo e identidad",
    label: "Servicio Fundacional",
    path: "/servicios#analisis"
  },
  {
    title: "Curated Closet",
    subtitle: "Curaduría y organización consciente del guardarropa",
    label: "Servicio Diferencial",
    path: "/servicios#closet-curado"
  },
  {
    title: "Estilismo Integral",
    subtitle: "Servicio personalizado con análisis completo y dossier",
    label: "Servicio Premium",
    path: "/servicios#estilismo-integral"
  },
  {
    title: "Journal",
    subtitle: "Lecturas sobre estilo, diseño y lifestyle consciente",
    label: "Pilar Editorial",
    path: "/journal"
  }
];

export default function FeaturedServices() {
  return (
    <section className="py-32 bg-[#F5F4F1] px-6 md:px-20 border-t border-[#D6D4CF]/20">
      <div className="max-w-7xl mx-auto">
        <header className="mb-24 space-y-4">
          <span className="font-sans text-[10px] uppercase tracking-[0.5em] text-[#8E8C88] block">Propuesta Curada</span>
          <h2 className="font-serif italic text-5xl text-[#1E1E1C]">Ejes de Trabajo</h2>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-32">
          {homeServices.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group flex flex-col items-start"
            >
              <span className="font-sans text-[9px] uppercase tracking-[0.3em] text-[#D6D4CF] mb-6">
                {service.label}
              </span>
              <h3 className="font-serif text-3xl md:text-4xl text-[#1E1E1C] mb-4 group-hover:italic transition-all duration-500">
                {service.title}
              </h3>
              <p className="font-serif italic text-[#6F6A63] text-lg mb-8 max-w-sm leading-relaxed">
                {service.subtitle}
              </p>
              <Link 
                smooth
                to={service.path}
                className="font-sans text-[10px] uppercase tracking-[0.4em] text-[#1E1E1C] border-b border-[#1E1E1C] pb-1 hover:text-[#8E8C88] hover:border-[#8E8C88] transition-all"
              >
                Explorar
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}