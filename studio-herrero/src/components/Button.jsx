export default function Button({ children, variant = 'primary', ...props }) {
  const variants = {
    // Fondo negro suave, texto off-white
    primary: "bg-sh-black-soft text-sh-offwhite hover:bg-sh-taupe",
    // Bordes sutiles para un look más editorial
    outline: "border border-sh-black-soft text-sh-black-soft hover:bg-sh-stone/20",
    // Solo texto con línea abajo (muy común en estética consciente)
    ghost: "text-sh-black-soft border-b border-sh-stone hover:border-sh-black-soft px-0 py-1"
  };

  return (
    <button 
      className={`
        ${variants[variant]} 
        px-8 py-3 
        font-sans text-[10px] uppercase tracking-[0.25em] 
        transition-all duration-300 ease-in-out
        disabled:opacity-50
      `}
      {...props}
    >
      {children}
    </button>
  );
}