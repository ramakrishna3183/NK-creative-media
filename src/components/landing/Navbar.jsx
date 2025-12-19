'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? ' backdrop-blur-lg shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-lg group-hover:shadow-amber-500/30 transition-shadow">
                <span className="text-lg font-black text-zinc-900 tracking-tighter">NK</span>
              </div>
              <span className="text-white font-semibold hidden sm:block">NK Creative</span>
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <button 
                onClick={() => scrollToSection('services')}
                className="text-zinc-300 hover:text-amber-400 transition-colors text-sm font-medium"
              >
                Services
              </button>
              {/* <button 
                onClick={() => scrollToSection('blog')}
                className="text-zinc-300 hover:text-amber-400 transition-colors text-sm font-medium"
              >
                Blog
              </button> */}
              {/* <button 
                onClick={() => scrollToSection('contact')}
                className="text-zinc-300 hover:text-amber-400 transition-colors text-sm font-medium"
              >
                Contact
              </button> */}
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-amber-500 hover:bg-amber-400 text-zinc-900 font-semibold rounded-full px-6"
              >
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white p-2"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-zinc-950 pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              <button 
                onClick={() => scrollToSection('services')}
                className="text-white text-2xl font-medium text-left py-3 border-b border-zinc-800"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('blog')}
                className="text-white text-2xl font-medium text-left py-3 border-b border-zinc-800"
              >
                Blog
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-white text-2xl font-medium text-left py-3 border-b border-zinc-800"
              >
                Contact
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-amber-500 hover:bg-amber-400 text-zinc-900 font-semibold rounded-full mt-4 h-12"
              >
                Get Started
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}