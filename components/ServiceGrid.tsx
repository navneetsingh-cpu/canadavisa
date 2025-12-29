'use client';

import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/card';
import { ArrowRight, Plane, Users, GraduationCap } from 'lucide-react';

const services = [
  {
    title: 'Express Entry',
    description: 'Fast-track your Canadian permanent residency through our expert guidance on the Express Entry system.',
    icon: Plane,
    color: '#D80621',
  },
  {
    title: 'Family Sponsorship',
    description: 'Reunite with your loved ones in Canada. We help navigate the family sponsorship process with care.',
    icon: Users,
    color: '#00204E',
  },
  {
    title: 'Study Permits',
    description: 'Start your educational journey in Canada. We assist with study permit applications and pathway to PR.',
    icon: GraduationCap,
    color: '#D80621',
  },
];

export function ServiceGrid() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-[#00204E] mb-4">Our Immigration Services</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Comprehensive solutions tailored to your unique immigration needs
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="rounded-2xl border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white group"
            >
              <CardHeader>
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: `${service.color}15` }}
                >
                  <service.icon
                    className="h-7 w-7"
                    style={{ color: service.color }}
                  />
                </div>
                <CardTitle className="text-[#00204E] mb-2">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600 text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <a
                  href="#"
                  className="inline-flex items-center text-[#D80621] hover:text-[#b00519] transition-colors group/link"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}