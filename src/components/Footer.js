import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Calendar, 
  Linkedin, 
  ExternalLink,
  ArrowRight
} from 'lucide-react';

const Footer = () => {
  const services = [
    'Marketing Digital',
    'Marketing Opérationnel', 
    'Offres Sur-Mesure',
    'Études de cas'
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/lucas-ansel-growth-hacker/'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:lucas.growthmarketer@gmail.com'
    },
    {
      name: 'Calendly',
      icon: Calendar,
      url: 'https://calendly.com/lucas-growthmarketer/30min'
    },
    {
      name: 'Malt',
      icon: ExternalLink,
      url: 'https://www.malt.fr/profile/lucasansel'
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container">
        {/* Main Footer */}
        <div className="section-padding">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="mb-6">
                <div className="font-bold text-2xl mb-4">
                  <span className="text-white">LA</span>
                  <span className="text-orange-500 ml-2">Lucas Ansel</span>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  Freelance spécialisé en marketing digital et opérationnel. 
                  Je vous accompagne dans la structuration et l'optimisation de 
                  votre stratégie digitale pour des résultats mesurables et durables.
                </p>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => {
                  const IconComponent = link.icon;
                  return (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-colors duration-300 group"
                    >
                      <IconComponent className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                    </a>
                  );
                })}
              </div>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-lg mb-6">Services</h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <button className="text-gray-400 hover:text-orange-500 transition-colors duration-200 text-left">
                      {service}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-lg mb-6">Contact</h3>
              <div className="space-y-4 mb-6">
                <div>
                  <p className="text-gray-400 mb-2">Email</p>
                  <a 
                    href="mailto:lucas.growthmarketer@gmail.com"
                    className="text-white hover:text-orange-500 transition-colors duration-200"
                  >
                    lucas.growthmarketer@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-gray-400 mb-2">Planifier un appel</p>
                  <a 
                    href="https://calendly.com/lucas-growthmarketer/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-orange-500 transition-colors duration-200 flex items-center"
                  >
                    Calendly
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>

              <button 
                onClick={() => window.open('https://calendly.com/lucas-growthmarketer/30min', '_blank')}
                className="btn-primary flex items-center space-x-2"
              >
                <span>Commencer un projet</span>
                <ArrowRight size={18} />
              </button>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Lucas Ansel. Tous droits réservés.
            </p>
            <div className="flex space-x-6 text-sm">
              <button className="text-gray-400 hover:text-white transition-colors duration-200">
                Mentions légales
              </button>
              <button className="text-gray-400 hover:text-white transition-colors duration-200">
                Politique de confidentialité
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;