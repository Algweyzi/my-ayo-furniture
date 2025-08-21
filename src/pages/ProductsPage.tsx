import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, Star, Heart, ArrowRight, Sparkles } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  category: string;
  ageGroup: string;
  price: string;
  image: string;
  description: string;
  features: string[];
  material: string;
  assemblyTime: string;
  diyLevel: 'Easy' | 'Medium' | 'Advanced';
}

const products: Product[] = [
  {
    id: 1,
    name: "Safari Jeep Bed",
    category: "Beds",
    ageGroup: "4-7",
    price: "15,000 ETB",
    image: "https://images.unsplash.com/photo-1608225332197-39499114f492?w=400&h=300&fit=crop",
    description: "Adventure awaits with this jeep-shaped bed that transforms bedtime into an expedition.",
    features: ["Built-in storage", "LED headlights", "Steering wheel", "Safety rails"],
    material: "Sustainably sourced eucalyptus wood",
    assemblyTime: "3-4 hours",
    diyLevel: "Medium"
  },
  {
    id: 2,
    name: "Treehouse Study Desk",
    category: "Desks",
    ageGroup: "8+",
    price: "8,500 ETB",
    image: "https://images.unsplash.com/photo-1594744885544-8a485550580a?w=400&h=300&fit=crop",
    description: "A magical workspace that brings the outdoors inside with natural wood textures.",
    features: ["Multiple storage compartments", "Adjustable height", "Cable management", "Tree branch details"],
    material: "Eucalyptus wood with natural finish",
    assemblyTime: "2-3 hours",
    diyLevel: "Easy"
  },
  {
    id: 3,
    name: "Cosmic Storage Unit",
    category: "Storage",
    ageGroup: "4-7",
    price: "6,200 ETB",
    image: "https://images.unsplash.com/photo-1601121141343-73c15555b33f?w=400&h=300&fit=crop",
    description: "Organize toys and books in this space-themed storage system with rocket details.",
    features: ["Modular design", "Star-shaped handles", "Multiple compartments", "Glow-in-the-dark accents"],
    material: "Painted eucalyptus wood",
    assemblyTime: "1-2 hours",
    diyLevel: "Easy"
  },
  {
    id: 4,
    name: "Princess Castle Wardrobe",
    category: "Storage",
    ageGroup: "0-3",
    price: "12,800 ETB",
    image: "https://images.unsplash.com/photo-1599691888283-5247a86b777a?w=400&h=300&fit=crop",
    description: "A fairy tale wardrobe with castle turrets and magical details for little princesses.",
    features: ["Castle turret design", "Mirror door", "Dress-up hooks", "Jewelry drawer"],
    material: "Non-toxic painted eucalyptus",
    assemblyTime: "4-5 hours",
    diyLevel: "Advanced"
  },
  {
    id: 5,
    name: "Addis Adventure Bunk Bed",
    category: "Beds",
    ageGroup: "8+",
    price: "22,000 ETB",
    image: "https://images.unsplash.com/photo-1574220299934-e4f5a6589eba?w=400&h=300&fit=crop",
    description: "Inspired by Ethiopian highlands, this bunk bed features traditional patterns and modern safety.",
    features: ["Traditional motifs", "Built-in ladder", "Reading nooks", "Under-bed play area"],
    material: "Eucalyptus wood with cultural patterns",
    assemblyTime: "5-6 hours",
    diyLevel: "Advanced"
  },
  {
    id: 6,
    name: "Jungle Bookshelf",
    category: "Storage",
    ageGroup: "4-7",
    price: "7,800 ETB",
    image: "https://images.unsplash.com/photo-1592125283189-354c243b7a5e?w=400&h=300&fit=crop",
    description: "Bring the African savanna home with this tree-shaped bookshelf featuring animal friends.",
    features: ["Tree branch shelves", "Animal figurine holders", "Leaf details", "Rounded safety edges"],
    material: "Natural eucalyptus with eco-paint",
    assemblyTime: "2-3 hours",
    diyLevel: "Medium"
  }
];

