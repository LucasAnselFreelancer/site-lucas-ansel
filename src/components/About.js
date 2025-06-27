import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const expertiseBubbles = [
    'Google Ads',
    'Meta Ads', 
    'GA4 & Tracking avancé',
    'Automatisation (Zapier)',
    'Notion & CRM',
    'Figma & Canva',
    'Typeform & A/B Testing'
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="relative">
              <img
                src="https://i.ibb.co/ZzdJ4L6m/Lucas-Ansel-photo.png"
                alt="Lucas Ansel - À propos"
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center">
                <div className="w-12 h-12 bg-orange-500 rounded-full"></div>
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              À propos de <span className="text-gradient">Lucas</span>
            </h2>

            <div className="mb-6">
              <p className="text-xl text-gray-600 font-medium mb-4 italic">
                "Je ne suis pas un freelance à la mission. Je m'implique. Je structure. Je rends les choses durables."
              </p>
            </div>

            <div className="mb-8">
              <p className="text-gray-600 leading-relaxed">
                Spécialisé en stratégie digitale et opérationnelle, j'accompagne les marques dans leur transformation et leur croissance. Mon approche se distingue par sa capacité d'adaptation selon la maturité digitale de votre entreprise, que vous soyez une startup en quête de visibilité ou une PME souhaitant optimiser ses performances.
              </p>
            </div>

            {/* Expertise Bubbles */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Expertises clés</h3>
              <div className="flex flex-wrap gap-2">
                {expertiseBubbles.map((skill, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="expertise-bubble"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => document.querySelector('#services').scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary"
              >
                Découvrir mes services
              </button>
              <button 
                onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary"
              >
                Prendre contact
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;