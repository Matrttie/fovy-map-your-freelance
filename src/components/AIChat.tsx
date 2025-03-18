
import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send, User, Bot } from 'lucide-react';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

export const AIChat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hi there! I'm your AIR Minder. How are you feeling about your freelance career today?",
      sender: 'ai',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const endOfMessagesRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // AI responses for demo
  const aiResponses = [
    "It's normal to feel uncertain when starting a new project. Remember that you've successfully completed many similar projects before.",
    "Your skills in UI/UX design have improved significantly over the past few months. The work you did for that last client was exceptional!",
    "I understand pricing can be challenging. Have you considered the value you bring rather than just the hours you work?",
    "That's a great achievement! By focusing on your strengths like React development, you're establishing yourself as an expert in that area.",
    "Remember to take breaks and practice self-care. Burnout can affect your creativity and productivity.",
  ];

  // Scroll to bottom when messages change
  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    // Add user message
    const newMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, newMessage]);
    setInputValue('');

    // Simulate AI response
    setTimeout(() => {
      const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)];
      
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: randomResponse,
        sender: 'ai',
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, aiMessage]);
    }, 1000);
  };

  return (
    <div 
      ref={containerRef} 
      className={`relative overflow-hidden rounded-2xl glass-card h-[500px] flex flex-col ${
        isVisible ? 'animate-scale-in' : 'opacity-0'
      }`}
    >
      <div className="flex items-center border-b p-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-fovy-lightblue">
          <Bot className="h-5 w-5 text-fovy-blue" />
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium">AIR Minder</p>
          <p className="text-xs text-muted-foreground">Self-Efficacy & Confidence Assistant</p>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div
            key={message.id}
            className={`chat-bubble ${message.sender}`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-start gap-2">
              {message.sender === 'ai' ? (
                <Bot className="h-5 w-5 mt-1 flex-shrink-0" />
              ) : (
                <User className="h-5 w-5 mt-1 flex-shrink-0" />
              )}
              <p>{message.content}</p>
            </div>
          </div>
        ))}
        <div ref={endOfMessagesRef} />
      </div>
      
      <div className="border-t p-4">
        <div className="flex gap-2">
          <Input
            placeholder="Write a message..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSendMessage();
              }
            }}
            className="flex-1"
          />
          <Button 
            onClick={handleSendMessage}
            className="bg-fovy-blue hover:bg-fovy-blue/90"
          >
            <Send className="h-4 w-4" />
            <span className="sr-only">Send</span>
          </Button>
        </div>
      </div>
    </div>
  );
};
