'use client';

import React from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Facebook, Twitter, Linkedin, Instagram, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#00204E] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1: About */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-[#D80621] rounded-lg flex items-center justify-center">
                <span className="text-white">CV</span>
              </div>
              <span className="text-white text-xl">CanadaVisa</span>
            </div>
            <p className="text-white/70 mb-6">
              Your trusted partner for Canadian immigration. Expert guidance for skilled workers, students, and families.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-[#D80621] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-[#D80621] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-[#D80621] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-[#D80621] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="text-white mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  Express Entry
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  Family Sponsorship
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  Study Permits
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  Work Permits
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  Business Immigration
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h3 className="text-white mb-6">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  CRS Calculator
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  PNP Finder
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  Blog & News
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  Success Stories
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-white mb-6">Newsletter</h3>
            <p className="text-white/70 mb-4">
              Get the latest immigration news and updates delivered to your inbox.
            </p>
            <div className="space-y-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 rounded-xl focus:ring-[#D80621]"
              />
              <Button className="w-full bg-[#D80621] hover:bg-[#b00519] rounded-xl transition-all duration-300 hover:scale-105">
                <Mail className="mr-2 h-4 w-4" />
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © 2025 CanadaVisa. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}