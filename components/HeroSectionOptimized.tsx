'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from './ui/button';
import { ArrowRight, Compass } from 'lucide-react';

interface HeroSectionOptimizedProps {
  backgroundImage: string;
}

export function HeroSectionOptimized({ backgroundImage }: HeroSectionOptimizedProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt="Canadian landscape"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#00204E]/80 to-[#00204E]/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <h1 className="text-white mb-6 max-w-4xl mx-auto text-5xl sm:text-6xl md:text-7xl leading-tight">
          Your Journey to Canada Starts Here
        </h1>
        <p className="text-white/90 text-xl max-w-2xl mx-auto mb-10">
          Expert guidance for skilled workers, students, and families seeking a new life in Canada. 
          Let us make your immigration journey smooth and successful.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-[#D80621] hover:bg-[#b00519] text-white rounded-xl px-8 py-6 transition-all duration-300 hover:shadow-xl hover:scale-105 group"
          >
            Start Free Assessment
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-white/10 hover:bg-white/20 text-white border-2 border-white rounded-xl px-8 py-6 backdrop-blur-sm transition-all duration-300 hover:shadow-xl group"
          >
            <Compass className="mr-2 h-5 w-5" />
            Explore Programs
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/50 flex justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
