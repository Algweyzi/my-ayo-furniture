import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Star, Heart } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    serviceType: 'consultation'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
              Let's Create <span className="bg-gradient-to-r from-ochre-500 to-terra-500 bg-clip-text text-transparent">
                Magic
              </span> Together
            </h1>
            <p className="font-open text-lg text-gray-600 max-w-3xl mx-auto">
              Ready to transform your child's room into a wonderland? Our team in Addis Ababa is here to help bring your vision to life with safe, sustainable, and imaginative furniture.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Phone,
                title: "Call Us",
                primary: "+251 99 410 1121",
                secondary: "+251 94 145 8480",
                description: "Mon-Sat, 9:00 AM - 6:00 PM",
                color: "mint"
              },
              {
                icon: Mail,
                title: "Email Us",
                primary: "info@ayofurniture.com",
                secondary: "support@ayofurniture.com",
                description: "We respond within 24 hours",
                color: "sky"
              },
              {
                icon: MapPin,
                title: "Visit Our Workshop",
                primary: "Addis Ababa, Ethiopia",
                secondary: "Workshop & Showroom",
                description: "By appointment only",
                color: "ochre"
              }
            ].map((contact, index) => (
              <motion.div
                key={contact.title}
                className="bg-white p-8 rounded-2xl shadow-lg text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r from-${contact.color}-400 to-${contact.color}-500 rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <contact.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-quicksand font-bold text-xl text-gray-800 mb-4">
                  {contact.title}
                </h3>
                <div className="space-y-2">
                  <p className="font-quicksand font-semibold text-lg text-gray-800">
                    {contact.primary}
                  </p>
                  <p className="font-open text-gray-600">
                    {contact.secondary}
                  </p>
                  <p className="font-open text-sm text-gray-500">
                    {contact.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h2 className="font-quicksand font-bold text-2xl text-gray-800 mb-6">
                  Book Your Free Consultation
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Service Type */}
                  <div>
                    <label className="block font-quicksand font-medium text-gray-700 mb-2">
                      What can we help you with?
                    </label>
                    <select
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ochre-500 font-open"
                    >
                      <option value="consultation">Room Design Consultation</option>
                      <option value="custom">Custom Furniture Quote</option>
                      <option value="diy">DIY Workshop Visit</option>
                      <option value="support">Support & Questions</option>
                    </select>
                  </div>

                  {/* Name and Email Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-quicksand font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ochre-500 font-open"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block font-quicksand font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ochre-500 font-open"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  {/* Phone and Subject Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-quicksand font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ochre-500 font-open"
                        placeholder="+251 XX XXX XXXX"
                      />
                    </div>
                    <div>
                      <label className="block font-quicksand font-medium text-gray-700 mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ochre-500 font-open"
                        placeholder="Brief subject"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block font-quicksand font-medium text-gray-700 mb-2">
                      Tell us about your project *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ochre-500 font-open resize-none"
                      placeholder="Describe your child's room, their interests, and what you'd like to create..."
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-ochre-500 to-terra-500 text-white py-4 rounded-lg font-quicksand font-semibold flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transition-all duration-200"
                    disabled={isSubmitted}
                  >
                    {isSubmitted ? (
                      <>
                        <CheckCircle className="w-5 h-5" />
                        <span>Message Sent!</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>

                  <p className="font-open text-sm text-gray-500 text-center">
                    We'll respond within 24 hours with next steps for your consultation.
                  </p>
                </form>
              </div>
            </motion.div>

            {/* Map and Additional Info */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Map */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="h-80 bg-gradient-to-br from-mint-200 via-sky-200 to-blush-200 relative">
                  {/* Placeholder for actual Google Maps embed */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-16 h-16 text-ochre-500 mx-auto mb-4" />
                      <h3 className="font-quicksand font-bold text-xl text-gray-800 mb-2">
                        Ayo Furniture Workshop
                      </h3>
                      <p className="font-open text-gray-600">
                        Addis Ababa, Ethiopia
                      </p>
                      <p className="font-open text-sm text-gray-500 mt-2">
                        Interactive map coming soon
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="font-quicksand font-semibold text-lg text-gray-800 mb-3">
                    Visit Our Workshop
                  </h4>
                  <p className="font-open text-gray-600 leading-relaxed mb-4">
                    Experience our craftsmanship firsthand! See how traditional Ethiopian woodworking meets modern safety standards in our Addis Ababa workshop.
                  </p>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span className="font-open">By appointment only - Book through consultation form</span>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h4 className="font-quicksand font-semibold text-lg text-gray-800 mb-4">
                  Business Hours
                </h4>
                <div className="space-y-2">
                  {[
                    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
                    { day: 'Saturday', hours: '10:00 AM - 4:00 PM' },
                    { day: 'Sunday', hours: 'Closed' },
                  ].map((schedule, index) => (
                    <div key={index} className="flex justify-between font-open text-sm">
                      <span className="text-gray-600">{schedule.day}</span>
                      <span className="text-gray-800 font-medium">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="bg-gradient-to-br from-ochre-50 to-terra-50 p-6 rounded-2xl">
                <h4 className="font-quicksand font-semibold text-lg text-gray-800 mb-4">
                  Why Families Trust Ayo
                </h4>
                <div className="space-y-3">
                  {[
                    { icon: Star, text: '500+ Happy Families Served' },
                    { icon: CheckCircle, text: '100% Child-Safe Materials' },
                    { icon: Heart, text: 'Made with Love in Ethiopia' },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <item.icon className="w-5 h-5 text-ochre-500" />
                      <span className="font-open text-sm text-gray-700">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-br from-mint-50 via-sky-50 to-blush-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center space-y-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-quicksand font-bold text-3xl sm:text-4xl text-gray-800">
              Frequently Asked <span className="text-ochre-500">Questions</span>
            </h2>
            <p className="font-open text-lg text-gray-600 max-w-2xl mx-auto">
              Quick answers to common questions about our furniture, process, and services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "How long does custom furniture take?",
                answer: "Most custom pieces take 3-6 weeks from design approval to delivery, depending on complexity and current orders."
              },
              {
                question: "Do you ship outside of Addis Ababa?",
                answer: "Yes! We ship throughout Ethiopia and select East African countries. Shipping costs vary by location and size."
              },
              {
                question: "Are your materials really child-safe?",
                answer: "Absolutely. We use only non-toxic, water-based paints and finishes. All furniture meets international child safety standards."
              },
              {
                question: "Can I customize existing designs?",
                answer: "Yes! Most of our designs can be customized in size, color, and features to match your child's room perfectly."
              },
              {
                question: "What's included in a DIY kit?",
                answer: "All pre-cut pieces, hardware, tools needed, step-by-step instructions with photos, and access to video tutorials."
              },
              {
                question: "Do you offer assembly services?",
                answer: "Yes, we offer professional assembly in Addis Ababa and surrounding areas. DIY support is always included too!"
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="font-quicksand font-semibold text-lg text-gray-800 mb-3">
                  {faq.question}
                </h4>
                <p className="font-open text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
