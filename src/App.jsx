import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../sections/Hero';
import AuthorityProof from '../sections/AuthorityProof';
import Marketplaces from '../sections/Marketplaces';
import ConsultingServices from '../sections/ConsultingServices';
import Diferencial from '../sections/Diferencial';
import SobreConsultor from '../sections/SobreConsultor';
import Resultados from '../sections/Resultados';
import CTAFinal from '../sections/CTAFinal';
import FAQ from '../sections/FAQ';

function App() {
  return (
    <HelmetProvider>
      <SEO
        title="Consultoria em E-commerce e Marketplaces | Discretta"
        description="Consultoria especializada em e-commerce e marketplaces. Mais de R$5 milhões em vendas, 3.000+ SKUs, operação multicanal. Agende sua consultoria!"
        keywords="consultoria ecommerce, consultor ecommerce, consultor marketplace, consultoria mercado livre, consultoria shopee, especialista ecommerce, consultoria marketplace brasil"
      />
      <Header />
      <main className="bg-white text-gray-900 min-h-screen font-sans pt-20">
        <Hero />
        <AuthorityProof />
        <Marketplaces />
        <ConsultingServices />
        <Diferencial />
        <SobreConsultor />
        <Resultados />
        <CTAFinal />
        <FAQ />
      </main>
      <Footer />
    </HelmetProvider>
  );
}

export default App;
