import React from 'react';
import { motion } from 'framer-motion';

const diferenciais = [
  { icon: '🔥', title: 'Experiência real', desc: 'Não ensinamos teoria. Aplicamos o que funciona na operação Discretta, com +R$5M em vendas.' },
  { icon: '🌎', title: 'Produtos exclusivos', desc: 'Importamos produtos sem concorrência no Brasil, com EAN próprio e marca registrada.' },
  { icon: '🏪', title: 'Multicanal de verdade', desc: 'Operação simultânea em 9+ plataformas, com estratégia específica para cada canal.' },
  { icon: '👗', title: 'Marca Própria', desc: 'Fabricação terceirizada de lingerie, moda praia e vestuário. Do design à venda.' },
  { icon: '🎤', title: 'Creators & Artistas', desc: 'Experiência vendendo para influenciadores e artistas de grande alcance.' },
  { icon: '📊', title: 'Dados e performance', desc: 'Gestão baseada em métricas: ads, catálogo, conversão e margem.' },
];

const Diferencial = () => (
  <section className="py-20 px-6 bg-white border-b border-gray-100" aria-label="Diferencial">
    <div className="max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center gap-12">
        {/* Left */}
        <div className="flex-1">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest">Diferencial</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2 mb-4">Por que essa consultoria é diferente?</h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Aqui você não paga por slides bonitos. Você investe em estratégias testadas e validadas em uma operação real de e-commerce multimilionária.
          </p>
          <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="mt-8 inline-block bg-blue-600 text-white px-7 py-3.5 rounded-xl font-semibold shadow hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-400">
            Quero saber mais
          </a>
        </div>
        {/* Right Grid */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {diferenciais.map((d, i) => (
            <motion.div
              key={i}
              className="flex items-start gap-4"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
            >
              <div className="text-2xl mt-1">{d.icon}</div>
              <div>
                <div className="font-bold text-gray-900">{d.title}</div>
                <div className="text-gray-500 text-sm mt-0.5 leading-relaxed">{d.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Diferencial;
