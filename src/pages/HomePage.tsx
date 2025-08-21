import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Heart, Sparkles, Globe, Shield, Recycle } from 'lucide-react';

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 left-10 w-16 h-16 bg-sky-300/30 rounded-full"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-40 right-20 w-12 h-12 bg-blush-300/40 rounded-full"
            animate={{
              y: [0, 30, 0],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
          <motion.div
            className="absolute bottom-40 left-20 w-20 h-20 bg-mint-300/30 rounded-full"
            animate={{
              y: [0, -15, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
          
          {/* Floating Icons */}
          <motion.div
            className="absolute top-32 right-40"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <Star className="w-8 h-8 text-ochre-400 animate-pulse-soft" />
          </motion.div>
          <motion.div
            className="absolute bottom-32 right-32"
            animate={{ y: [0, 15, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
          >
            <Heart className="w-6 h-6 text-terra-400" />
          </motion.div>
          <motion.div
            className="absolute top-1/2 left-32"
            animate={{ y: [0, -8, 0], x: [0, 5, 0] }}
            transition={{ duration: 6, repeat: Infinity, delay: 0.5 }}
          >
            <Sparkles className="w-7 h-7 text-sky-400" />
          </motion.div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text Content */}
            <motion.div
              className="text-center lg:text-left space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-4">
                <motion.h1
                  className="font-quicksand font-bold text-4xl sm:text-5xl lg:text-6xl text-gray-800 leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Where{' '}
                  <span className="bg-gradient-to-r from-ochre-500 to-terra-500 bg-clip-text text-transparent">
                    Imagination
                  </span>
                  <br />
                  Meets{' '}
                  <span className="bg-gradient-to-r from-mint-500 to-sky-500 bg-clip-text text-transparent">
                    Craftsmanship
                  </span>
                </motion.h1>
                <motion.p
                  className="font-open text-xl text-gray-600 max-w-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Ethiopia's trusted name in safe, sustainable, and joyful children's furniture & DIY kits
                </motion.p>
              </div>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/gallery"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-ochre-500 to-terra-500 text-white font-quicksand font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
                  >
                    Explore Kids' Rooms
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/diy"
                    className="inline-flex items-center px-8 py-4 bg-white text-ochre-600 font-quicksand font-semibold rounded-full shadow-lg hover:shadow-xl border-2 border-ochre-200 hover:border-ochre-300 transition-all duration-200"
                  >
                    Build Your DIY Kit
                    <Sparkles className="ml-2 w-5 h-5" />
                  </Link>
                </motion.div>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                className="flex flex-wrap gap-6 justify-center lg:justify-start items-center text-sm text-gray-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-mint-500" />
                  <span className="font-open">Child-Safe Materials</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Recycle className="w-5 h-5 text-sky-500" />
                  <span className="font-open">Eco-Friendly</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe className="w-5 h-5 text-ochre-500" />
                  <span className="font-open">Made in Ethiopia</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Hero Image/Visual */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative">
                {/* Main Image Container */}
                <div className="bg-gradient-to-br from-mint-200 via-sky-200 to-blush-200 rounded-3xl p-4 sm:p-8 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=800&fit=crop&crop=center"
                    alt="Beautifully designed modern children's bedroom with stylish furniture"
                    className="w-full h-96 object-cover rounded-2xl shadow-lg"
                  />
                </div>
                
                {/* Floating Card Elements */}
                <motion.div
                  className="absolute -top-6 -left-6 bg-white p-4 rounded-2xl shadow-xl"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-gradient-to-r from-ochre-400 to-terra-400 rounded-full flex items-center justify-center">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-quicksand font-semibold text-gray-800">
                        500+ Happy Families
                      </p>
                      <p className="font-open text-sm text-gray-600">
                        Across East Africa
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-gradient-to-r from-mint-400 to-sky-400 rounded-full flex items-center justify-center">
                      <Recycle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-quicksand font-semibold text-gray-800">
                        100% Sustainable
                      </p>
                      <p className="font-open text-sm text-gray-600">
                        Eucalyptus Wood
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center space-y-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-quicksand font-bold text-3xl sm:text-4xl text-gray-800">
              Why Choose <span className="text-ochre-500">Ayo Furniture</span>?
            </h2>
            <p className="font-open text-lg text-gray-600 max-w-3xl mx-auto">
              We blend traditional Ethiopian craftsmanship with modern safety standards to create magical spaces for children.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Child-Safe Design",
                description: "Non-toxic materials, rounded edges, and rigorous safety testing for peace of mind.",
                color: "mint"
              },
              {
                icon: Recycle,
                title: "Eco-Friendly",
                description: "Sustainably sourced eucalyptus wood and zero-waste workshop practices.",
                color: "sky"
              },
              {
                icon: Heart,
                title: "Imaginative Designs",
                description: "Safari jeeps, treehouses, and cosmic themes that spark creativity and wonder.",
                color: "blush"
              },
              {
                icon: Sparkles,
                title: "DIY Experience",
                description: "Educational kits that families can build together, creating lasting memories.",
                color: "ochre"
              },
              {
                icon: Globe,
                title: "Ethiopian Heritage",
                description: "Proudly handcrafted in Addis Ababa with subtle cultural motifs and patterns.",
                color: "terra"
              },
              {
                icon: Star,
                title: "Custom Solutions",
                description: "Personalized furniture with your child's name, favorite colors, and themes.",
                color: "sand"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r from-${feature.color}-400 to-${feature.color}-500 rounded-2xl flex items-center justify-center mb-6`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-quicksand font-semibold text-xl text-gray-800 mb-3">
                  {feature.title}
                </h3>
                <p className="font-open text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-ochre-50 via-terra-50 to-sand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-quicksand font-bold text-3xl sm:text-4xl text-gray-800">
              Ready to Create Your Child's Dream Room?
            </h2>
            <p className="font-open text-lg text-gray-600 max-w-2xl mx-auto">
              Book a free consultation with our design team or start exploring our collection of magical furniture.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-ochre-500 to-terra-500 text-white font-quicksand font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  Book Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/products"
                  className="inline-flex items-center px-8 py-4 bg-white text-ochre-600 font-quicksand font-semibold rounded-full shadow-lg hover:shadow-xl border-2 border-ochre-200 hover:border-ochre-300 transition-all duration-200"
                >
                  View Our Collection
                  <Star className="ml-2 w-5 h-5" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
