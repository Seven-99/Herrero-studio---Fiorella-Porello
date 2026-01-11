import { motion } from 'framer-motion';
import Button from '../components/Button';

export default function Contact() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="pt-48 pb-32 px-10 bg-sh-offwhite min-h-screen"
    >
      <div className="max-w-xl mx-auto border-l border-sh-stone pl-12">
        <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-sh-gray-medium mb-6 block">
          Contacto
        </span>
        <h2 className="font-serif italic text-4xl text-sh-black-soft mb-12">
          Comenzar un proceso
        </h2>
        
        <form className="space-y-12">
          <div className="relative">
            <label className="font-sans text-[9px] uppercase tracking-widest text-sh-taupe">Nombre Completo</label>
            <input type="text" className="w-full bg-transparent border-b border-sh-stone py-3 outline-none focus:border-sh-black-soft transition-colors placeholder:text-sh-gray-medium/50 font-sans" />
          </div>
          
          <div className="relative">
            <label className="font-sans text-[9px] uppercase tracking-widest text-sh-taupe">Email</label>
            <input type="email" className="w-full bg-transparent border-b border-sh-stone py-3 outline-none focus:border-sh-black-soft transition-colors placeholder:text-sh-gray-medium/50 font-sans" />
          </div>

          <div className="pt-6">
            <Button variant="primary">Enviar Solicitud</Button>
          </div>
        </form>

        <div className="mt-24 pt-12 border-t border-sh-stone/30">
          <p className="font-serif italic text-sh-taupe text-lg">studioherrero.office@gmail.com</p>
          <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-sh-gray-medium mt-2">Córdoba, Argentina</p>
        </div>
      </div>
    </motion.section>
  );
}