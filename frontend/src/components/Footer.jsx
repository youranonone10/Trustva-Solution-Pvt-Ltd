import React from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Instagram,
  ArrowRight,
  HeadphonesIcon,
  Shield,
  CreditCard
} from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'Customer Service', icon: HeadphonesIcon, href: '#services' },
    { name: 'Dispute Management', icon: CreditCard, href: '#services' },
    { name: 'Fraud Prevention', icon: Shield, href: '#services' }
  ];

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Our Services', href: '#services' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Book Consultation', href: '#calendar' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Cookie Policy', href: '#' },
    { name: 'Data Protection', href: '#' }
  ];

  return (
    <footer className="bg-slate-900 text-white relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 opacity-90"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.02"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      
      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-8">
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                TrustVA
              </h2>
              <p className="text-slate-200 leading-relaxed text-base">
                Pioneering outsourcing services from India since 2023. 
                Expert virtual assistance for businesses worldwide.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center text-slate-100 font-medium">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <span>India</span>
              </div>
              <div className="flex items-center text-slate-100 font-medium">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <span>+91-XXX-XXX-XXXX</span>
              </div>
              <div className="flex items-center text-slate-100 font-medium">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <span>info@trustva.com</span>
              </div>
              <div className="flex items-center text-slate-100 font-medium">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                  <Globe className="w-4 h-4 text-white" />
                </div>
                <span>www.trustva.com</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-3">
              {[
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
                { icon: Twitter, href: '#', label: 'Twitter' },
                { icon: Facebook, href: '#', label: 'Facebook' },
                { icon: Instagram, href: '#', label: 'Instagram' }
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="w-12 h-12 bg-slate-700 hover:bg-blue-600 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg group"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5 text-slate-300 group-hover:text-white transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">Our Services</h3>
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="flex items-center text-slate-200 hover:text-blue-400 transition-colors duration-200 group py-2"
                  >
                    <div className="w-8 h-8 bg-slate-700 group-hover:bg-blue-600 rounded-lg flex items-center justify-center mr-3 transition-colors duration-200">
                      <service.icon className="w-4 h-4 text-slate-300 group-hover:text-white transition-colors duration-200" />
                    </div>
                    <span className="font-medium group-hover:translate-x-1 transition-transform duration-200">
                      {service.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-200 hover:text-blue-400 transition-colors duration-200 flex items-center group py-2"
                  >
                    <ArrowRight className="w-4 h-4 mr-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200 text-blue-400" />
                    <span className="font-medium group-hover:translate-x-2 transition-transform duration-200">
                      {link.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Legal */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">Stay Connected</h3>
            <p className="text-slate-200 font-medium mb-6">
              Subscribe to our newsletter for industry insights and updates.
            </p>
            
            <div className="mb-8">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-slate-800 border-2 border-slate-600 rounded-l-lg focus:outline-none focus:border-blue-500 text-white placeholder-slate-400 transition-colors duration-200"
                />
                <Button className="bg-blue-600 hover:bg-blue-700 px-6 rounded-l-none rounded-r-lg transition-colors duration-200 border-2 border-blue-600 hover:border-blue-700">
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <h4 className="text-lg font-bold mb-4 text-white">Legal</h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-300 hover:text-blue-400 transition-colors duration-200 font-medium"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-slate-700 bg-slate-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-200 text-base font-medium mb-4 md:mb-0">
              © {currentYear} TrustVA Business Solutions Pvt. Ltd. All rights reserved.
            </p>
            <p className="text-slate-200 text-base font-medium text-center md:text-right">
              Founded by <span className="text-yellow-400 font-bold text-lg bg-slate-700 px-3 py-1 rounded-full">Harsh Aggarwal</span>
              <br className="md:hidden" />
              <span className="hidden md:inline"> • </span>
              Proudly serving clients worldwide from India
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <Button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-14 h-14 bg-blue-600 hover:bg-blue-700 rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 z-50 group border-2 border-blue-500"
        aria-label="Scroll to top"
      >
        <ArrowRight className="w-6 h-6 rotate-[-90deg] group-hover:scale-110 transition-transform duration-200 text-white" />
      </Button>
    </footer>
  );
};
