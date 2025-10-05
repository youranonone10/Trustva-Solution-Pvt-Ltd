import React from 'react';
import { Card } from './ui/card';
import { TrendingUp, Users, Globe, Target } from 'lucide-react';

export const About = () => {
  const stats = [
    { number: "2023", label: "Founded", icon: TrendingUp },
    { number: "9+", label: "Team Members", icon: Users },
    { number: "Global", label: "Services", icon: Globe },
    { number: "100%", label: "Dedicated", icon: Target }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          
          {/* Left Content */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              About <span className="text-blue-600">TrustVA</span>
            </h2>
            
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                Founded in 2023, <strong className="text-slate-900">TrustVA Business Solutions Pvt. Ltd.</strong> has 
                pioneered innovative outsourcing services from India. We are a dynamic startup 
                company proudly run by the youth of India.
              </p>
              
              <p>
                Starting with just 2 passionate individuals, we have grown to a dedicated team 
                of 9+ members and continue expanding our business to serve clients worldwide.
              </p>
              
              <div className="bg-blue-50 rounded-2xl p-6 border-l-4 border-blue-500">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Our Goal</h3>
                <p className="text-slate-700">
                  To provide reliable, efficient, and professional virtual assistance services 
                  to businesses and individuals, helping them streamline their operations, 
                  enhance productivity, and achieve their goals with confidence and trust 
                  in our dedicated support.
                </p>
              </div>
            </div>
          </div>
          
          {/* Right Content - Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card 
                key={index}
                className="p-6 text-center bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-600 font-medium">
                  {stat.label}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Vision Statement */}
        <div className="text-center">
          <Card className="p-8 lg:p-12 bg-gradient-to-r from-blue-600 to-blue-700 text-white border-0 shadow-2xl">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Expanding Globally, Rooted in Excellence
            </h3>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Led by <strong>Harsh Aggarwal</strong> and powered by India's talented youth, 
              we're committed to delivering world-class outsourcing solutions that drive 
              business success across industries.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};