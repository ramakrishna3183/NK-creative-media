'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 relative overflow-hidden flex items-center">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full">
        <div className="absolute top-20 right-20 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-40 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl" />
      </div>
      
      {/* Diagonal Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full overflow-hidden">
        <div className="absolute -right-20 top-0 w-full h-full bg-gradient-to-bl from-amber-500/20 to-transparent transform skew-x-12" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-amber-400 font-medium tracking-widest uppercase text-sm mb-4"
            >
              Creative Media Solutions
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            >
              Transform Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-500">
                Digital Presence
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-zinc-400 text-lg md:text-xl mb-8 max-w-lg leading-relaxed"
            >
              Professional video editing, SEO optimization, and complete content management 
              to elevate your brand and grow your audience.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button 
                size="lg"
                className="bg-amber-500 hover:bg-amber-400 text-zinc-900 font-semibold px-8 py-6 text-lg rounded-full shadow-lg shadow-amber-500/30 transition-all hover:shadow-amber-500/50"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Started
              </Button>
              <Button 
                size="lg"
                className="bg-amber-500 hover:bg-amber-400 text-zinc-900 font-semibold px-8 py-6 text-lg rounded-full shadow-lg shadow-amber-500/30 transition-all hover:shadow-amber-500/50"
                onClick={scrollToServices}
              >
                <Play className="w-5 h-5 mr-2" />
                Our Services
              </Button>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-wrap gap-8 mt-12"
            >
              {[
                { number: "500+", label: "Projects" },
                { number: "50+", label: "Clients" },
                { number: "5+", label: "Years" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-amber-400">{stat.number}</div>
                  <div className="text-zinc-500 text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Professional Video Editor Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:block mt-10 lg:mt-0"
          >
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-amber-500/20 border border-zinc-800">
                <img 
                  src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=700&fit=crop"
                  alt="Professional Video Editing"
                  className="w-full h-[500px] object-cover"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.button
            onClick={scrollToServices}
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-zinc-500 hover:text-amber-400 transition-colors"
          >
            <ArrowDown className="w-6 h-6" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}