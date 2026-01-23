import React, { useState, useEffect, useRef } from 'react';
import { Send, User, Bot, Loader2, Sparkles, BookOpen, Link as LinkIcon, Menu } from 'lucide-react';
import { ChatMessage } from '../types';
import { initializeChat, sendMessageToGemini } from '../services/geminiService';

const DemoChat: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Removed the auto-initialization useEffect to show the "Welcome" screen first.
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const responseText = await sendMessageToGemini(input);

    const botMsg: ChatMessage = {
      id: (Date.now() + 1).toString(),
      role: 'model',
      text: responseText,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, botMsg]);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex flex-col h-[650px] w-full max-w-5xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden font-sans text-gray-800">
      
      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto relative scrollbar-hide">
        {messages.length === 0 ? (
          /* Empty State / Welcome Screen */
          <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center animate-fade-in-up">
            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-6 shadow-lg">
               <span className="text-white font-bold text-xl">HAI</span>
            </div>
            
            <h2 className="text-3xl font-semibold text-gray-900 mb-12">Here's how I can help</h2>
            
            <div className="grid gap-6 max-w-lg w-full text-left">
              <div className="flex gap-4 items-start p-2">
                 <LinkIcon className="text-gray-400 mt-1" size={20} />
                 <div>
                    <p className="font-medium text-gray-700">Need guidance?</p>
                    <p className="text-sm text-gray-500">I'll help navigate tasks using internal resources.</p>
                 </div>
              </div>
              <div className="flex gap-4 items-start p-2">
                 <Sparkles className="text-gray-400 mt-1" size={20} />
                 <div>
                    <p className="font-medium text-gray-700">I'm a whiz at finding information!</p>
                    <p className="text-sm text-gray-500">I can dig through your knowledge base (Orders, Treatments, Policies).</p>
                 </div>
              </div>
              <div className="flex gap-4 items-start p-2">
                 <BookOpen className="text-gray-400 mt-1" size={20} />
                 <div>
                    <p className="font-medium text-gray-700">I'm always learning!</p>
                    <p className="text-sm text-gray-500">The more you share, the better I can assist you.</p>
                 </div>
              </div>
            </div>
          </div>
        ) : (
          /* Chat History */
          <div className="p-6 space-y-6 max-w-3xl mx-auto pt-10">
             {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-4 ${
                  msg.role === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                {msg.role === 'model' && (
                  <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-xs font-bold">AI</span>
                  </div>
                )}
                
                <div
                  className={`max-w-[80%] rounded-2xl p-4 text-[15px] leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-gray-100 text-gray-900'
                      : 'bg-transparent text-gray-800'
                  }`}
                >
                  {msg.text}
                </div>

                {msg.role === 'user' && (
                   <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center flex-shrink-0 mt-1">
                     <User size={16} />
                   </div>
                )}
              </div>
            ))}
            {isLoading && (
               <div className="flex gap-4 justify-start">
                  <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-xs font-bold">AI</span>
                  </div>
                  <div className="flex items-center gap-1 pl-2">
                    <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce delay-100" />
                    <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce delay-200" />
                  </div>
               </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="p-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="border border-gray-200 rounded-xl p-3 shadow-sm focus-within:ring-2 focus-within:ring-purple-100 focus-within:border-purple-300 transition-all bg-white">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Type your message here..."
              className="w-full max-h-32 p-1 bg-transparent border-none focus:ring-0 text-gray-900 placeholder-gray-400 resize-none text-base font-normal leading-6"
              rows={input.length > 50 ? 2 : 1}
              style={{ minHeight: '44px' }}
            />
            
            <div className="flex justify-between items-center mt-2 pt-2">
               <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-400 font-medium">Powered by HAI</span>
               </div>
               
               <button
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="flex items-center gap-2 px-4 py-2 bg-[#8b5cf6] hover:bg-[#7c3aed] text-white rounded-lg text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Send Message
                {isLoading ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
              </button>
            </div>
          </div>
          
          {/* Suggested Prompts - Only show if chat is empty */}
          {messages.length === 0 && (
             <div className="flex gap-2 mt-4 justify-center">
                <button onClick={() => setInput("Track order #ORD123")} className="text-xs text-gray-500 hover:text-purple-600 border border-gray-200 rounded-full px-3 py-1 hover:border-purple-300 transition-colors">#ORD123</button>
                <button onClick={() => setInput("What treatments are available?")} className="text-xs text-gray-500 hover:text-purple-600 border border-gray-200 rounded-full px-3 py-1 hover:border-purple-300 transition-colors">Treatments</button>
                <button onClick={() => setInput("I have a complaint!")} className="text-xs text-gray-500 hover:text-purple-600 border border-gray-200 rounded-full px-3 py-1 hover:border-purple-300 transition-colors">Mood Test</button>
             </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DemoChat;