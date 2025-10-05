import React from 'react';
import { Card } from './ui/card';
import { HeadphonesIcon, Shield, CreditCard } from 'lucide-react';

export const Services = () => {
  const services = [
    {
      icon: HeadphonesIcon,
      title: "Customer Service",
      description: "Professional support across Email, Chat, and Phone channels with 24/7 availability and multilingual capabilities.",
      features: ["24/7 Support", "Multi-channel", "Multilingual", "Quick Response"]
    },
    {
      icon: CreditCard,
      title: "Dispute & Chargeback Management",
      description: "Expert handling of payment disputes and chargebacks to protect your revenue and maintain customer relationships.",
      features: ["Revenue Protection", "Expert Handling", "Quick Resolution", "Compliance Assured"]
    },
    {
      icon: Shield,
      title: "Fraud Detection & Prevention",
      description: "Advanced fraud prevention systems and expert analysis to safeguard your business from fraudulent activities.",
      features: ["Advanced Detection", "Real-time Monitoring", "Risk Assessment", "Prevention Strategies"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Our <span className="text-blue-600">Expertise</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive outsourcing solutions designed to streamline your operations 
            and enhance your business efficiency.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group relative p-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                {/* Title */}
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                {/* Features */}
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-slate-700">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};