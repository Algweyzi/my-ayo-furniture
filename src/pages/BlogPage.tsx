import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Search, Tag } from 'lucide-react';
import { faker } from '@faker-js/faker';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  tags: string[];
}

// Generate blog posts using faker
const generateBlogPosts = (): BlogPost[] => {
  const categories = ['DIY Tips', 'Design Ideas', 'Safety Guide', 'Ethiopian Culture', 'Sustainability'];
  const authors = ['Almaz Bekele', 'Dawit Mulugeta', 'Mesfin Tadesse', 'Sara Johnson'];
  
  const postsContent = [
    {
      title: "5 DIY Projects to Do With Your Child This Weekend",
      excerpt: "Transform your weekend into quality family time with these simple yet rewarding DIY furniture projects that children of all ages can help with.",
      image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=400&h=300&fit=crop"
    },
    {
      title: "How to Design a Montessori-Inspired Room",
      excerpt: "Discover how to incorporate Montessori principles into your child's room design for independence and learning.",
      image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&h=300&fit=crop"
    },
    {
      title: "Eco-Friendly Interiors: Ethiopian Style Meets Modern Design",
      excerpt: "Learn how traditional Ethiopian design elements can enhance modern eco-friendly interior design for children's spaces.",
      image: "https://images.unsplash.com/photo-1613563961883-34a4b274534f?w=400&h=300&fit=crop"
    },
    {
      title: "Creating Safe Spaces: A Parent's Guide to Child-Friendly Furniture",
      excerpt: "A comprehensive guide to ensuring your child's room is a safe haven, from material choices to furniture placement.",
      image: "https://images.unsplash.com/photo-1542037104-924839965b64?w=400&h=300&fit=crop"
    },
    {
      title: "Traditional Ethiopian Patterns in Modern Children's Rooms",
      excerpt: "Explore how to beautifully integrate timeless Ethiopian textile patterns and motifs into contemporary kids' room decor.",
      image: "https://images.unsplash.com/photo-1618022039368-833580467323?w=400&h=300&fit=crop"
    },
    {
      title: "The Psychology of Color in Children's Bedrooms",
      excerpt: "From calming blues to energetic yellows, understand how color affects your child's mood and creativity.",
      image: "https://images.unsplash.com/photo-1595741695241-b35f235fabc8?w=400&h=300&fit=crop"
    },
    {
      title: "Sustainable Living: Teaching Kids Through Furniture Choices",
      excerpt: "Involve your children in making eco-conscious decisions for your home, starting with sustainably sourced furniture.",
      image: "https://images.unsplash.com/photo-1444927714506-8492d94b4e3d?w=400&h=300&fit=crop"
    },
    {
      title: "Small Room, Big Dreams: Maximizing Space in Children's Bedrooms",
      excerpt: "Clever storage solutions and multi-functional furniture ideas to make the most of a compact room.",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop"
    },
    {
      title: "Building Memories: The Joy of DIY Family Projects",
      excerpt: "More than just furniture, our DIY kits are about the shared experience and pride of creating something together.",
      image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9e?w=400&h=300&fit=crop"
    }
  ];

  return postsContent.map((post, index) => ({
    id: index + 1,
    ...post,
    content: faker.lorem.paragraphs(8),
    author: authors[Math.floor(Math.random() * authors.length)],
    date: faker.date.recent({ days: 30 }).toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    }),
    readTime: `${faker.number.int({ min: 3, max: 12 })} min read`,
    category: categories[Math.floor(Math.random() * categories.length)],
    tags: faker.helpers.arrayElements(['DIY', 'Safety', 'Design', 'Ethiopian', 'Eco-friendly', 'Kids', 'Montessori', 'Color'], { min: 2, max: 4 })
  }));
};

