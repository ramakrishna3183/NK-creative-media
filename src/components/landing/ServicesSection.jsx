'use client';

import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: "Professional Video Editing",
    description: "High-quality video editing with color grading, transitions, and effects that captivate your audience.",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=300&fit=crop"
  },
  {
    title: "SEO Optimization",
    description: "Boost your visibility with strategic SEO that helps your content rank higher and reach more viewers.",
    image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=400&h=300&fit=crop"
  },
  {
    title: "Vlogs Production",
    description: "Complete vlog production from planning to final edit, creating engaging content that tells your story.",
    image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=400&h=300&fit=crop"
  },
  {
    title: "Podcast Editing",
    description: "Professional podcast editing with noise reduction, mixing, and seamless audio quality.",
    image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=400&h=300&fit=crop"
  },
  {
    title: "Subtitle Sync",
    description: "Accurate subtitle synchronization in multiple languages to reach a global audience.",
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&h=300&fit=crop"
  },
  {
    title: "Channel Setup & Keywords",
    description: "Complete YouTube channel setup with branding, optimization, titles, tags, and strategic keyword research.",
    image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=400&h=300&fit=crop"
  },
  {
    title: "Content Planning",
    description: "Strategic content calendars and planning to keep your audience engaged consistently.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=300&fit=crop"
  },
  {
    title: "Social Media Management",
    description: "Complete SMM services to grow your presence across all major platforms.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop"
  },
  {
    title: "Eye-Catching Thumbnails",
    description: "Custom thumbnail designs that grab attention and increase click-through rates.",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=300&fit=crop"
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-amber-500 font-medium tracking-widest uppercase text-sm">What We Offer</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 mt-3 mb-4">
            Our Services
          </h2>
          <p className="text-zinc-500 max-w-2xl mx-auto text-lg">
            Comprehensive digital media solutions to help you create, optimize, and grow your online presence.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative h-72 rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Default State - Image with Title Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-zinc-900/30 to-transparent transition-opacity duration-300 group-hover:opacity-0" />
              
              {/* Title (visible by default, hidden on hover) */}
              <div className="absolute bottom-0 left-0 right-0 p-6 transition-opacity duration-300 group-hover:opacity-0">
                <h3 className="text-xl font-bold text-white">
                  {service.title}
                </h3>
              </div>

              {/* Hover State - Full Overlay with Description */}
              <div className="absolute inset-0 bg-gradient-to-t from-amber-600 via-amber-500 to-amber-400 opacity-0 group-hover:opacity-95 transition-all duration-300 flex flex-col justify-center items-center p-6 text-center">
                <h3 className="text-xl font-bold text-zinc-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-zinc-800 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}