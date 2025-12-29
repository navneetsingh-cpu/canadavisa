import React from 'react';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { ServiceGrid } from './components/ServiceGrid';
import { ToolsSection } from './components/ToolsSection';
import { ChatbotFAB } from './components/ChatbotFAB';
import { Footer } from './components/Footer';

export default function App() {
  const heroImage = "https://images.unsplash.com/photo-1560996043-f896c5844d32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW5hZGlhbiUyMGxhbmRzY2FwZSUyMG1vdW50YWluc3xlbnwxfHx8fDE3NjY5ODgyNTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection backgroundImage={heroImage} />
      <ServiceGrid />
      <ToolsSection />
      <Footer />
      <ChatbotFAB />
    </div>
  );
}
