import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Wrench, Clock, Users, Star, Download, ArrowRight, Play, CheckCircle } from 'lucide-react';

interface DIYKit {
  id: number;
  name: string;
  difficulty: 'Easy' | 'Medium' | 'Advanced';
  ageGroup: string;
  time: string;
  participants: string;
  price: string;
  image: string;
  description: string;
  includes: string[];
  tools: string[];
  steps: number;
  rating: number;
}

const diyKits: DIYKit[] = [
  {
    id: 1,
    name: "Mini Safari Stool",
    difficulty: "Easy",
    ageGroup: "4-7",
    time: "45 mins",
    participants: "Parent + Child",
    price: "2,500 ETB",
    image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=400&h=300&fit=crop",
    description: "Perfect first DIY project! Build a cute animal-shaped stool together.",
    includes: ["Pre-cut wood pieces", "Child-safe screws", "Animal stickers", "Step-by-step guide"],
    tools: ["Screwdriver (included)", "Sandpaper (included)"],
    steps: 5,
    rating: 4.9
  },
  {
    id: 2,
    name: "Cosmic Night Light",
    difficulty: "Easy",
    ageGroup: "8+",
    time: "1 hour",
    participants: "Independent",
    price: "1,800 ETB",
    image: "https://images.unsplash.com/photo-1531593444421-b51a1f0539b7?w=400&h=300&fit=crop",
    description: "Create a magical starry night with this LED-powered night light project.",
    includes: ["Wooden frame", "LED string lights", "Star cutouts", "Battery pack"],
    tools: ["Small drill (parent supervision)", "Scissors"],
    steps: 4,
    rating: 4.8
  },
  {
    id: 3,
    name: "Treehouse Bookend Set",
    difficulty: "Medium",
    ageGroup: "8+",
    time: "2 hours",
    participants: "Parent + Child",
    price: "3,200 ETB",
    image: "https://images.unsplash.com/photo-1550399105-c4db5fb85c18?w=400&h=300&fit=crop",
    description: "Functional art for their bookshelf - a pair of tree-themed bookends.",
    includes: ["Carved wood pieces", "Green felt leaves", "Heavy base", "Wood glue"],
    tools: ["Clamps", "Fine brush for painting"],
    steps: 8,
    rating: 4.7
  },
  {
    id: 4,
    name: "Addis Adventure Toy Chest",
    difficulty: "Advanced",
    ageGroup: "12+",
    time: "4 hours",
    participants: "Family Project",
    price: "8,500 ETB",
    image: "https://images.unsplash.com/photo-1596423409995-121929a85437?w=400&h=300&fit=crop",
    description: "A challenging but rewarding project featuring Ethiopian-inspired patterns.",
    includes: ["All wood panels", "Hinges", "Safety latch", "Pattern templates", "Paint"],
    tools: ["Drill", "Sandpaper", "Paint brushes", "Measuring tape"],
    steps: 12,
    rating: 4.6
  }
];