export const ProductsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedAgeGroup, setSelectedAgeGroup] = useState<string>('All');
  const [selectedDIYLevel, setSelectedDIYLevel] = useState<string>('All');
  const [showFilters, setShowFilters] = useState(false);

  const categories = ['All', 'Beds', 'Desks', 'Storage'];
  const ageGroups = ['All', '0-3', '4-7', '8+'];
  const diyLevels = ['All', 'Easy', 'Medium', 'Advanced'];

  const filteredProducts = products.filter(product => {
    return (
      (selectedCategory === 'All' || product.category === selectedCategory) &&
      (selectedAgeGroup === 'All' || product.ageGroup === selectedAgeGroup) &&
      (selectedDIYLevel === 'All' || product.diyLevel === selectedDIYLevel)
    );
  });

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
              Our <span className="bg-gradient-to-r from-ochre-500 to-terra-500 bg-clip-text text-transparent">
                Magical
              </span> Collection
            </h1>
            <p className="font-open text-lg text-gray-600 max-w-3xl mx-auto">
              Discover furniture that transforms children's rooms into wonderlands of imagination, crafted with love in Addis Ababa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white border-b border-gray-200 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-quicksand font-semibold text-xl text-gray-800">
                Filter Products
              </h2>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="md:hidden flex items-center space-x-2 text-ochre-600 hover:text-ochre-700"
              >
                <Filter className="w-5 h-5" />
                <span className="font-open">Filters</span>
              </button>
            </div>

            <AnimatePresence>
              <motion.div
                className={`grid grid-cols-1 md:grid-cols-3 gap-6 ${showFilters ? 'block' : 'hidden md:grid'}`}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
              >
                {/* Category Filter */}
                <div>
                  <label className="block font-quicksand font-medium text-gray-700 mb-2">
                    Category
                  </label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ochre-500 font-open"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>

                {/* Age Group Filter */}
                <div>
                  <label className="block font-quicksand font-medium text-gray-700 mb-2">
                    Age Group
                  </label>
                  <select
                    value={selectedAgeGroup}
                    onChange={(e) => setSelectedAgeGroup(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ochre-500 font-open"
                  >
                    {ageGroups.map(age => (
                      <option key={age} value={age}>{age === 'All' ? 'All Ages' : `${age} years`}</option>
                    ))}
                  </select>
                </div>

                {/* DIY Level Filter */}
                <div>
                  <label className="block font-quicksand font-medium text-gray-700 mb-2">
                    DIY Level
                  </label>
                  <select
                    value={selectedDIYLevel}
                    onChange={(e) => setSelectedDIYLevel(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ochre-500 font-open"
                  >
                    {diyLevels.map(level => (
                      <option key={level} value={level}>{level}</option>
                    ))}
                  </select>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  layout
                >
                  {/* Product Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
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
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-quicksand font-semibold ${
                        product.diyLevel === 'Easy' ? 'bg-mint-100 text-mint-700' :
                        product.diyLevel === 'Medium' ? 'bg-sand-100 text-sand-700' :
                        'bg-terra-100 text-terra-700'
                      }`}>
                        {product.diyLevel} DIY
                      </span>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="font-quicksand font-bold text-xl text-gray-800 mb-2">
                        {product.name}
                      </h3>
                      <p className="font-open text-gray-600 text-sm leading-relaxed">
                        {product.description}
                      </p>
                    </div>

                    {/* Product Details */}
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="font-open text-gray-500">Age Group:</span>
                        <span className="font-quicksand font-medium text-gray-700">{product.ageGroup} years</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-open text-gray-500">Assembly:</span>
                        <span className="font-quicksand font-medium text-gray-700">{product.assemblyTime}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-open text-gray-500">Material:</span>
                        <span className="font-quicksand font-medium text-gray-700">Eucalyptus Wood</span>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2">
                      {product.features.slice(0, 2).map((feature, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-lg font-open"
                        >
                          {feature}
                        </span>
                      ))}
                      {product.features.length > 2 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-lg font-open">
                          +{product.features.length - 2} more
                        </span>
                      )}
                    </div>

                    {/* Price and CTA */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div>
                        <span className="font-quicksand font-bold text-2xl text-ochre-600">
                          {product.price}
                        </span>
                      </div>
                      <div className="flex space-x-2">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-quicksand font-medium hover:bg-gray-200 transition-colors"
                        >
                          360° View
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-4 py-2 bg-gradient-to-r from-ochre-500 to-terra-500 text-white rounded-lg font-quicksand font-medium flex items-center space-x-2"
                        >
                          <span>Quote</span>
                          <ArrowRight className="w-4 h-4" />
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filteredProducts.length === 0 && (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Sparkles className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="font-quicksand font-semibold text-xl text-gray-700 mb-2">
                No products match your filters
              </h3>
              <p className="font-open text-gray-500">
                Try adjusting your search criteria to find more magical furniture.
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};
