import React from 'react';
import { motion } from 'framer-motion';

const Method = () => {
  const steps = [
    {
      number: '1',
      title: 'Diagnostic & Écoute',
      description: 'Analyse approfondie de votre situation actuelle, vos objectifs et vos contraintes pour définir la stratégie optimale.'
    },
    {
      number: '2', 
      title: 'Stratégie Sur-Mesure',
      description: 'Élaboration d\'un plan d\'action personnalisé avec des objectifs clairs, un budget défini et un timeline précis.'
    },
    {
      number: '3',
      title: 'Exécution & Optimisation',
      description: 'Mise en œuvre rigoureuse avec suivi constant, ajustements en temps réel et reporting transparent.'
    }
  ];

  const competencies = [
    'GA4 & Analytics',
    'Notion & Organisation', 
    'Zapier & Automatisation',
    'Google Ads',
    'Meta Business',
    'SEO & Contenus'
  ];

  return (
    <section id="method" className="section-padding bg-gray-50">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ma <span className="text-gradient">Méthode</span>
            </h2>

            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Vision modulaire : je m'adapte à votre maturité digitale et à vos enjeux business pour créer une stratégie qui vous ressemble et qui fonctionne.
            </p>

            {/* Steps */}
            <div className="space-y-8 mb-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-lg">{step.number}</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2 text-gray-800">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Competencies */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Outils maîtrisés</h3>
              <div className="flex flex-wrap gap-2">
                {competencies.map((comp, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="expertise-bubble"
                  >
                    {comp}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1533750349088-cd871a92f312"
                alt="Stratégie marketing digital"
                className="w-full rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-transparent rounded-2xl"></div>
              
              {/* Floating Cards */}
              <div className="absolute -top-4 -right-4 bg-white rounded-lg p-4 shadow-lg">
                <div className="text-orange-500 font-bold text-2xl">+150%</div>
                <div className="text-gray-500 text-sm">ROI moyen</div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white rounded-lg p-4 shadow-lg">
                <div className="text-orange-500 font-bold text-2xl">3 mois</div>
                <div className="text-gray-500 text-sm">Premiers résultats</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Method;