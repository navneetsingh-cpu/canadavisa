'use client';

import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Calculator, MapPin, ArrowRight } from 'lucide-react';

const tools = [
  {
    title: 'CRS Score Calculator',
    description: 'Calculate your Comprehensive Ranking System score and understand your eligibility for Express Entry.',
    icon: Calculator,
    buttonText: 'Calculate Now',
  },
  {
    title: 'PNP Finder',
    description: 'Discover which Provincial Nominee Program matches your profile and career goals.',
    icon: MapPin,
    buttonText: 'Find Your Match',
  },
];

export function ToolsSection() {
  return (
    <section className="py-24 bg-[#00204E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-white mb-4">Immigration Tools</h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Free tools to help you assess your eligibility and explore your options
          </p>
        </div>

        {/* Tools Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {tools.map((tool, index) => (
            <Card
              key={index}
              className="rounded-2xl border-0 bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all duration-300 hover:scale-105 group"
            >
              <CardHeader>
                <div className="w-14 h-14 bg-[#D80621] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <tool.icon className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-white mb-2">
                  {tool.title}
                </CardTitle>
                <CardDescription className="text-white/70 text-base leading-relaxed">
                  {tool.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant="outline"
                  className="w-full bg-white/10 hover:bg-white text-white hover:text-[#00204E] border-white/30 rounded-xl transition-all duration-300 group/btn"
                >
                  {tool.buttonText}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}