'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 py-8">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
              <span className="text-lg font-black text-zinc-900 tracking-tighter">NK</span>
            </div>
            <span className="text-zinc-400 text-sm">
              © {new Date().getFullYear()} NK Creative Media. All rights reserved.
            </span>
          </div>
          
          <div className="flex items-center gap-6">
            <a href="#services" className="text-zinc-500 hover:text-amber-400 text-sm transition-colors">Services</a>
            <a href="#contact" className="text-zinc-500 hover:text-amber-400 text-sm transition-colors">Contact</a>
            <a href="https://wa.me/917032907768" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-amber-400 text-sm transition-colors">WhatsApp</a>
          </div>
        </div>
      </div>
    </footer>
  );
}