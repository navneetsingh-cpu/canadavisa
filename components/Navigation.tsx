'use client';

import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-[#00204E] rounded-lg flex items-center justify-center">
                <span className="text-white">CV</span>
              </div>
              <span className="text-[#00204E] text-xl">CanadaVisa</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#immigrate"
              className="text-[#00204E] hover:text-[#D80621] transition-colors"
            >
              Immigrate
            </a>
            <a
              href="#work"
              className="text-[#00204E] hover:text-[#D80621] transition-colors"
            >
              Work
            </a>
            <a
              href="#study"
              className="text-[#00204E] hover:text-[#D80621] transition-colors"
            >
              Study
            </a>
            <a
              href="#assessment"
              className="text-[#00204E] hover:text-[#D80621] transition-colors"
            >
              Assessment
            </a>
          </div>

          {/* CTA Button */}
          <Button
            className="bg-[#D80621] hover:bg-[#b00519] text-white rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            Free Assessment
          </Button>
        </div>
      </div>
    </nav>
  );
}