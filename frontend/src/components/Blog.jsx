import React from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ArrowRight, Clock, User, Calendar } from 'lucide-react';
import { mockBlogPosts } from '../mock';

export const Blog = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Latest <span className="text-blue-600">Insights</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Stay updated with the latest trends, best practices, and insights 
            from the world of outsourcing and business solutions.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {mockBlogPosts.map((post, index) => (
            <Card 
              key={post.id} 
              className="group bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              {/* Featured Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-blue-100 to-slate-100 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-slate-600/20 group-hover:from-blue-500/30 group-hover:to-slate-600/30 transition-all duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                {/* Category Badge */}
                <Badge className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1">
                  {post.category}
                </Badge>
              </div>
              
              {/* Content */}
              <div className="p-6">
                {/* Meta Info */}
                <div className="flex items-center text-sm text-slate-500 mb-4 space-x-4">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    {post.author}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                  {post.title}
                </h3>
                
                {/* Excerpt */}
                <p className="text-slate-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <span className="text-sm text-slate-500">{post.date}</span>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 p-2 rounded-full group-hover:translate-x-1 transition-transform duration-300"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="p-8 lg:p-12 bg-gradient-to-r from-slate-50 to-blue-50 border-0 shadow-lg">
            <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
              Want to Stay Updated?
            </h3>
            <p className="text-lg text-slate-600 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest insights, tips, and industry updates 
              delivered directly to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-blue-500 focus:outline-none text-slate-700"
              />
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg whitespace-nowrap transition-all duration-300 hover:shadow-lg">
                Subscribe Now
              </Button>
            </div>
            
            <p className="text-sm text-slate-500 mt-4">
              No spam, unsubscribe at any time.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};