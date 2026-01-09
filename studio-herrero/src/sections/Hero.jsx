import { motion } from 'framer-motion';
import React from 'react';

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center px-6 text-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-4xl"
      >
        <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-sh-gray-medium mb-10 block">
          Studio Herrero — Estética Consciente
        </span>
        
        <h1 className="font-serif italic text-4xl md:text-6xl text-sh-black-soft leading-[1.3] mb-12">
          “La simplicidad es la clave de la <br className="hidden md:block"/> verdadera elegancia”
        </h1>
        
        <div className="w-[1px] h-20 bg-sh-stone mx-auto"></div>
      </motion.div>
    </section>
  );
}