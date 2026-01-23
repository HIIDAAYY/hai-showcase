import React from 'react';
import { Bot, Mail, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 border-t-4 border-yellow-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-yellow-400 rounded-lg text-gray-900">
                 <Bot size={24} />
              </div>
              <span className="text-2xl font-bold text-yellow-400 tracking-tight">HAI</span>
            </div>
            <p className="text-gray-400 max-w-sm">
              Revolutionizing customer service with intelligent, friendly, and always-on AI solutions.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-yellow-400">Product</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#features" className="hover:text-yellow-400 transition-colors">Features</a></li>
              <li><a href="#use-cases" className="hover:text-yellow-400 transition-colors">Use Cases</a></li>
              <li><a href="#demo" className="hover:text-yellow-400 transition-colors">Live Demo</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-yellow-400">Contact</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2"><Mail size={16} /> hello@hai.ai</li>
              <li className="flex gap-4 mt-4">
                <a href="#" className="hover:text-yellow-400 transition-colors"><Twitter size={20} /></a>
                <a href="#" className="hover:text-yellow-400 transition-colors"><Linkedin size={20} /></a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; 2024 HAI. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;