import React, { useState, useEffect } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-white/90 backdrop-blur'}`}>
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 focus:outline-none" aria-label="Discretta Consultoria">
          <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center text-white font-black text-lg select-none">D</div>
          <span className="font-bold text-lg text-gray-900 tracking-tight">Discretta <span className="text-blue-600">Consultoria</span></span>
        </a>

        {/* Nav Desktop */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Navegação principal">
          <a href="#servicos" className="text-gray-600 font-medium hover:text-blue-600 transition text-sm">Serviços</a>
          <a href="#resultados" className="text-gray-600 font-medium hover:text-blue-600 transition text-sm">Resultados</a>
          <a href="#sobre" className="text-gray-600 font-medium hover:text-blue-600 transition text-sm">Sobre</a>
          <a href="#faq" className="text-gray-600 font-medium hover:text-blue-600 transition text-sm">FAQ</a>
        </nav>

        {/* CTA Desktop */}
        <a
          href="https://wa.me/5511999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-lg font-semibold text-sm shadow-sm hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-400"
          aria-label="Agendar Consultoria pelo WhatsApp"
        >
          Agendar Consultoria
        </a>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition focus:outline-none focus:ring-2 focus:ring-blue-400"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          <a href="#servicos" className="text-gray-700 font-medium hover:text-blue-600 transition" onClick={() => setMenuOpen(false)}>Serviços</a>
          <a href="#resultados" className="text-gray-700 font-medium hover:text-blue-600 transition" onClick={() => setMenuOpen(false)}>Resultados</a>
          <a href="#sobre" className="text-gray-700 font-medium hover:text-blue-600 transition" onClick={() => setMenuOpen(false)}>Sobre</a>
          <a href="#faq" className="text-gray-700 font-medium hover:text-blue-600 transition" onClick={() => setMenuOpen(false)}>FAQ</a>
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-5 py-3 rounded-lg font-semibold text-center hover:bg-blue-700 transition"
          >
            Agendar Consultoria
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;

