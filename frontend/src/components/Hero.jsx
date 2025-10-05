import React from 'react';
import { Button } from './ui/button';
import { Play, ArrowRight, Users, Globe, Award } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Background Video Placeholder */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-slate-900/40 z-10"></div>
        <div className="w-full h-full bg-gradient-to-br from-slate-800 to-blue-900 flex items-center justify-center">
          <Play className="w-24 h-24 text-white/30" />
        </div>
      </div>
      
      {/* Glassmorphism Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="backdrop-blur-sm bg-white/5 rounded-3xl border border-white/10 p-8 lg:p-12 shadow-2xl">
          
          {/* Stats Bar */}
          <div className="flex justify-center items-center gap-8 mb-8 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>9+ Team Members</span>
            </div>
            <div className="w-px h-4 bg-white/20"></div>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4" />
              <span>Global Services</span>
            </div>
            <div className="w-px h-4 bg-white/20"></div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4" />
              <span>Since 2023</span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
            Expert <span className="text-blue-400">Outsourcing</span>
            <br />
            Solutions from India
          </h1>
          
          {/* Subheading */}
          <p className="text-xl lg:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Pioneering virtual assistance services with expertise in Customer Service, 
            Dispute Management, and Fraud Prevention. Trusted by businesses worldwide.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-105"
            >
              Book Consultation
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <p className="text-white/60 text-sm mb-4">Trusted by businesses across industries</p>
            <div className="flex justify-center items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: `${i * 0.2}s` }}></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-white/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
    </section>
  );
};