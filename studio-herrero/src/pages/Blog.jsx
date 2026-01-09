import { motion } from 'framer-motion';

export default function Blog() {
const journalCategories = [
  "Arquitectura", "Diseño", "Lifestyle Consciente", 
  "Bienestar", "Orden Visual", "Estética de Vida"
];

const featuredPosts = [
  {
    category: "Arquitectura",
    title: "La luz como material de diseño",
    subtitle: "Architectural Serenity",
    image: "/path-to-image-1.jpg" // Aquí irán las fotos estéticas
  },
  {
    category: "Estética de Vida",
    title: "El arte de la curaduría personal",
    subtitle: "Curated Living",
    image: "/path-to-image-2.jpg"
  },
  // Más posts...
];
  return (
<section className="pt-40 pb-24 bg-[#F5F4F1] min-h-screen px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Editorial */}
        <header className="mb-24 text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-sans text-[10px] uppercase tracking-[0.5em] text-[#8E8C88]"
          >
            Lifestyle & Editorial Content
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-serif italic text-6xl mt-6 text-[#1E1E1C]"
          >
            Journal
          </motion.h2>
          <p className="font-serif text-[#6F6A63] mt-4 text-lg italic">Un espacio editorial curado.</p>
        </header>

        {/* Filtro de Categorías (Minimal) */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-20 border-y border-[#D6D4CF]/30 py-6">
          {journalCategories.map((cat) => (
            <button key={cat} className="font-sans text-[9px] uppercase tracking-[0.3em] text-[#8E8C88] hover:text-[#1E1E1C] transition-colors">
              {cat}
            </button>
          ))}
        </div>

        {/* Grilla de Artículos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-24">
          {featuredPosts.map((post, index) => (
            <motion.article 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/5] overflow-hidden bg-[#D6D4CF] mb-8 relative">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-in-out" 
                />
              </div>
              <div className="space-y-3">
                <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#8E8C88]">
                  {post.category}
                </span>
                <h3 className="font-serif text-3xl text-[#1E1E1C] leading-tight group-hover:italic transition-all">
                  {post.title}
                </h3>
                <p className="font-serif italic text-[#8E8C88] text-sm">
                  {post.subtitle}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}