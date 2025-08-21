import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, Heart, ArrowRight, ExternalLink } from 'lucide-react';

interface RoomShowcase {
  id: number;
  title: string;
  location: string;
  theme: string;
  ageGroup: string;
  style: string;
  size: string;
  image: string;
  description: string;
  products: string[];
  customerStory: string;
  customerImage: string;
  beforeImage?: string;
}

const rooms: RoomShowcase[] = [
  {
    id: 1,
    title: "Safari Adventure Nursery",
    location: "Addis Ababa",
    theme: "Safari",
    ageGroup: "0-3",
    style: "DIY + Custom",
    size: "Small",
    image: "https://images.unsplash.com/photo-1596496181848-3091d4376b4a?w=600&h=400&fit=crop",
    description: "A wild adventure awaits in this safari-themed nursery featuring custom animal furniture and Ethiopian-inspired patterns.",
    products: ["Safari Jeep Bed", "Jungle Bookshelf", "Animal Storage Boxes"],
    customerStory: "Our 3-year-old Meron absolutely loves her safari room! The jeep bed has made bedtime an adventure, and we love how the Ethiopian patterns celebrate our heritage.",
    customerImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=60&h=60&fit=crop&crop=face",
    beforeImage: "https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?w=600&h=400&fit=crop"
  },
  {
    id: 2,
    title: "Cosmic Explorer's Den",
    location: "Bahir Dar",
    theme: "Space",
    ageGroup: "8+",
    style: "Full Build",
    size: "Medium",
    image: "https://images.unsplash.com/photo-1612199101106-79302553c373?w=600&h=400&fit=crop",
    description: "Blast off to the stars in this space-themed room complete with cosmic storage solutions and galaxy lighting.",
    products: ["Rocket Ship Bed", "Cosmic Storage Unit", "Galaxy Night Light"],
    customerStory: "Since we completed this room together as a family DIY project, our son Dawit has been so much more interested in studying and reading about space!",
    customerImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face"
  },
  {
    id: 3,
    title: "Princess Castle Chamber",
    location: "Mekelle",
    theme: "Princess",
    ageGroup: "4-7",
    style: "Custom",
    size: "Large",
    image: "https://images.unsplash.com/photo-1579553826472-a98f198b1695?w=600&h=400&fit=crop",
    description: "Every little princess deserves a castle! This magical room features turret wardrobes and royal Ethiopian touches.",
    products: ["Princess Castle Wardrobe", "Royal Study Desk", "Jewel Storage Tower"],
    customerStory: "Hana feels like a real princess in her room. The quality is amazing and we love how it incorporates traditional Ethiopian design elements.",
    customerImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=60&h=60&fit=crop&crop=face"
  },
  {
    id: 4,
    title: "Addis Highland Adventure",
    location: "Addis Ababa",
    theme: "Ethiopian Heritage",
    ageGroup: "8+",
    style: "Full Build",
    size: "Large",
    image: "https://images.unsplash.com/photo-1613563961883-34a4b274534f?w=600&h=400&fit=crop",
    description: "Celebrating Ethiopian culture with traditional patterns, natural wood finishes, and highland-inspired design elements.",
    products: ["Addis Adventure Bunk Bed", "Highland Study Nook", "Cultural Pattern Storage"],
    customerStory: "This room has become a source of pride for our twins. They love showing friends the traditional patterns and learning about their heritage.",
    customerImage: "https://images.unsplash.com/photo-1557862921-37829c790f19?w=60&h=60&fit=crop&crop=face"
  },
  {
    id: 5,
    title: "Minimalist Learning Space",
    location: "Dire Dawa",
    theme: "Minimalist",
    ageGroup: "8+",
    style: "DIY",
    size: "Small",
    image: "https://images.unsplash.com/photo-1572095768581-235a1a5e442?w=600&h=400&fit=crop",
    description: "Clean, functional, and beautiful - this minimalist room focuses on learning and creativity with smart storage solutions.",
    products: ["Treehouse Study Desk", "Floating Shelves", "Minimalist Storage Cubes"],
    customerStory: "We built this room together over several weekends. The DIY process was so rewarding, and the result is exactly what we envisioned.",
    customerImage: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=60&h=60&fit=crop&crop=face"
  },
  {
    id: 6,
    title: "Twin Jungle Sanctuary",
    location: "Hawassa",
    theme: "Jungle",
    ageGroup: "4-7",
    style: "Custom",
    size: "Medium",
    image: "https://images.unsplash.com/photo-1590491015302-366529813b69?w=600&h=400&fit=crop",
    description: "Double the fun in this twin jungle room featuring matching treehouse beds and plenty of adventure-themed storage.",
    products: ["Twin Treehouse Beds", "Jungle Bookshelf", "Adventure Storage Chests"],
    customerStory: "Our twins love their jungle room! They pretend they're explorers every day, and cleanup is actually fun now with all the themed storage.",
    customerImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=60&h=60&fit=crop&crop=face"
  }
];

