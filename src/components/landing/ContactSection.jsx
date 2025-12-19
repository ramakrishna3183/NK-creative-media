'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Globe, Send, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "7032907768 / 9032557768",
    href: "tel:7032907768"
  },
  {
    icon: Mail,
    label: "Email",
    value: "hi7032907768@gmail.com",
    href: "mailto:hi7032907768@gmail.com"
  },
  {
    icon: Globe,
    label: "Website",
    value: "www.7032907768.com",
    href: "https://www.7032907768.com"
  },
  {
    icon: MapPin,
    label: "Address",
    value: "Road No: 10, Atlas Apartment, Flat No: GA, Banjara Hills, Hyderabad, Telangana 500034",
    href: null
  }
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success('Message sent successfully! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-1/2 h-full">
        <div className="absolute top-40 left-20 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl" />
      </div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/2">
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-amber-400 font-medium tracking-widest uppercase text-sm">Get In Touch</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3 mb-4">
            Contact Us
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Ready to take your content to the next level? Let's discuss your project.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Logo */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg shadow-amber-500/20">
                <span className="text-2xl font-black text-zinc-900 tracking-tighter">NK</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Naveen Kumar O</h3>
                <p className="text-zinc-400">Creative Media Solutions</p>
              </div>
            </div>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  {item.href ? (
                    <a 
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-start gap-4 p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-amber-500/30 transition-all duration-300 hover:bg-zinc-800/50"
                    >
                      <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500/20 transition-colors">
                        <item.icon className="w-5 h-5 text-amber-400" />
                      </div>
                      <div>
                        <span className="text-zinc-500 text-xs uppercase tracking-wider">{item.label}</span>
                        <p className="text-white font-medium mt-0.5 group-hover:text-amber-400 transition-colors">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-start gap-4 p-4 rounded-xl bg-zinc-900/50 border border-zinc-800">
                      <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-amber-400" />
                      </div>
                      <div>
                        <span className="text-zinc-500 text-xs uppercase tracking-wider">{item.label}</span>
                        <p className="text-white font-medium mt-0.5">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <motion.a
              href="https://wa.me/917032907768"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 flex items-center gap-3 w-full p-4 bg-green-600 hover:bg-green-500 rounded-xl transition-colors group"
            >
              <MessageCircle className="w-6 h-6 text-white" />
              <span className="text-white font-semibold">Chat on WhatsApp</span>
            </motion.a>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-white mb-6">Send us a message</h3>
              
              <div className="space-y-5">
                <div>
                  <label className="text-zinc-400 text-sm mb-2 block">Your Name</label>
                  <Input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-zinc-800/50 border-zinc-700 text-white placeholder:text-zinc-500 focus:border-amber-500 focus:ring-amber-500/20 h-12 rounded-xl"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label className="text-zinc-400 text-sm mb-2 block">Email Address</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-zinc-800/50 border-zinc-700 text-white placeholder:text-zinc-500 focus:border-amber-500 focus:ring-amber-500/20 h-12 rounded-xl"
                    placeholder="Enter your email"
                  />
                </div>
                
                <div>
                  <label className="text-zinc-400 text-sm mb-2 block">Your Message</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="bg-zinc-800/50 border-zinc-700 text-white placeholder:text-zinc-500 focus:border-amber-500 focus:ring-amber-500/20 rounded-xl resize-none"
                    placeholder="Enter your message"
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 bg-amber-500 hover:bg-amber-400 text-zinc-900 font-semibold rounded-xl shadow-lg shadow-amber-500/30 transition-all hover:shadow-amber-500/50"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-zinc-900/30 border-t-zinc-900 rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="w-4 h-4" />
                      Send Message
                    </span>
                  )}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}