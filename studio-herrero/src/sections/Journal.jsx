// src/sections/Journal.jsx
import { motion } from 'framer-motion';
import Button from '../components/Button';

export default function Journal() {
  const posts = [
    { title: "La intención detrás del vestir", cat: "Estética" },
    { title: "Curaduría: El arte de seleccionar", cat: "Procesos" }
  ];

  return (
    <section id="blog" className="py-32 bg-sh-offwhite px-6 border-t border-sh-stone">
      <div className="max-w-6xl mx-auto">
        <motion.header 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-20 text-center"
        >
          <span className="font-sans text-[10px] uppercase tracking-[0.5em] text-sh-accent mb-4 block">Journal</span>
          <h2 className="font-serif italic text-4xl text-sh-black-soft">Pensamiento y Acción</h2>
        </motion.header>

        <div className="grid md:grid-cols-2 gap-px bg-sh-stone"> {/* El Gris Piedra hace de línea divisoria */}
          {posts.map((post, i) => (
            <motion.article 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-sh-offwhite p-12 group cursor-pointer"
            >
              <div className="overflow-hidden mb-8 aspect-video bg-sh-sand/10">
                <div className="w-full h-full bg-sh-taupe/5 group-hover:scale-105 transition-transform duration-1000" />
              </div>
              <span className="font-sans text-[10px] uppercase tracking-widest text-sh-gray-medium">{post.cat}</span>
              <h3 className="font-serif text-2xl mt-4 mb-6 group-hover:italic transition-all">{post.title}</h3>
              <Button variant="ghost">Leer más</Button>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}