export const BlogPage: React.FC = () => {
  const [blogPosts] = useState<BlogPost[]>(generateBlogPosts());
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const categories = ['All', 'DIY Tips', 'Design Ideas', 'Safety Guide', 'Ethiopian Culture', 'Sustainability'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (selectedPost) {
    return (
      <div className="min-h-screen pt-20">
        {/* Article Header */}
        <section className="bg-gradient-to-br from-mint-50 via-sky-50 to-blush-50 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.button
              onClick={() => setSelectedPost(null)}
              className="flex items-center space-x-2 text-ochre-600 hover:text-ochre-700 mb-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <ArrowRight className="w-4 h-4 rotate-180" />
              <span className="font-open">Back to Blog</span>
            </motion.button>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                <span className="bg-ochre-100 text-ochre-700 px-3 py-1 rounded-full font-quicksand font-medium">
                  {selectedPost.category}
                </span>
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span className="font-open">{selectedPost.date}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <User className="w-4 h-4" />
                  <span className="font-open">{selectedPost.author}</span>
                </div>
                <span className="font-open">{selectedPost.readTime}</span>
              </div>

              <h1 className="font-quicksand font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-800 leading-tight">
                {selectedPost.title}
              </h1>

              <p className="font-open text-lg text-gray-600 leading-relaxed">
                {selectedPost.excerpt}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />

              <div className="prose prose-lg max-w-none">
                <div className="font-open text-gray-700 leading-relaxed space-y-6">
                  {selectedPost.content.split('\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-8 border-t border-gray-200">
                <span className="font-quicksand font-medium text-gray-700 mr-2">Tags:</span>
                {selectedPost.tags.map(tag => (
                  <span
                    key={tag}
                    className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-open"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    );
  }

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
              Ideas & <span className="bg-gradient-to-r from-ochre-500 to-terra-500 bg-clip-text text-transparent">
                Inspiration
              </span>
            </h1>
            <p className="font-open text-lg text-gray-600 max-w-3xl mx-auto">
              Discover tips, trends, and stories about creating magical spaces for children, with insights from our design experts and Ethiopian artisans.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="bg-white border-b border-gray-200 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 w-full md:w-auto md:max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ochre-500 font-open"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-quicksand font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-ochre-500 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {filteredPosts.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              whileHover={{ y: -5 }}
              onClick={() => setSelectedPost(filteredPosts[0])}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative">
                  <img
                    src={filteredPosts[0].image}
                    alt={filteredPosts[0].title}
                    className="w-full h-96 lg:h-full object-cover"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="bg-ochre-500 text-white px-4 py-2 rounded-full font-quicksand font-semibold text-sm">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full font-quicksand font-medium">
                      {filteredPosts[0].category}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span className="font-open">{filteredPosts[0].date}</span>
                    </div>
                  </div>
                  <h2 className="font-quicksand font-bold text-2xl sm:text-3xl text-gray-800 mb-4 leading-tight">
                    {filteredPosts[0].title}
                  </h2>
                  <p className="font-open text-gray-600 leading-relaxed mb-6">
                    {filteredPosts[0].excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <User className="w-4 h-4" />
                      <span className="font-open">{filteredPosts[0].author}</span>
                      <span className="mx-2">•</span>
                      <span className="font-open">{filteredPosts[0].readTime}</span>
                    </div>
                    <ArrowRight className="w-5 h-5 text-ochre-500" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(1).map((post, index) => (
              <motion.article
                key={post.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                onClick={() => setSelectedPost(post)}
              >
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full font-quicksand font-medium text-sm">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex items-center space-x-4 text-xs text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span className="font-open">{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <User className="w-3 h-3" />
                      <span className="font-open">{post.author}</span>
                    </div>
                    <span className="font-open">{post.readTime}</span>
                  </div>

                  <h3 className="font-quicksand font-bold text-lg text-gray-800 leading-tight line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="font-open text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 2).map(tag => (
                      <span
                        key={tag}
                        className="inline-flex items-center space-x-1 bg-gray-100 text-gray-600 px-2 py-1 rounded-lg text-xs font-open"
                      >
                        <Tag className="w-3 h-3" />
                        <span>{tag}</span>
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="font-open text-sm text-ochre-600 font-medium">
                      Read More
                    </span>
                    <ArrowRight className="w-4 h-4 text-ochre-500" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="font-quicksand font-semibold text-xl text-gray-700 mb-2">
                No articles found
              </h3>
              <p className="font-open text-gray-500">
                Try adjusting your search or filter criteria.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
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
              Stay Inspired
            </h2>
            <p className="font-open text-lg text-gray-600 max-w-2xl mx-auto">
              Get weekly design tips, DIY ideas, and stories from Ethiopian families creating magical spaces for their children.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ochre-500 font-open"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-ochre-500 to-terra-500 text-white font-quicksand font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
