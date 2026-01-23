import React from 'react';
import { 
  Clock, 
  MessageSquare, 
  Cpu, 
  Zap, 
  Globe2, 
  Smile, 
  Smartphone, 
  LayoutDashboard 
} from 'lucide-react';
import { Feature } from '../types';

const features: Feature[] = [
  {
    title: "Automated Customer Support 24/7",
    description: "Instant responses anytime, day or night. Never leave a customer waiting.",
    icon: Clock
  },
  {
    title: "Handle Multiple Inquiries Simultaneously",
    description: "Handle hundreds of inquiries simultaneously with zero queue time.",
    icon: MessageSquare
  },
  {
    title: "Intelligent Query Routing",
    description: "Smartly distinguishes simple FAQs from complex issues requiring human empathy.",
    icon: Cpu
  },
  {
    title: "Real-Time Business Operations",
    description: "Live connection to your database for order tracking and stock checking.",
    icon: Zap
  },
  {
    title: "Multi-Language Support",
    description: "Automatic language detection and translation for seamless global support.",
    icon: Globe2
  },
  {
    title: "Mood Detection & Smart Response",
    description: "Analyzes sentiment to adjust tone and prioritize frustrated customers.",
    icon: Smile
  },
  {
    title: "WhatsApp Integration",
    description: "Meet customers where they are with full WhatsApp API integration.",
    icon: Smartphone
  },
  {
    title: "Admin Dashboard for Human Agents",
    description: "Comprehensive insights, conversation history, and handoff controls.",
    icon: LayoutDashboard
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-white relative overflow-hidden scroll-mt-24">
      {/* Decorative dots */}
      <div className="absolute top-10 right-10 w-24 h-24 bg-yellow-100 rounded-full opacity-50 blur-xl"></div>
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-orange-100 rounded-full opacity-50 blur-xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-orange-500 font-bold tracking-wide uppercase text-sm mb-3">Capabilities</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Everything You Need to Automate Support
          </h3>
          <p className="text-gray-600 text-lg">
            Empower your business with enterprise-grade AI that handles the repetitive work, so your team can focus on what matters.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-6 bg-yellow-50/50 rounded-2xl hover:bg-yellow-50 hover:shadow-xl hover:shadow-yellow-100 transition-all duration-300 border border-yellow-100 group"
            >
              <div className="w-12 h-12 bg-yellow-400 text-gray-900 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform shadow-md shadow-yellow-200">
                <feature.icon size={24} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
              <p className="text-gray-600 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;