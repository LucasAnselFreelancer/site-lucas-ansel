import React from 'react';
import { motion } from 'framer-motion';

const Results = () => {
  const results = [
    {
      image: 'https://images.pexels.com/photos/5716001/pexels-photo-5716001.jpeg',
      tags: ['Google Ads', 'Analytics', 'E-commerce'],
      title: 'Boutique en ligne - Mode',
      metrics: '+285% de CA en 6 mois',
      description: 'Optimisation complète des campagnes Google Ads et refonte du tunnel de conversion pour une marque de mode émergente.'
    },
    {
      image: 'https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b',
      tags: ['SEO', 'Content', 'B2B'],
      title: 'SaaS B2B - Logiciel RH',
      metrics: '400% d\'augmentation du trafic organique', 
      description: 'Stratégie SEO complète avec création de contenu expert et optimisation technique pour un logiciel RH.'
    },
    {
      image: 'https://images.pexels.com/photos/3184419/pexels-photo-3184419.jpeg',
      tags: ['Meta Ads', 'Branding', 'Lead Gen'],
      title: 'Cabinet de conseil',
      metrics: '65% de réduction du coût par lead',
      description: 'Refonte de la stratégie d\'acquisition avec Meta Ads et optimisation du parcours de conversion.'
    },
    {
      image: 'https://images.unsplash.com/photo-1686061594225-3e92c0cd51b0',
      tags: ['Automation', 'CRM', 'Workflow'],
      title: 'Startup Tech - Fintech',
      metrics: '12h économisées par semaine',
      description: 'Automatisation complète des processus marketing et sales avec Zapier et mise en place d\'un CRM performant.'
    }
  ];

  return (
    <section id="results" className="section-padding bg-white">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Résultats <span className="text-gradient">Concrets</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Quelques exemples de transformations réussies avec mes clients. Chaque projet est unique, chaque résultat est mesurable.
            </p>
          </motion.div>
        </div>

        {/* Results Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {results.map((result, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card hover:shadow-2xl group overflow-hidden"
            >
              {/* Image */}
              <div className="relative mb-6 -mx-8 -mt-8">
                <img
                  src={result.image}
                  alt={result.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                {/* Tags */}
                <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                  {result.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="px-8 pb-8">
                <h3 className="font-bold text-xl mb-3 text-gray-800">
                  {result.title}
                </h3>

                <div className="mb-4">
                  <span className="text-2xl font-bold text-orange-500">
                    {result.metrics}
                  </span>
                </div>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {result.description}
                </p>

                <button className="text-orange-500 font-semibold hover:text-orange-600 transition-colors duration-200 group">
                  Voir l'étude de cas →
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button 
            onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary text-lg px-8 py-4"
          >
            Parlons de votre projet
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Results;