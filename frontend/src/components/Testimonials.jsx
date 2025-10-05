import React, { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

export const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  
  const testimonials = [
    {
      name: "Diego Vercammen",
      duration: "11 months ago",
      rating: 5,
      review: "Been working with Harsh for like a month now and its absolutely amazing. Fast communication very honest and does his work very well and clean. Definitely a great guy to work with!",
      company: "Business Owner",
      avatar: "DV"
    },
    {
      name: "Jeffrey Meijer", 
      duration: "a year ago",
      rating: 5,
      review: "I am working with Harsh and I can say that it is a pleasure to work with him, he delivers good work and is a kind person. I really recommend him to every business owner.",
      company: "Entrepreneur",
      avatar: "JM"
    },
    {
      name: "Jaap Driessen",
      duration: "a year ago", 
      rating: 5,
      review: "I have been working with Harsh for a long time. Harsh is a hard working good guy. Does his job well and knows exactly what he is doing.",
      company: "Business Partner",
      avatar: "JD"
    },
    {
      name: "Dario",
      duration: "11 months ago",
      rating: 5, 
      review: "Real great service and 10/10 experience. A big win for me and my business to work together with TrustVA.",
      company: "Client",
      avatar: "D"
    }
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            What Our <span className="text-blue-600">Clients Say</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Hear from our satisfied clients who have experienced the TrustVA difference firsthand.
          </p>
        </div>

        {/* Interactive Testimonial Carousel */}
        <div className="relative">
          <Card className="max-w-4xl mx-auto p-8 lg:p-12 bg-white/80 backdrop-blur-sm border-0 shadow-2xl">
            
            {/* Quote Icon */}
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                <Quote className="w-8 h-8 text-white" />
              </div>
            </div>

            {/* Active Testimonial */}
            <div className="text-center mb-8">
              
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Review Text */}
              <blockquote className="text-xl lg:text-2xl text-slate-700 leading-relaxed mb-8 italic">
                "{testimonials[activeTestimonial].review}"
              </blockquote>

              {/* Client Info */}
              <div className="flex items-center justify-center space-x-4">
                {/* Avatar */}
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  {testimonials[activeTestimonial].avatar}
                </div>
                
                <div className="text-left">
                  <h4 className="font-bold text-slate-900">
                    {testimonials[activeTestimonial].name}
                  </h4>
                  <p className="text-slate-600 text-sm">
                    {testimonials[activeTestimonial].company} • {testimonials[activeTestimonial].duration}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                onClick={prevTestimonial}
                className="rounded-full border-2 border-slate-300 hover:border-blue-500 hover:text-blue-600"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              
              {/* Dots */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === activeTestimonial 
                        ? 'bg-blue-600 scale-125' 
                        : 'bg-slate-300 hover:bg-slate-400'
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={nextTestimonial}
                className="rounded-full border-2 border-slate-300 hover:border-blue-500 hover:text-blue-600"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </Card>
        </div>

        {/* All Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className={`p-6 cursor-pointer transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg hover:shadow-xl ${
                index === activeTestimonial 
                  ? 'bg-blue-50 border-2 border-blue-200' 
                  : 'bg-white/80 backdrop-blur-sm'
              }`}
              onClick={() => setActiveTestimonial(index)}
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 text-sm">{testimonial.name}</h4>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-slate-600 text-sm line-clamp-3">
                {testimonial.review}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};