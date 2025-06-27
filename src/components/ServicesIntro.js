import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Users, 
  Search, 
  BarChart3, 
  Target, 
  Monitor, 
  Zap, 
  MessageSquare 
} from 'lucide-react';

const ServicesIntro = () => {
  const services = [
    {
      icon: Globe,
      title: 'Structuration de présence digitale',
      description: 'Mise en place d\'une stratégie digitale cohérente et optimisée.'
    },
    {
      icon: Users,
      title: 'Création d\'identité opérationnelle', 
      description: 'Développement d\'une identité de marque forte et différenciante.'
    },
    {
      icon: Search,
      title: 'Stratégies & audit SEO',
      description: 'Optimisation du référencement naturel pour une visibilité maximale.'
    },
    {
      icon: Target,
      title: 'Google Ads & Meta Ads',
      description: 'Campagnes publicitaires ciblées pour un ROI optimal.'
    },
    {
      icon: BarChart3,
      title: 'Tunnel de conversion',
      description: 'Optimisation du parcours client pour maximiser les conversions.'
    },
    {
      icon: Monitor,
      title: 'Création/optimisation de site vitrine',
      description: 'Sites web performants et orientés conversion.'
    },
    {
      icon: Zap,
      title: 'Tracking & automatisation',
      description: 'Mise en place d\'outils de suivi et d\'automatisation.'
    },
    {
      icon: MessageSquare,
      title: 'Community management léger',
      description: 'Gestion stratégique de votre présence sur les réseaux sociaux.'
    }
  ];

  return (
    <section id="services-intro" className="section-padding bg-gray-50">
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
              Améliorons ensemble votre 
              <span className="text-gradient"> stratégie marketing digital</span>
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Une approche personnalisée pour chaque entreprise, adaptée à vos objectifs et votre maturité digitale.
            </p>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card hover:border-orange-200 group"
              >
                <div className="mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300">
                    <IconComponent className="w-6 h-6 text-orange-500 group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
                <h3 className="font-semibold text-lg mb-3 text-gray-800">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>
                <button className="text-orange-500 font-medium text-sm hover:text-orange-600 transition-colors duration-200 group">
                  En savoir plus →
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button 
            onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary text-lg px-8 py-4"
          >
            Discutons ensemble
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesIntro;