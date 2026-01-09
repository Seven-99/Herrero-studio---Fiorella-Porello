import { motion } from 'framer-motion';
import Button from '../components/Button';

export default function About() {
  // Configuración de la animación de entrada
  const reveal = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] } 
    }
  };

  return (
    <section id="estudio" className="py-24 bg-[#F5F4F1] px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        {/* Lado Imagen: Revelación con Zoom sutil */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="aspect-[3/4] bg-[#D6D4CF] overflow-hidden grayscale hover:grayscale-0 transition-all duration-[1.5s] group"
        >
          <img 
            src="/tu-foto-estetica.jpg" 
            alt="Fiore Herrero" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s]"
          />
        </motion.div>

        {/* Lado Texto: Aparición secuencial */}
        <motion.div 
          className="space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } }
          }}
        >
          <motion.span 
            variants={reveal}
            className="font-sans text-[10px] uppercase tracking-[0.4em] text-[#8E8C88] block"
          >
            Studio Herrero — El origen
          </motion.span>
          
          <motion.h2 
            variants={reveal}
            className="font-serif italic text-4xl text-[#1E1E1C] leading-tight"
          >
            Vestir con intención
          </motion.h2>

          <motion.div 
            variants={reveal}
            className="space-y-6 font-sans text-[#6F6A63] leading-[1.8]"
          >
            <p>
              Soy <span className="text-[#1E1E1C] font-semibold">Fiore Herrero</span>, creadora de un estudio dedicado a la imagen, el estilo y la estética consciente.
            </p>
            <p>
              Donde la imagen no se entiende como tendencia ni como imposición externa, sino como una herramienta de coherencia.
            </p>
          </motion.div>

          {/* Botón con acento Verde Grisáceo sutil */}
          <motion.div variants={reveal}>
            <Button variant="ghost" className="hover:text-[#7E857C] transition-colors">
              Conocer mi proceso
            </Button>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}