export const DIYPage: React.FC = () => {
  const [selectedKit, setSelectedKit] = useState<DIYKit | null>(null);
  const [activeTab, setActiveTab] = useState<'overview' | 'instructions' | 'gallery'>('overview');

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-ochre-50 via-sand-50 to-terra-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-quicksand font-bold text-4xl sm:text-5xl text-gray-800">
              Build <span className="bg-gradient-to-r from-ochre-500 to-terra-500 bg-clip-text text-transparent">
                Together
              </span>, Create <span className="bg-gradient-to-r from-mint-500 to-sky-500 bg-clip-text text-transparent">
                Memories
              </span>
            </h1>
            <p className="font-open text-lg text-gray-600 max-w-3xl mx-auto">
              Our DIY furniture kits combine education with fun, creating quality time while building beautiful, functional pieces for your child's room.
            </p>
            <motion.div
              className="flex items-center justify-center space-x-8 pt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-mint-400 to-mint-500 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <p className="font-quicksand font-semibold text-gray-700">Family Bonding</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-sky-400 to-sky-500 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Wrench className="w-8 h-8 text-white" />
                </div>
                <p className="font-quicksand font-semibold text-gray-700">Learn Skills</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-ochre-400 to-ochre-500 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <p className="font-quicksand font-semibold text-gray-700">Feel Proud</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* DIY Kits Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center space-y-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-quicksand font-bold text-3xl sm:text-4xl text-gray-800">
              Choose Your <span className="text-ochre-500">Adventure</span>
            </h2>
            <p className="font-open text-lg text-gray-600 max-w-2xl mx-auto">
              From beginner-friendly projects to challenging family builds, find the perfect kit for your skill level.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {diyKits.map((kit, index) => (
              <motion.div
                key={kit.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                onClick={() => setSelectedKit(kit)}
              >
                {/* Kit Image */}
                <div className="relative">
                  <img
                    src={kit.image}
                    alt={kit.name}
                    className="w-full h-56 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-quicksand font-semibold ${
                      kit.difficulty === 'Easy' ? 'bg-mint-100 text-mint-700' :
                      kit.difficulty === 'Medium' ? 'bg-sand-100 text-sand-700' :
                      'bg-terra-100 text-terra-700'
                    }`}>
                      {kit.difficulty}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="font-quicksand font-semibold text-sm text-gray-700">
                        {kit.rating}
                      </span>
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 bg-ochre-500 rounded-full flex items-center justify-center shadow-lg"
                    >
                      <Play className="w-6 h-6 text-white ml-1" />
                    </motion.button>
                  </div>
                </div>

                {/* Kit Info */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="font-quicksand font-bold text-xl text-gray-800 mb-2">
                      {kit.name}
                    </h3>
                    <p className="font-open text-gray-600 leading-relaxed">
                      {kit.description}
                    </p>
                  </div>

                  {/* Kit Details */}
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-sky-500" />
                      <span className="font-open text-gray-600">{kit.time}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-mint-500" />
                      <span className="font-open text-gray-600">{kit.participants}</span>
                    </div>
                    <div className="font-open text-gray-600">
                      Age: <span className="font-quicksand font-medium">{kit.ageGroup} years</span>
                    </div>
                    <div className="font-open text-gray-600">
                      Steps: <span className="font-quicksand font-medium">{kit.steps}</span>
                    </div>
                  </div>

                  {/* What's Included Preview */}
                  <div>
                    <h4 className="font-quicksand font-semibold text-gray-700 mb-2">What's Included:</h4>
                    <div className="flex flex-wrap gap-2">
                      {kit.includes.slice(0, 2).map((item, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-lg font-open"
                        >
                          {item}
                        </span>
                      ))}
                      <span className="px-2 py-1 bg-ochre-100 text-ochre-600 text-xs rounded-lg font-open">
                        +{kit.includes.length - 2} more
                      </span>
                    </div>
                  </div>

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="font-quicksand font-bold text-2xl text-ochre-600">
                      {kit.price}
                    </span>
                    <div className="flex space-x-2">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-quicksand font-medium hover:bg-gray-200 transition-colors"
                      >
                        <Download className="w-4 h-4 inline mr-2" />
                        Preview
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-2 bg-gradient-to-r from-ochre-500 to-terra-500 text-white rounded-lg font-quicksand font-medium flex items-center space-x-2"
                      >
                        <span>Order Kit</span>
                        <ArrowRight className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center space-y-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-quicksand font-bold text-3xl sm:text-4xl text-gray-800">
              How It <span className="text-terra-500">Works</span>
            </h2>
            <p className="font-open text-lg text-gray-600 max-w-2xl mx-auto">
              From order to completion, we make the DIY experience smooth and enjoyable for the whole family.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Choose Your Kit",
                description: "Browse our collection and select the perfect project for your family's skill level and interests.",
                icon: Star,
                color: "mint"
              },
              {
                step: "02", 
                title: "Receive Your Package",
                description: "Everything arrives neatly packaged with pre-cut pieces, tools, and detailed instructions.",
                icon: CheckCircle,
                color: "sky"
              },
              {
                step: "03",
                title: "Build Together",
                description: "Follow our step-by-step guide with clear illustrations and video tutorials for each stage.",
                icon: Wrench,
                color: "ochre"
              },
              {
                step: "04",
                title: "Enjoy & Share",
                description: "Admire your creation and share photos with our community of proud DIY builders!",
                icon: Users,
                color: "terra"
              }
            ].map((step, index) => (
              <motion.div
                key={step.step}
                className="text-center space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative">
                  <div className={`w-20 h-20 bg-gradient-to-r from-${step.color}-400 to-${step.color}-500 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-800 text-white rounded-full flex items-center justify-center font-quicksand font-bold text-sm">
                    {step.step}
                  </div>
                </div>
                <h3 className="font-quicksand font-bold text-xl text-gray-800">
                  {step.title}
                </h3>
                <p className="font-open text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
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
              Ready to Start Building?
            </h2>
            <p className="font-open text-lg text-gray-600 max-w-2xl mx-auto">
              Join hundreds of Ethiopian families who have created lasting memories while building beautiful furniture together.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-ochre-500 to-terra-500 text-white font-quicksand font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Browse All DIY Kits
              <ArrowRight className="ml-2 w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
