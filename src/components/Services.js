import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Settings, Lightbulb } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: TrendingUp,
      title: 'Marketing Digital',
      subtitle: 'Acquisition, tracking, optimisation',
      description: 'Stratégies complètes d\'acquisition de trafic qualifié via Google Ads, Meta Ads et SEO. Mise en place de tracking avancé pour mesurer et optimiser chaque action marketing.',
      features: [
        'Campagnes Google Ads & Meta Ads',
        'SEO technique et éditorial',
        'Analytics et tracking avancé',
        'Optimisation des conversions'
      ]
    },
    {
      icon: Settings,
      title: 'Marketing Opérationnel', 
      subtitle: 'Automatisation, structuration',
      description: 'Organisation et automatisation de vos processus marketing pour gagner en efficacité. Mise en place d\'outils et de workflows qui vous font gagner du temps.',
      features: [
        'Automatisation Zapier',
        'CRM et gestion des leads',
        'Workflows marketing',
        'Outils de productivité'
      ]
    },
    {
      icon: Lightbulb,
      title: 'Offres Sur-Mesure',
      subtitle: 'Diagnostic flash, 3 mois, branding, CRM/kit',
      description: 'Solutions personnalisées selon vos besoins spécifiques : audit express, accompagnement intensif, refonte d\'identité ou mise en place d\'écosystème complet.',
      features: [
        'Diagnostic marketing express',
        'Accompagnement 3 mois',
        'Refonte branding complète', 
        'Setup CRM et outils'
      ]
    }
  ];

  return (
    <section id="services" className="section-padding bg-white">
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
              Mes <span className="text-gradient">Services</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Trois axes stratégiques pour propulser votre entreprise vers des résultats mesurables et durables.
            </p>
          </motion.div>
        </div>

        {/* Services Cards */}
        <div className="space-y-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="card lg:flex lg:items-center lg:space-x-8 hover:shadow-xl"
              >
                <div className="lg:flex-shrink-0 mb-6 lg:mb-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                </div>

                <div className="lg:flex-1">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-orange-500 font-medium text-lg">
                      {service.subtitle}
                    </p>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button className="text-orange-500 font-semibold hover:text-orange-600 transition-colors duration-200">
                    En savoir plus →
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;