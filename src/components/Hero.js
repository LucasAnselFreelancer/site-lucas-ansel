import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:pr-8"
          >
            {/* Title */}
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-gray-900">Lucas Ansel</span>
              <br />
              <span className="text-gradient">Freelance Marketing</span>
              <br />
              <span className="text-gray-700">Digital et Opérationnel</span>
            </h1>

            {/* TrustScore */}
            <div className="flex items-center mb-6">
              <span className="text-gray-600 mr-3">TrustScore :</span>
              <div className="flex items-center">
                <span className="font-semibold text-lg mr-2">4,9/5</span>
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={16} 
                      className="fill-orange-400 text-orange-400" 
                    />
                  ))}
                </div>
                <span className="text-gray-500 ml-2">(27 avis)</span>
              </div>
            </div>

            {/* Slogan */}
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Faites passer votre projet au niveau supérieur grâce au marketing digital.
            </p>

            {/* Key Points */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                'Partenaire de croissance',
                'Approche stratégique', 
                'Activation rigoureuse',
                'Optimisation continue'
              ].map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 * index }}
                  className="flex items-center"
                >
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  <span className="text-gray-700 font-medium">{point}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('#contact')}
                className="btn-primary"
              >
                Discutons de votre projet
              </button>
              <button
                onClick={() => scrollToSection('#results')}
                className="btn-secondary"
              >
                Voir les résultats
              </button>
            </div>
          </motion.div>

          {/* Right Content - Photo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl transform rotate-6 opacity-20"></div>
              <img
                src="https://i.ibb.co/ZzdJ4L6m/Lucas-Ansel-photo.png"
                alt="Lucas Ansel"
                className="relative w-80 h-80 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-white rounded-lg p-4 shadow-lg">
                <div className="text-orange-500 font-bold text-lg">4.9/5</div>
                <div className="text-gray-500 text-sm">Expert certifié</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;