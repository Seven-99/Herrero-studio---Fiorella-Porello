import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { client, urlFor } from '../sanityClient';
import { PortableText } from '@portabletext/react';
import { motion } from 'framer-motion';

// Componente para renderizar imágenes dentro del texto de Sanity
const ptComponents = {
  types: {
    image: ({ value }) => (
      <figure className="my-12">
        <img
          src={urlFor(value).url()}
          alt={value.alt || ' ' }
          className="w-full h-auto object-cover bg-[#D6D4CF]"
        />
        {value.caption && (
          <figcaption className="mt-4 text-center font-serif italic text-sm text-[#8E8C88]">
            {value.caption}
          </figcaption>
        )}
      </figure>
    ),
  },
};

export default function PostDetail() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const query = `*[_type == "post" && slug.current == $slug][0]`;
    client.fetch(query, { slug }).then((data) => setPost(data));
    window.scrollTo(0, 0); // Volver arriba al entrar
  }, [slug]);

  if (!post) return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5F4F1]">
      <span className="font-serif italic text-[#8E8C88]">Cargando pensamiento...</span>
    </div>
  );

  return (
    <motion.article 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-40 pb-24 bg-[#F5F4F1] min-h-screen"
    >
      <div className="max-w-3xl mx-auto px-6">
        
        {/* Navegación de regreso */}
        <Link to="/journal" className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#8E8C88] hover:text-[#1E1E1C] transition-colors mb-12 inline-block">
          ← Volver al Journal
        </Link>

        {/* Encabezado del Artículo */}
        <header className="mb-16">
          <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-[#8E8C88]">
            {new Date(post.publishedAt).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}
          </span>
          <h1 className="font-serif text-5xl md:text-6xl text-[#1E1E1C] mt-6 leading-[1.1]">
            {post.title}
          </h1>
        </header>

        {/* Imagen Destacada Principal */}
        {post.mainImage && (
          <div className="mb-20 aspect-[16/9] overflow-hidden bg-[#D6D4CF]">
            <img 
              src={urlFor(post.mainImage).url()} 
              alt={post.title} 
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Contenido del Artículo (Rich Text) */}
        <div className="prose prose-stone prose-lg max-w-none 
          font-serif leading-relaxed text-[#4A4A48]
          prose-headings:font-serif prose-headings:font-normal prose-headings:text-[#1E1E1C]
          prose-p:mb-8 prose-p:text-lg
          prose-strong:text-[#1E1E1C] prose-blockquote:italic prose-blockquote:border-l-[#CFC6B8]">
          <PortableText value={post.body} components={ptComponents} />
        </div>

        {/* Footer del Artículo */}
        <footer className="mt-24 pt-12 border-t border-[#D6D4CF]/50 text-center">
          <p className="font-serif italic text-[#8E8C88]">Studio Herrero — Pensamiento Curado</p>
        </footer>
      </div>
    </motion.article>
  );
}