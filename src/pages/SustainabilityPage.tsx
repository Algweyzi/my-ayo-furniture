import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Heart, Globe, Users, Award, Recycle, Shield, Star } from 'lucide-react';

export const SustainabilityPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-mint-50 via-sky-50 to-blush-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-quicksand font-bold text-4xl sm:text-5xl text-gray-800">
              Our <span className="bg-gradient-to-r from-mint-500 to-sky-500 bg-clip-text text-transparent">
                Sustainability
              </span> Story
            </h1>
            <p className="font-open text-lg text-gray-600 max-w-3xl mx-auto">
              From Ethiopian forests to your child's room - discover how we're creating beautiful furniture while protecting our planet for future generations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center space-y-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-quicksand font-bold text-3xl sm:text-4xl text-gray-800">
              From Forest to <span className="text-ochre-500">Family</span>
            </h2>
            <p className="font-open text-lg text-gray-600 max-w-2xl mx-auto">
              Follow the journey of our sustainably sourced materials as they transform into cherished family furniture.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-mint-400 via-sky-400 to-ochre-400 rounded-full hidden md:block" />

            <div className="space-y-16">
              {[
                {
                  icon: Leaf,
                  title: "Sustainable Sourcing",
                  description: "We partner with certified eucalyptus farms in Ethiopia, ensuring responsible harvesting that supports reforestation and local communities.",
                  image: "https://images.unsplash.com/photo-1444927714506-8492d94b4e3d?w=400&h=300&fit=crop",
                  side: "left",
                  color: "mint"
                },
                {
                  icon: Users,
                  title: "Local Craftsmanship",
                  description: "Our skilled artisans in Addis Ababa bring decades of traditional woodworking knowledge, combined with modern safety standards.",
                  image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9e?w=400&h=300&fit=crop",
                  side: "right",
                  color: "sky"
                },
                {
                  icon: Recycle,
                  title: "Zero Waste Workshop",
                  description: "Every wood scrap becomes something beautiful - from smaller accessories to sawdust for local gardens. Nothing goes to waste.",
                  image: "https://images.unsplash.com/photo-1628191138797-8e1c64246a10?w=400&h=300&fit=crop",
                  side: "left",
                  color: "ochre"
                },
                {
                  icon: Shield,
                  title: "Safe Materials",
                  description: "Only non-toxic, water-based paints and finishes. Every piece meets international safety standards for children's furniture.",
                  image: "https://images.unsplash.com/photo-1517701544391-5861b59a4c58?w=400&h=300&fit=crop",
                  side: "right",
                  color: "terra"
                },
                {
                  icon: Heart,
                  title: "Community Impact",
                  description: "For every piece sold, we plant a tree and donate furniture to local schools and orphanages across Ethiopia.",
                  image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=400&h=300&fit=crop",
                  side: "left",
                  color: "blush"
                }
              ].map((step, index) => (
                <motion.div
                  key={step.title}
                  className={`relative flex flex-col md:flex-row items-center ${step.side === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  initial={{ opacity: 0, x: step.side === 'left' ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  {/* Content */}
                  <div className={`w-full md:w-5/12 ${step.side === 'left' ? 'md:pr-16' : 'md:pl-16'}`}>
                    <div className="bg-white p-8 rounded-2xl shadow-lg mb-8 md:mb-0">
                      <div className={`w-16 h-16 bg-gradient-to-r from-${step.color}-400 to-${step.color}-500 rounded-2xl flex items-center justify-center mb-6`}>
                        <step.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="font-quicksand font-bold text-2xl text-gray-800 mb-4">
                        {step.title}
                      </h3>
                      <p className="font-open text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white border-4 border-gray-300 rounded-full z-10 hidden md:block" />

                  {/* Image */}
                  <div className={`w-full md:w-5/12 ${step.side === 'left' ? 'md:pl-16' : 'md:pr-16'}`}>
                    <motion.div
                      className="relative rounded-2xl overflow-hidden shadow-lg"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-80 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-gradient-to-br from-mint-50 via-sky-50 to-blush-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center space-y-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-quicksand font-bold text-3xl sm:text-4xl text-gray-800">
              Our <span className="text-terra-500">Impact</span> in Numbers
            </h2>
            <p className="font-open text-lg text-gray-600 max-w-2xl mx-auto">
              See how we're making a difference for Ethiopian families and our beautiful environment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Globe,
                number: "1,500+",
                label: "Trees Planted",
                description: "Reforestation efforts across Ethiopia",
                color: "mint"
              },
              {
                icon: Users,
                number: "500+",
                label: "Happy Families",
                description: "Children sleeping in Ayo furniture",
                color: "sky"
              },
              {
                icon: Recycle,
                number: "0%",
                label: "Waste to Landfill",
                description: "Complete zero-waste production",
                color: "ochre"
              },
              {
                icon: Heart,
                number: "50+",
                label: "School Donations",
                description: "Furniture donated to local schools",
                color: "terra"
              }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="bg-white p-8 rounded-2xl shadow-lg text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r from-${stat.color}-400 to-${stat.color}-500 rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-quicksand font-bold text-3xl text-gray-800 mb-2">
                  {stat.number}
                </h3>
                <h4 className="font-quicksand font-semibold text-lg text-gray-700 mb-2">
                  {stat.label}
                </h4>
                <p className="font-open text-sm text-gray-600">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center space-y-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-quicksand font-bold text-3xl sm:text-4xl text-gray-800">
              Our <span className="text-ochre-500">Certifications</span> & Standards
            </h2>
            <p className="font-open text-lg text-gray-600 max-w-2xl mx-auto">
              We maintain the highest standards for safety, sustainability, and quality in everything we create.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Child Safety Certified",
                description: "All our furniture meets international child safety standards including CPSC and EN 71 regulations.",
                certifications: ["CPSC Certified", "EN 71 Compliant", "Non-toxic Materials"]
              },
              {
                icon: Leaf,
                title: "Sustainable Materials",
                description: "FSC-certified wood from responsibly managed forests with full chain of custody documentation.",
                certifications: ["FSC Certified", "GREENGUARD Gold", "Carbon Neutral Shipping"]
              },
              {
                icon: Award,
                title: "Quality Assurance",
                description: "Rigorous testing and quality control ensure every piece meets our exacting standards.",
                certifications: ["ISO 9001", "Local Artisan Certified", "Lifetime Warranty"]
              }
            ].map((cert, index) => (
              <motion.div
                key={cert.title}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-ochre-400 to-terra-500 rounded-2xl flex items-center justify-center mb-6">
                  <cert.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-quicksand font-bold text-xl text-gray-800 mb-4">
                  {cert.title}
                </h3>
                <p className="font-open text-gray-600 leading-relaxed mb-6">
                  {cert.description}
                </p>
                <div className="space-y-2">
                  {cert.certifications.map((certification, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-ochre-500 fill-current" />
                      <span className="font-open text-sm text-gray-700">{certification}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gradient-to-br from-ochre-50 via-terra-50 to-sand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center space-y-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-quicksand font-bold text-3xl sm:text-4xl text-gray-800">
              Meet Our <span className="text-terra-500">Artisan</span> Team
            </h2>
            <p className="font-open text-lg text-gray-600 max-w-2xl mx-auto">
              The skilled craftspeople behind every piece of Ayo furniture, bringing generations of Ethiopian woodworking tradition to modern family homes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Ato Mesfin Tadesse",
                role: "Master Craftsman",
                experience: "25 years",
                image: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=300&h=400&fit=crop&crop=face",
                specialty: "Traditional joinery and safety standards"
              },
              {
                name: "Weizero Almaz Bekele",
                role: "Design Lead",
                experience: "15 years",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=400&fit=crop&crop=face",
                specialty: "Cultural patterns and child psychology"
              },
              {
                name: "Ato Dawit Mulugeta",
                role: "Sustainability Director",
                experience: "12 years",
                image: "https://images.unsplash.com/photo-1557862921-37829c790f19?w=300&h=400&fit=crop&crop=face",
                specialty: "Eco-friendly processes and materials"
              }
            ].map((member, index) => (
              <motion.div
                key={member.name}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-quicksand font-bold text-xl text-gray-800 mb-2">
                    {member.name}
                  </h3>
                  <p className="font-quicksand font-semibold text-ochre-600 mb-1">
                    {member.role}
                  </p>
                  <p className="font-open text-sm text-gray-600 mb-4">
                    {member.experience} experience
                  </p>
                  <p className="font-open text-gray-600 leading-relaxed">
                    {member.specialty}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
