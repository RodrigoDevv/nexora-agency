import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Bot, User, Sparkles, ThumbsUp, ThumbsDown } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';

// System instruction to give the assistant a personality
const SYSTEM_INSTRUCTION = `You are the official AI Assistant for Nexora, a premium digital experience and branding agency. 
You are helpful, professional, and slightly futuristic. Keep responses concise and focused on how Nexora can help 
users scale their brand through strategy, creativity, and digital execution.`;

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ id: string; role: 'user' | 'model'; text: string; feedback?: 'up' | 'down' }[]>([
    { id: 'initial-msg', role: 'model', text: 'Hello! I am the Nexora AI Assistant. How can we help you scale your brand today?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Store the chat instance
  const chatRef = useRef<any>(null);
  const aiRef = useRef<any>(null);

  // Initialize chat when opened for the first time
  useEffect(() => {
    if (isOpen && !chatRef.current) {
      try {
        if (!aiRef.current) {
          aiRef.current = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
        }
        chatRef.current = aiRef.current.chats.create({
          model: 'gemini-3.1-flash-lite-preview',
          config: {
            systemInstruction: SYSTEM_INSTRUCTION,
          }
        });
      } catch (error) {
        console.error('Failed to initialize AI:', error);
        setMessages(prev => [...prev, { id: Date.now().toString() + '-error', role: 'model', text: 'AI Assistant is not configured. Please set the GEMINI_API_KEY environment variable.' }]);
      }
    }
  }, [isOpen]);

  // Scroll to bottom when messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim() || !chatRef.current) return;

    const userText = input.trim();
    setInput('');
    setMessages(prev => [...prev, { id: Date.now().toString() + '-user', role: 'user', text: userText }]);
    setIsTyping(true);

    try {
      const response = await chatRef.current.sendMessage({ message: userText });
      setMessages(prev => [...prev, { id: Date.now().toString() + '-model', role: 'model', text: response.text }]);
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages(prev => [...prev, { id: Date.now().toString() + '-error', role: 'model', text: 'I encountered a communication error. Please try again.' }]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleFeedback = (id: string, type: 'up' | 'down') => {
    setMessages(prev => prev.map(msg => 
      msg.id === id ? { ...msg, feedback: msg.feedback === type ? undefined : type } : msg
    ));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <motion.button
        className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-accent text-primary shadow-[0_0_20px_rgba(227,252,83,0.3)] hover:shadow-[0_0_30px_rgba(227,252,83,0.5)] hover:scale-105 transition-all group"
        onClick={() => setIsOpen(true)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: isOpen ? 0 : 1, opacity: isOpen ? 0 : 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative flex items-center justify-center w-6 h-6">
          <Bot size={24} className="group-hover:scale-110 transition-transform duration-300" />
          <motion.div 
            className="absolute -top-1 -right-1 text-primary"
            animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <Sparkles size={12} className="fill-primary" />
          </motion.div>
        </div>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 right-6 z-50 w-[350px] sm:w-[400px] h-[550px] max-h-[80vh] flex flex-col bg-[#050605] border border-white/10 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/5 bg-white/5">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-accent/20 rounded-full text-accent">
                  <Sparkles size={18} />
                </div>
                <div>
                  <h3 className="font-medium text-white text-sm">Nexora AI</h3>
                  <p className="text-xs text-white/50">Digital Concierge</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-colors"
                aria-label="Close Assistant"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg) => (
                <div 
                  key={msg.id} 
                  className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
                >
                  <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${msg.role === 'user' ? 'bg-white/10 text-white' : 'bg-accent text-primary'}`}>
                    {msg.role === 'user' ? <User size={14} /> : <Bot size={14} />}
                  </div>
                  <div className="flex flex-col gap-1 max-w-[75%]">
                    <div 
                      className={`p-3 rounded-2xl text-sm leading-relaxed ${
                        msg.role === 'user' 
                          ? 'bg-white/10 text-white rounded-tr-sm' 
                          : 'bg-accent/10 border border-accent/20 text-white/90 rounded-tl-sm'
                      }`}
                    >
                      {msg.text}
                    </div>
                    {msg.role === 'model' && (
                      <div className="flex items-center gap-1.5 mt-0.5 px-1">
                        <button 
                          onClick={() => handleFeedback(msg.id, 'up')}
                          className={`p-1 rounded hover:bg-white/10 transition-colors ${msg.feedback === 'up' ? 'text-accent' : 'text-white/40'}`}
                          title="Helpful response"
                        >
                          <ThumbsUp size={12} className={msg.feedback === 'up' ? 'fill-accent' : ''} />
                        </button>
                        <button 
                          onClick={() => handleFeedback(msg.id, 'down')}
                          className={`p-1 rounded hover:bg-white/10 transition-colors ${msg.feedback === 'down' ? 'text-red-400' : 'text-white/40'}`}
                          title="Not helpful"
                        >
                          <ThumbsDown size={12} className={msg.feedback === 'down' ? 'fill-red-400' : ''} />
                        </button>
                        {msg.feedback && (
                          <motion.span 
                            initial={{ opacity: 0, x: -5 }} 
                            animate={{ opacity: 1, x: 0 }} 
                            className="text-[10px] text-white/40 ml-1"
                          >
                            Thanks for your feedback!
                          </motion.span>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex gap-3 flex-row">
                  <div className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-accent text-primary">
                    <Bot size={14} />
                  </div>
                  <div className="bg-accent/10 border border-accent/20 p-4 rounded-2xl rounded-tl-sm flex items-center gap-1.5">
                    <motion.div className="w-1.5 h-1.5 rounded-full bg-accent" animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} />
                    <motion.div className="w-1.5 h-1.5 rounded-full bg-accent" animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} />
                    <motion.div className="w-1.5 h-1.5 rounded-full bg-accent" animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-white/5 bg-black/40">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask about our services..."
                  className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-4 pr-12 text-sm text-white placeholder-white/30 focus:outline-none focus:border-accent/50 focus:bg-white/10 transition-all"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || isTyping}
                  className="absolute right-2 p-2 text-accent disabled:text-white/20 disabled:cursor-not-allowed hover:scale-110 transition-transform"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
