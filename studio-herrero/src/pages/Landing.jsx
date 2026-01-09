// src/pages/Landing.jsx
import Hero from '../sections/Hero';
import About from '../sections/About';
import Services from '../sections/Services';
import { motion } from 'framer-motion';
import FeaturedServices from '../components/FeaturedServices';

export default function Landing() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Hero />
      <div id="estudio">
        <About />
        <FeaturedServices />
      </div>
      <div id="servicios">
        <Services />
      </div>
    </motion.div>
  );
}