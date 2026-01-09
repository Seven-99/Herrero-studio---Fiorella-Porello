// src/components/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Si la URL tiene un # (ej: /#estudio), deja que el handleScroll se encargue o espera al render
    if (hash) {
      const id = hash.replace("#", "");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      // Si no hay hash, vuelve arriba (comportamiento normal para Blog y Contacto)
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}