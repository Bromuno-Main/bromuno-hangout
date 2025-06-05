"use client"
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface ComingSoonProps {
  title?: string;
  description: string;
  imageUrl?: string;
}

export function ComingSoon({ 
  title = "Coming Soon", 
  description,
  imageUrl = "/Minimalist Geometric Composition.jpeg"
}: ComingSoonProps) {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src={imageUrl}
              alt="Coming Soon"
              fill
              className="object-cover opacity-10"
            />
          </div>

          <div className="relative z-10 p-8 md:p-12 text-center">
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {title}
              </h1>
              
              <div className="w-20 h-1 bg-emerald-500 mx-auto mb-8" />
              
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                {description}
              </p>

              {/* Decorative elements */}
              <div className="flex items-center justify-center gap-4 mb-8">
                {[1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3 + (i * 0.1), duration: 0.5 }}
                    className="w-3 h-3 rounded-full bg-emerald-500"
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
