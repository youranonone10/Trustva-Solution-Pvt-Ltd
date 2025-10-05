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
    { name: 'Book Consultation', href: '#calendar' },
    { name: 'Blog', href: '#blog' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Cookie Policy', href: '#' },
    { name: 'Data Protection', href: '#' }
  ];

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h2 className="text-3xl font-bold mb-4">
                Trust<span className="text-blue-400">VA</span>
              </h2>
              <p className="text-white leading-relaxed font-medium">
                Pioneering outsourcing services from India since 2023. 
                Expert virtual assistance for businesses worldwide.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-white font-medium">
                <MapPin className="w-5 h-5 mr-3 text-blue-400" />
                <span>India</span>
              </div>
              <div className="flex items-center text-white font-medium">
                <Phone className="w-5 h-5 mr-3 text-blue-400" />
                <span>+91-XXX-XXX-XXXX</span>
              </div>
              <div className="flex items-center text-white font-medium">
                <Mail className="w-5 h-5 mr-3 text-blue-400" />
                <span>info@trustva.com</span>
              </div>
              <div className="flex items-center text-white font-medium">
                <Globe className="w-5 h-5 mr-3 text-blue-400" />
                <span>www.trustva.com</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {[
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
                { icon: Twitter, href: '#', label: 'Twitter' },
                { icon: Facebook, href: '#', label: 'Facebook' },
                { icon: Instagram, href: '#', label: 'Instagram' }
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="w-10 h-10 bg-slate-700 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="flex items-center text-white font-medium hover:text-blue-400 transition-colors duration-200 group"
                  >
                    <service.icon className="w-4 h-4 mr-3 text-blue-400 group-hover:scale-110 transition-transform duration-200" />
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {service.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white font-medium hover:text-blue-400 transition-colors duration-200 flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                    <span className="group-hover:translate-x-2 transition-transform duration-200">
                      {link.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Legal */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Stay Updated</h3>
            <p className="text-slate-300 mb-4">
              Subscribe to our newsletter for industry insights and updates.
            </p>
            
            <div className="mb-6">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-slate-700 border border-slate-600 rounded-l-lg focus:outline-none focus:border-blue-400 text-white placeholder-slate-400"
                />
                <Button className="bg-blue-600 hover:bg-blue-700 px-4 rounded-l-none rounded-r-lg transition-colors duration-200">
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <h4 className="text-lg font-semibold mb-4 text-white">Legal</h4>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-blue-400 transition-colors duration-200"
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
      <div className="border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white text-base font-semibold">
              © {currentYear} TrustVA Business Solutions Pvt. Ltd. All rights reserved.
            </p>
            <p className="text-white text-base mt-2 md:mt-0 font-semibold">
              Founded by <span className="text-yellow-400 font-bold text-xl">Harsh Aggarwal</span> • 
              Proudly serving clients worldwide from India
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <Button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-40 group"
        aria-label="Scroll to top"
      >
        <ArrowRight className="w-5 h-5 rotate-[-90deg] group-hover:scale-110 transition-transform duration-200" />
      </Button>
    </footer>
  );
};