import React from 'react';

const Footer = () => (
  <footer className="w-full bg-slate-950 text-slate-400 py-12">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-6">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-black text-sm">D</div>
        <span className="font-bold text-white">Discretta <span className="text-blue-400">Consultoria</span></span>
      </div>
      <div className="flex gap-6 text-sm">
        <a href="#servicos" className="hover:text-white transition">Serviços</a>
        <a href="#resultados" className="hover:text-white transition">Resultados</a>
        <a href="#sobre" className="hover:text-white transition">Sobre</a>
        <a href="#faq" className="hover:text-white transition">FAQ</a>
      </div>
      <div className="flex gap-4">
        <a href="https://wa.me/5511999999999" target="_blank" rel="noopener" aria-label="WhatsApp">
          <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 2.042.613 3.938 1.664 5.527L2 22l4.473-1.664A9.953 9.953 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.657 0-3.22-.507-4.527-1.373l-.32-.21-2.66.988.988-2.66-.21-.32A7.963 7.963 0 014 12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8zm3.93-6.29c-.17-.085-1.01-.497-1.166-.553-.156-.057-.27-.085-.384.085-.113.17-.44.553-.54.667-.099.113-.198.127-.368.042-.17-.085-.719-.265-1.37-.846-.507-.452-.85-1.01-.948-1.18-.099-.17-.011-.262.074-.347.076-.076.17-.198.255-.297.085-.099.113-.17.17-.283.057-.113.028-.212-.014-.297-.042-.085-.384-.927-.527-1.27-.14-.34-.283-.294-.384-.3-.099-.007-.212-.007-.326-.007-.113 0-.297.042-.454.198-.156.156-.595.582-.595 1.418 0 .836.609 1.645.694 1.76.085.113 1.2 1.84 2.91 2.5.407.14.724.224.973.287.408.099.78.07 1.074.042.327-.035 1.01-.413 1.153-.813.142-.4.142-.74.099-.813-.042-.07-.155-.113-.326-.198z"/></svg>
        </a>
        <a href="https://instagram.com/discretta" target="_blank" rel="noopener" aria-label="Instagram">
          <svg className="w-6 h-6 text-pink-600" fill="currentColor" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5A4.25 4.25 0 0020.5 16.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 110 10.5 5.25 5.25 0 010-10.5zm0 1.5a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5zm5.25.75a.75.75 0 110 1.5.75.75 0 010-1.5z"/></svg>
        </a>
      </div>
    </div>
    <div className="text-center text-xs text-slate-600 mt-8 border-t border-slate-800 pt-8">© {new Date().getFullYear()} Discretta Consultoria. Todos os direitos reservados.</div>
  </footer>
);

export default Footer;
