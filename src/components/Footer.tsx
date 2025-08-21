import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Instagram, Facebook, Globe } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <Link to="/">
              <h3 className="font-quicksand font-bold text-3xl text-white tracking-wide">
                Ayo Furniture
              </h3>
            </Link>
            <p className="font-open text-gray-300 leading-relaxed">
              Ethiopia's trusted name in safe, sustainable, and joyful children's furniture & DIY kits. 
              Creating childhood memories with craftsmanship from Addis Ababa.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 bg-ochre-600 rounded-full flex items-center justify-center hover:bg-ochre-500 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 bg-terra-600 rounded-full flex items-center justify-center hover:bg-terra-500 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 bg-sky-600 rounded-full flex items-center justify-center hover:bg-sky-500 transition-colors"
              >
                <Globe className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-quicksand font-semibold text-lg text-white">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { to: '/products', label: 'Our Products' },
                { to: '/diy', label: 'DIY Kits' },
                { to: '/gallery', label: 'Room Gallery' },
                { to: '/sustainability', label: 'Our Story' },
                { to: '/blog', label: 'Blog & Ideas' },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="font-open text-gray-300 hover:text-ochre-400 transition-colors duration-200 inline-flex items-center group"
                  >
                    <span className="w-2 h-2 bg-ochre-400 rounded-full mr-3 group-hover:bg-ochre-300 transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="font-quicksand font-semibold text-lg text-white">
              Contact Us
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-ochre-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-open text-gray-300">
                    Addis Ababa, Ethiopia
                  </p>
                  <p className="font-open text-sm text-gray-400">
                    Workshop & Showroom
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-terra-400 flex-shrink-0" />
                <div className="space-y-1">
                  <a href="tel:+251994101121" className="font-open text-gray-300 hover:text-terra-400 transition-colors">
                    +251 99 410 1121
                  </a>
                  <br />
                  <a href="tel:+251941458480" className="font-open text-gray-300 hover:text-terra-400 transition-colors">
                    +251 94 145 8480
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-sky-400 flex-shrink-0" />
                <a href="mailto:info@ayofurniture.com" className="font-open text-gray-300 hover:text-sky-400 transition-colors">
                  info@ayofurniture.com
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h4 className="font-quicksand font-semibold text-lg text-white">
              Stay Connected
            </h4>
            <p className="font-open text-gray-300 text-sm">
              Get the latest updates on new products, DIY ideas, and design inspiration.
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-ochre-500 text-white placeholder-gray-400"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-ochre-500 to-terra-500 text-white py-2 rounded-lg font-quicksand font-semibold hover:shadow-lg transition-all duration-200"
              >
                Subscribe
              </motion.button>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <span>Multi-language ready (አማርኛ/English)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-400">
              <p className="font-open">
                © {currentYear} Ayo Furniture and Interior. All rights reserved.
              </p>
              <div className="flex space-x-4">
                <Link to="#" className="hover:text-ochre-400 transition-colors">
                  Privacy Policy
                </Link>
                <Link to="#" className="hover:text-ochre-400 transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span className="font-open">Proudly Made in</span>
              <span className="font-quicksand font-semibold text-ochre-400">Ethiopia</span>
              <div className="w-6 h-4 bg-gradient-to-r from-green-500 via-yellow-500 to-red-500 rounded-sm" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
