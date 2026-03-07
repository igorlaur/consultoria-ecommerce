import React from 'react';
import { motion } from 'framer-motion';

const marketplaces = [
  { name: 'Mercado Livre', emoji: '🟡', desc: 'Loja Oficial FULL e FLEX', color: 'bg-yellow-50 border-yellow-200' },
  { name: 'Shopee', emoji: '🟠', desc: 'Marketplace em crescimento', color: 'bg-orange-50 border-orange-200' },
  { name: 'Magalu', emoji: '🔵', desc: 'Marketplace nacional', color: 'bg-orange-50 border-orange-200' },
  { name: 'Shein', emoji: '🌸', desc: 'Moda e vestuário', color: 'bg-pink-50 border-pink-200' },
  { name: 'iFood', emoji: '🍔', desc: 'Delivery de alimentos', color: 'bg-red-50 border-red-200' },
  { name: 'Rappi', emoji: '🛵', desc: 'Delivery multicanal', color: 'bg-orange-50 border-orange-200' },
  { name: 'Kwai', emoji: '🎬', desc: 'Plataforma de vídeos', color: 'bg-purple-50 border-purple-200' },
  { name: 'Site Próprio', emoji: '🌐', desc: 'E-commerce proprietário', color: 'bg-green-50 border-green-200' },
];

const Marketplaces = () => (
  <section id="marketplaces" className="py-20 px-6 bg-slate-950 text-white" aria-label="Marketplaces">
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-14">
        <span className="text-orange-400 font-semibold text-sm uppercase tracking-widest">Plataformas</span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2">Onde já atuamos</h2>
        <p className="text-slate-400 mt-3 max-w-xl mx-auto">Operação ativa nos principais marketplaces do Brasil com estratégias específicas para cada canal.</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {marketplaces.map((mkt, i) => (
          <motion.div
            key={mkt.name}
            className="bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col items-center text-center hover:bg-white/10 transition-colors cursor-default"
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.4 }}
          >
            <div className="text-4xl mb-3">{mkt.emoji}</div>
            <div className="font-bold text-white text-base">{mkt.name}</div>
            <div className="text-slate-400 text-xs mt-1">{mkt.desc}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Marketplaces;
