'use client';

import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { Button } from './ui/button';

export function ChatbotFAB() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 rounded-full bg-[#D80621] hover:bg-[#b00519] text-white shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 relative group"
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <>
              <MessageCircle className="h-6 w-6" />
              {/* Notification Badge */}
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white flex items-center justify-center text-xs">
                1
              </span>
            </>
          )}
        </Button>

        {/* Tooltip */}
        {!isOpen && (
          <div className="absolute bottom-20 right-0 bg-[#00204E] text-white px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
            Chat with an Expert
            <div className="absolute -bottom-1 right-6 w-2 h-2 bg-[#00204E] rotate-45"></div>
          </div>
        )}
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-28 right-8 w-96 h-[500px] bg-white rounded-2xl shadow-2xl z-40 flex flex-col overflow-hidden border border-gray-200 animate-in slide-in-from-bottom-4 duration-300">
          {/* Chat Header */}
          <div className="bg-[#00204E] text-white p-4 rounded-t-2xl">
            <h3 className="text-lg mb-1">Chat with an Expert</h3>
            <p className="text-white/70 text-sm">We typically reply within minutes</p>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
            <div className="bg-white p-4 rounded-xl shadow-sm mb-4">
              <p className="text-sm text-gray-800">
                Hello! 👋 Welcome to CanadaVisa. How can we help you with your immigration journey today?
              </p>
              <span className="text-xs text-gray-400 mt-2 block">Just now</span>
            </div>
          </div>

          {/* Chat Input */}
          <div className="p-4 border-t bg-white">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D80621] focus:border-transparent"
              />
              <Button className="bg-[#D80621] hover:bg-[#b00519] rounded-xl px-6">
                Send
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}