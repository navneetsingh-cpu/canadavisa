"use client";

import { useEffect } from "react";
import "@n8n/chat/style.css";
import { createChat } from "@n8n/chat";

export function ChatbotFAB() {
  useEffect(() => {
    createChat({
      webhookUrl: `${process.env.NEXT_PUBLIC_webhookUrl}`,
      initialMessages: [
		'Hi there! 👋',
		'Welcome to Canadavisa. How can I assist you today?'
	],
    });
  }, []);
  return <div></div>;
}
