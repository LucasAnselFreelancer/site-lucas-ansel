import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { 
  Calendar, 
  Mail, 
  Linkedin, 
  ExternalLink,
  Send,
  CheckCircle
} from 'lucide-react';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    // Simulate form submission
    console.log('Form data:', data);
    
    // In a real application, you would send this data to your backend
    // For now, we'll just simulate success
    setIsSubmitted(true);
    reset();
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  const socialLinks = [
    {
      name: 'Calendly',
      icon: Calendar,
      url: 'https://calendly.com/lucas-growthmarketer/30min',
      description: 'Réserver un appel'
    },
    {
      name: 'Malt',
      icon: ExternalLink,
      url: 'https://www.malt.fr/profile/lucasansel',
      description: 'Profil Malt'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/lucas-ansel-growth-hacker/',
      description: 'Me suivre'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:lucas.growthmarketer@gmail.com',
      description: 'M\'écrire directement'
    }
  ];

  return (
    <section id="contact" className="section-padding bg-white">
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
              Prêt à faire décoller votre projet ?
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Discutons de vos objectifs et voyons comment je peux vous aider à les atteindre.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="card">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">
                Envoyez-moi un message
              </h3>

              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-green-600 mb-2">
                    Message envoyé !
                  </h4>
                  <p className="text-gray-600">
                    Je vous répondrai dans les plus brefs délais.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      {...register('name', { required: 'Le nom est requis' })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                      placeholder="Votre nom"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      {...register('email', { 
                        required: 'L\'email est requis',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Email invalide'
                        }
                      })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                      placeholder="votre@email.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      {...register('message', { required: 'Le message est requis' })}
                      rows="6"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="Parlez-moi de votre projet..."
                    ></textarea>
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary flex items-center justify-center space-x-2"
                  >
                    <Send size={20} />
                    <span>Envoyer le message</span>
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Right - Contact Options */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Quote Button */}
            <div className="card text-center">
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Besoin d'un devis ?
              </h3>
              <p className="text-gray-600 mb-6">
                Obtenez une estimation personnalisée en quelques minutes.
              </p>
              <button 
                onClick={() => window.open('https://calendly.com/lucas-growthmarketer/30min', '_blank')}
                className="w-full bg-gray-900 text-white py-4 px-6 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200"
              >
                Demander un devis gratuit
              </button>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              {socialLinks.map((link, index) => {
                const IconComponent = link.icon;
                return (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="card flex items-center space-x-4 hover:shadow-lg group cursor-pointer"
                  >
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300">
                      <IconComponent className="w-6 h-6 text-orange-500 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800">{link.name}</h4>
                      <p className="text-gray-600 text-sm">{link.description}</p>
                    </div>
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-orange-500 transition-colors duration-300" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;