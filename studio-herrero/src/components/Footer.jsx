// src/components/Footer.jsx
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer id="contacto" className="bg-[#D6D4CF] py-24 px-10 border-t border-[#8E8C88]/20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-end gap-12">
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="space-y-4"
        >
          {/* Logo Studio Herrero en NT Valentino */}
          <h2 className="font-display text-4xl tracking-tighter text-[#1E1E1C]">SH</h2>
          <p className="font-sans text-[10px] uppercase tracking-[0.4em] text-[#8E8C88]">
            Estética Consciente — 2026
          </p>
        </motion.div>

        <div className="flex gap-10 font-sans text-[11px] uppercase tracking-widest text-[#6F6A63]">
          <a href="#" className="hover:text-[#1E1E1C] transition-colors">Instagram</a>
          <a href="mailto:studioherrero.office@gmail.com" className="hover:text-[#1E1E1C] transition-colors italic font-serif lowercase tracking-normal text-base">Email de contacto</a>
        </div>
      </div>
    </footer>
  );
}