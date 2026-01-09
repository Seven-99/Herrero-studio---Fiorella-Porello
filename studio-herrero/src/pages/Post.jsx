import Button from '../components/Button';

export default function Post() {
  return (
    <article className="pt-40 pb-24 bg-sh-offwhite min-h-screen">
      <header className="max-w-3xl mx-auto px-6 text-center mb-20">
        <span className="font-sans text-[10px] uppercase tracking-[0.5em] text-sh-accent mb-6 block">
          08 . Enero . 2026
        </span>
        <h1 className="font-serif italic text-5xl md:text-6xl text-sh-black-soft mb-8 leading-tight">
          El silencio de un guardarropa ordenado
        </h1>
        <div className="h-[1px] w-20 bg-sh-stone mx-auto" />
      </header>

      {/* Imagen Destacada - Uso del 5-10% Beige Arena en el marco */}
      <div className="max-w-5xl mx-auto px-6 mb-20">
        <div className="aspect-video bg-sh-sand p-4">
          <div className="w-full h-full bg-sh-stone overflow-hidden">
            <img src="/blog-image.jpg" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-6">
        <div className="font-sans text-sh-taupe text-lg leading-[2] space-y-8">
          <p>
            Vestir con intención no es solo elegir prendas; es decidir cómo queremos habitar nuestro cuerpo cada día. 
            En Studio Herrero entendemos la imagen como algo silencioso, funcional y duradero.
          </p>
          <blockquote className="font-serif italic text-2xl text-sh-black-soft border-l-2 border-sh-accent pl-8 my-12">
            "El estilo no es una tendencia: es una decisión sostenida."
          </blockquote>
          <p>
            A través de la depuración, descartamos lo que hace ruido para dejar espacio a lo que realmente tiene sentido. 
            Menos piezas, pero más nosotros.
          </p>
        </div>
        
        <footer className="mt-20 pt-10 border-t border-sh-stone flex justify-between items-center">
          <Button variant="ghost">← Volver al Journal</Button>
          <div className="flex gap-4 font-sans text-[10px] uppercase tracking-widest text-sh-gray-medium">
            Compartir: <span>Instagram</span> / <span>Pinterest</span>
          </div>
        </footer>
      </div>
    </article>
  );
}