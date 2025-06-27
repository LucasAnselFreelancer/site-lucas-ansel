import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Users, BarChart, Handshake } from 'lucide-react';

const Vision = () => {
  const visionPoints = [
    {
      icon: Eye,
      title: 'Vision stratégique',
      description: 'Une approche globale qui prend en compte tous les aspects de votre écosystème digital.'
    },
    {
      icon: Users,
      title: 'Autonomie',
      description: 'Je vous forme et vous accompagne pour que vous puissiez gérer vos outils en toute autonomie.'
    },
    {
      icon: BarChart,
      title: 'Résultats mesurables',
      description: 'Chaque action est trackée, chaque résultat est mesuré pour garantir un ROI optimal.'
    },
    {
      icon: Handshake,
      title: 'Partenariat',
      description: 'Une relation de confiance sur le long terme, basée sur la transparence et les résultats.'
    }
  ];

  return (
    <section id="vision" className="section-padding bg-gray-50">
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
              Vision de l'<span className="text-gradient">Accompagnement</span>
            </h2>

            <div className="mb-8">
              <p className="text-xl text-gray-600 font-medium mb-4 italic">
                "Accompagner ≠ livrer"
              </p>
              <p className="text-gray-600 leading-relaxed">
                Mon rôle n'est pas seulement de délivrer des prestations, mais de vous rendre autonome et durable dans votre approche marketing. Chaque mission est pensée comme un investissement dans vos compétences internes.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                Stratégie à 360°
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Une vision holistique qui intègre tous les leviers du marketing digital : acquisition, conversion, rétention et fidélisation. Chaque action s'inscrit dans une logique globale pour maximiser l'impact sur votre business.
              </p>
            </div>

            {/* Vision Points */}
            <div className="grid grid-cols-1 gap-6">
              {visionPoints.map((point, index) => {
                const IconComponent = point.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-orange-500" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2 text-gray-800">
                        {point.title}
                      </h4>
                      <p className="text-gray-600">
                        {point.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
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
                src="https://images.unsplash.com/photo-1748256622734-92241ae7b43f"
                alt="Équipe en collaboration"
                className="w-full rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent rounded-2xl"></div>
              
              {/* Stats Cards */}
              <div className="absolute top-4 right-4 bg-white rounded-lg p-4 shadow-lg">
                <div className="text-orange-500 font-bold text-xl">98%</div>
                <div className="text-gray-500 text-sm">Clients satisfaits</div>
              </div>
              
              <div className="absolute bottom-4 left-4 bg-white rounded-lg p-4 shadow-lg">
                <div className="text-orange-500 font-bold text-xl">3 ans</div>
                <div className="text-gray-500 text-sm">Suivi moyen</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Vision;