export default function Section({ 
  children, 
  title, 
  subtitle, 
  className = "", 
  dark = false 
}) {
  return (
    <section className={`py-24 px-6 md:px-12 ${dark ? 'bg-sh-stone/10' : 'bg-sh-offwhite'} ${className}`}>
      <div className="max-w-6xl mx-auto">
        {(title || subtitle) && (
          <header className="mb-16">
            {subtitle && (
              <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-sh-gray-medium mb-4 block">
                {subtitle}
              </span>
            )}
            {title && (
              <h2 className="font-serif italic text-3xl md:text-4xl text-sh-black-soft">
                {title}
              </h2>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}