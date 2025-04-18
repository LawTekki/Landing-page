import React, { useState, useEffect } from 'react';
import { Scale, FileText, Brain, Search, Download, Notebook as Robot, GraduationCap, Users, ChevronRight, CheckCircle, Globe, Shield, Clock, Gavel, BookOpen, Building2, ScrollText, UserCheck, MessageSquare, ShoppingCart, Calendar, Wallet, BarChart, Book, Video, UserPlus, Mail, Lock, Menu, X } from 'lucide-react';

function AnimatedText({ text, delay = 0 }) {
  return (
    <span className="animated-word overflow-hidden inline-block">
      <span style={{ animationDelay: `${delay}s` }} className="inline-block">
        {text.split('').map((char, index) => (
          <span
            key={index}
            className="animated-text inline-block"
            style={{ animationDelay: `${delay + index * 0.03}s` }}
          >
            {char}
          </span>
        ))}
      </span>
    </span>
  );
}

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > 100);

      // Update active section based on scroll position
      const sections = ['features', 'marketplace', 'how-it-works', 'testimonials'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const marketplaceCategories = [
    {
      title: "Legal Products",
      icon: <FileText className="w-8 h-8" />,
      items: [
        "Contract templates (NDAs, employment agreements, leases)",
        "eBooks and guides on legal topics",
        "Legal software and automation tools"
      ]
    },
    {
      title: "Events & Courses",
      icon: <Calendar className="w-8 h-8" />,
      items: [
        "Live webinars on legal topics",
        "Recorded lectures and CLE courses",
        "Virtual workshops and training"
      ]
    },
    {
      title: "Legal Services",
      icon: <Gavel className="w-8 h-8" />,
      items: [
        "Attorney consultations",
        "Freelance paralegal support",
        "Legal content creation"
      ]
    }
  ];

  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Matching - Tina the Trolley",
      description: "Smart assistant that recommends the perfect legal solutions based on your needs"
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "Multi-Category Marketplace",
      description: "One-stop shop for legal products, events, courses, and talent"
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "Vendor Dashboard",
      description: "Powerful tools for managing listings, tracking sales, and growing your legal business"
    },
    {
      icon: <Wallet className="w-8 h-8" />,
      title: "Secure Payments",
      description: "Protected transactions with escrow service and multiple payment options"
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "In-App Messaging",
      description: "Direct communication between clients and legal professionals"
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Secure Platform",
      description: "Enterprise-grade security for all legal transactions and communications"
    }
  ];

  const NavLink = ({ href, children }) => (
    <a 
      href={href}
      className={`text-law-secondary hover:text-law-primary transition-colors ${
        activeSection === href.slice(1) ? 'text-law-primary font-semibold' : ''
      }`}
    >
      {children}
    </a>
  );

  return (
    <div className="min-h-screen">
      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-law-primary/95 z-50 transform transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } lg:hidden`}
      >
        <div className="flex justify-end p-6">
          <button 
            onClick={() => setIsMenuOpen(false)}
            className="text-white hover:text-law-light transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="flex flex-col items-center space-y-8 p-6">
          <a 
            href="#features" 
            className="text-white text-xl hover:text-law-light transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Features
          </a>
          <a 
            href="#marketplace" 
            className="text-white text-xl hover:text-law-light transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Marketplace
          </a>
          <a 
            href="#how-it-works" 
            className="text-white text-xl hover:text-law-light transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            How It Works
          </a>
          <a 
            href="#testimonials" 
            className="text-white text-xl hover:text-law-light transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Testimonials
          </a>
          <button className="bg-white text-law-primary px-6 py-2 rounded-full hover:bg-law-light transition-all duration-300 transform hover:scale-105">
            Get Started
          </button>
        </div>
      </div>

      {/* Floating Action Button */}
      <button 
        className={`fixed bottom-8 right-8 bg-blue-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 z-40 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}
      >
        <MessageSquare className="w-6 h-6" />
      </button>

      {/* Hero Section */}
      <header className="relative overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-law-primary/5 via-law-secondary/5 to-law-accent/5 animate-gradient" />
        <div className="absolute inset-0 bg-gradient-radial from-law-light/30 to-transparent" />
        
        <nav className="absolute top-0 left-0 right-0 z-10">
          <div className="container mx-auto px-6 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 animate-slide-in">
                <Scale className="w-8 h-8 text-law-primary animate-float" />
                <span className="text-2xl font-bold text-law-primary">LawTrolley</span>
              </div>
              <div className="hidden lg:flex items-center space-x-6">
                <NavLink href="#features">Features</NavLink>
                <NavLink href="#marketplace">Marketplace</NavLink>
                <NavLink href="#how-it-works">How It Works</NavLink>
                <NavLink href="#testimonials">Testimonials</NavLink>
                <button className="bg-law-primary text-white px-6 py-2 rounded-full hover:bg-law-secondary transition-all duration-300 transform hover:scale-105">
                  Get Started
                </button>
              </div>
              <button 
                className="lg:hidden text-law-primary"
                onClick={() => setIsMenuOpen(true)}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </nav>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-4 px-4 py-1 rounded-full bg-law-light text-law-primary font-medium">
              <AnimatedText text="Your legal needs, all in one trolley" delay={0.2} />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-law-primary mb-6 leading-tight overflow-hidden">
              <div className="mb-2">
                <AnimatedText text="The Smart Legal" delay={0.5} />
              </div>
              <div className="mb-2">
                <AnimatedText text="Marketplace Powered" delay={0.8} />
              </div>
              <div>
                <AnimatedText text="by AI" delay={1.1} />
              </div>
            </h1>
            <p className="text-lg sm:text-xl text-law-secondary mb-8 animate-fade-in-delay max-w-2xl mx-auto typewriter">
              Connect with legal professionals, access templates, and attend events - all in one platform.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-delay-2">
              <button className="w-full sm:w-auto bg-law-primary text-white px-8 py-3 rounded-full hover:bg-law-secondary transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                Start Free Trial
                <ChevronRight className="ml-2 w-4 h-4" />
              </button>
              <button className="w-full sm:w-auto bg-white text-law-primary px-8 py-3 rounded-full border border-law-primary hover:bg-law-light transition-all duration-300 transform hover:scale-105">
                Meet Tina AI
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </header>

      {/* Features Grid */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-law-primary mb-16">
            Powerful Features for Legal Excellence
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 animate-fade-in hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-law-light w-16 h-16 rounded-full flex items-center justify-center mb-6 animate-float">
                  <div className="text-law-primary">{feature.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-law-primary mb-4">{feature.title}</h3>
                <p className="text-law-secondary">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marketplace Categories */}
      <section id="marketplace" className="py-20 bg-law-light">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-law-primary mb-16">
            Everything Legal in One Place
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {marketplaceCategories.map((category, index) => (
              <div 
                key={index}
                className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-law-light w-16 h-16 rounded-full flex items-center justify-center mb-6 animate-float">
                  <div className="text-law-primary">{category.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-law-primary mb-4">{category.title}</h3>
                <ul className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-law-secondary">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-law-primary mb-16">
            How LawTrolley Works
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Search className="w-8 h-8" />,
                title: "Tell Us What You Need",
                description: "Describe your legal requirements to Tina AI"
              },
              {
                icon: <Brain className="w-8 h-8" />,
                title: "Get Smart Matches",
                description: "Receive AI-powered recommendations"
              },
              {
                icon: <ShoppingCart className="w-8 h-8" />,
                title: "Choose & Purchase",
                description: "Select and securely pay for services"
              },
              {
                icon: <Download className="w-8 h-8" />,
                title: "Instant Access",
                description: "Get immediate access to digital products"
              }
            ].map((step, index) => (
              <div 
                key={index}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-law-light w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 animate-float">
                  <div className="text-law-primary">{step.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-law-primary mb-4">{step.title}</h3>
                <p className="text-law-secondary">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-law-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-law-primary to-law-secondary animate-gradient" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 animate-fade-in">
            Ready to Transform Your Legal Practice?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto animate-fade-in-delay">
            Join thousands of legal professionals who are already using LawTrolley to streamline their workflow and grow their business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-law-primary px-8 py-3 rounded-full hover:bg-law-light transition-all duration-300 transform hover:scale-105 animate-fade-in-delay-2">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white/10 transition-all duration-300 transform hover:scale-105 animate-fade-in-delay-2">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <Scale className="w-6 h-6 text-blue-400" />
                <span className="text-xl font-bold">LawTrolley</span>
              </div>
              <p className="text-slate-400">Your comprehensive legal marketplace platform.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Marketplace</h3>
              <ul className="space-y-2 text-slate-400">
                <li className="hover:text-white transition-colors cursor-pointer">Legal Products</li>
                <li className="hover:text-white transition-colors cursor-pointer">Events & Courses</li>
                <li className="hover:text-white transition-colors cursor-pointer">Legal Services</li>
                <li className="hover:text-white transition-colors cursor-pointer">Vendor Dashboard</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-slate-400">
                <li className="hover:text-white transition-colors cursor-pointer">About</li>
                <li className="hover:text-white transition-colors cursor-pointer">Careers</li>
                <li className="hover:text-white transition-colors cursor-pointer">Blog</li>
                <li className="hover:text-white transition-colors cursor-pointer">Contact</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-slate-400">
                <li className="hover:text-white transition-colors cursor-pointer">Privacy Policy</li>
                <li className="hover:text-white transition-colors cursor-pointer">Terms of Service</li>
                <li className="hover:text-white transition-colors cursor-pointer">Cookie Policy</li>
                <li className="hover:text-white transition-colors cursor-pointer">GDPR</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
            <p>© 2024 LawTrolley. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;