export const GalleryPage: React.FC = () => {
  const [selectedTheme, setSelectedTheme] = useState<string>('All');
  const [selectedSize, setSelectedSize] = useState<string>('All');
  const [selectedAge, setSelectedAge] = useState<string>('All');
  const [selectedRoom, setSelectedRoom] = useState<RoomShowcase | null>(null);

  const themes = ['All', 'Safari', 'Space', 'Princess', 'Ethiopian Heritage', 'Minimalist', 'Jungle'];
  const sizes = ['All', 'Small', 'Medium', 'Large'];
  const ageGroups = ['All', '0-3', '4-7', '8+'];

  const filteredRooms = rooms.filter(room => {
    return (
      (selectedTheme === 'All' || room.theme === selectedTheme) &&
      (selectedSize === 'All' || room.size === selectedSize) &&
      (selectedAge === 'All' || room.ageGroup === selectedAge)
    );
  });

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sky-50 via-mint-50 to-blush-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-quicksand font-bold text-4xl sm:text-5xl text-gray-800">
              Room <span className="bg-gradient-to-r from-ochre-500 to-terra-500 bg-clip-text text-transparent">
                Inspiration
              </span> Gallery
            </h1>
            <p className="font-open text-lg text-gray-600 max-w-3xl mx-auto">
              Explore real homes across Ethiopia where Ayo furniture has transformed children's spaces into magical wonderlands of imagination and learning.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white border-b border-gray-200 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block font-quicksand font-medium text-gray-700 mb-2">
                Theme
              </label>
              <select
                value={selectedTheme}
                onChange={(e) => setSelectedTheme(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ochre-500 font-open"
              >
                {themes.map(theme => (
                  <option key={theme} value={theme}>{theme}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block font-quicksand font-medium text-gray-700 mb-2">
                Room Size
              </label>
              <select
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ochre-500 font-open"
              >
                {sizes.map(size => (
                  <option key={size} value={size}>{size}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block font-quicksand font-medium text-gray-700 mb-2">
                Age Group
              </label>
              <select
                value={selectedAge}
                onChange={(e) => setSelectedAge(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ochre-500 font-open"
              >
                {ageGroups.map(age => (
                  <option key={age} value={age}>{age === 'All' ? 'All Ages' : `${age} years`}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredRooms.map((room, index) => (
                <motion.div
                  key={room.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  onClick={() => setSelectedRoom(room)}
                  layout
                >
                  {/* Room Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={room.image}
                      alt={room.title}
                      className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute top-4 right-4">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg"
                      >
                        <Heart className="w-5 h-5 text-terra-500" />
                      </motion.button>
                    </div>
                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                      <span className="font-quicksand font-semibold text-sm text-gray-700">
                        {room.location}
                      </span>
                    </div>
                  </div>

                  {/* Room Info */}
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="font-quicksand font-bold text-xl text-gray-800 mb-2">
                        {room.title}
                      </h3>
                      <p className="font-open text-gray-600 text-sm leading-relaxed line-clamp-2">
                        {room.description}
                      </p>
                    </div>

                    {/* Room Details */}
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="font-open text-gray-500">Theme:</span>
                        <span className="font-quicksand font-medium text-gray-700">{room.theme}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-open text-gray-500">Age Group:</span>
                        <span className="font-quicksand font-medium text-gray-700">{room.ageGroup} years</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-open text-gray-500">Style:</span>
                        <span className="font-quicksand font-medium text-gray-700">{room.style}</span>
                      </div>
                    </div>

                    {/* Products Used */}
                    <div>
                      <h4 className="font-quicksand font-semibold text-gray-700 mb-2">Products Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {room.products.slice(0, 2).map((product, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-lg font-open"
                          >
                            {product}
                          </span>
                        ))}
                        {room.products.length > 2 && (
                          <span className="px-2 py-1 bg-ochre-100 text-ochre-600 text-xs rounded-lg font-open">
                            +{room.products.length - 2} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* View Details Button */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full mt-4 bg-gradient-to-r from-ochre-500 to-terra-500 text-white py-3 rounded-lg font-quicksand font-semibold flex items-center justify-center space-x-2 hover:shadow-lg transition-all duration-200"
                    >
                      <span>View Full Tour</span>
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filteredRooms.length === 0 && (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Filter className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="font-quicksand font-semibold text-xl text-gray-700 mb-2">
                No rooms match your filters
              </h3>
              <p className="font-open text-gray-500">
                Try adjusting your search criteria to discover more inspiring rooms.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Featured Success Story */}
      <section className="py-16 bg-gradient-to-br from-mint-50 via-sky-50 to-blush-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-white rounded-3xl shadow-xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 lg:p-12">
                <h3 className="font-quicksand font-bold text-2xl sm:text-3xl text-gray-800 mb-6">
                  Customer Success Story
                </h3>
                <blockquote className="font-open text-lg text-gray-600 leading-relaxed mb-6 italic">
                  "Working with Ayo Furniture was incredible! They helped us design a room that celebrates our Ethiopian heritage while being completely modern and safe for our children. The DIY elements made it a family bonding experience we'll never forget."
                </blockquote>
                <div className="flex items-center space-x-4">
                  <img
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=60&h=60&fit=crop&crop=face"
                    alt="Customer"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-quicksand font-semibold text-gray-800">
                      Almaz & Tekle Family
                    </p>
                    <p className="font-open text-sm text-gray-600">
                      Addis Ababa
                    </p>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 inline-flex items-center px-6 py-3 bg-gradient-to-r from-ochre-500 to-terra-500 text-white font-quicksand font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  Share Your Story
                  <ExternalLink className="ml-2 w-4 h-4" />
                </motion.button>
              </div>
              <div className="lg:p-8 flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=500&fit=crop"
                  alt="Customer room"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-ochre-50 via-terra-50 to-sand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-quicksand font-bold text-3xl sm:text-4xl text-gray-800">
              Ready to Create Your Own Magical Room?
            </h2>
            <p className="font-open text-lg text-gray-600 max-w-2xl mx-auto">
              Let our design team help you create a personalized space that reflects your child's personality and your family's heritage.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-ochre-500 to-terra-500 text-white font-quicksand font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Start Your Design Journey
              <ArrowRight className="ml-2 w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
