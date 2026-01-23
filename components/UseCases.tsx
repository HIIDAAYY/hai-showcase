import React, { useState } from 'react';
import { 
  Stethoscope, 
  ShoppingBag, 
  Scissors, 
  Utensils, 
  Briefcase 
} from 'lucide-react';
import { UseCase } from '../types';

const useCases: UseCase[] = [
  {
    id: 'clinic',
    title: 'Aesthetic Clinic',
    description: 'Streamline patient bookings and post-treatment care queries.',
    icon: Stethoscope,
    capabilities: [
      'Automated appointment scheduling',
      'Treatment pricing & details',
      'Post-care instructions',
      'Doctor availability checks'
    ]
  },
  {
    id: 'ecommerce',
    title: 'E-commerce',
    description: 'Boost sales with instant product answers and order tracking.',
    icon: ShoppingBag,
    capabilities: [
      'Real-time order tracking',
      'Stock availability check',
      'Return policy FAQs',
      'Payment verification'
    ]
  },
  {
    id: 'salon',
    title: 'Salon & Spa',
    description: 'Manage bookings and membership inquiries effortlessly.',
    icon: Scissors,
    capabilities: [
      'Service menu showcase',
      'Member point checking',
      'Rescheduling assistance',
      'Location guidance'
    ]
  },
  {
    id: 'food',
    title: 'Restaurant',
    description: 'Handle reservations and menu questions during peak hours.',
    icon: Utensils,
    capabilities: [
      'Table reservation',
      'Dietary restriction info',
      'Delivery status tracking',
      'Private event inquiries'
    ]
  },
  {
    id: 'pro',
    title: 'Professional',
    description: 'For lawyers, consultants, and agencies.',
    icon: Briefcase,
    capabilities: [
      'Initial consultation booking',
      'Document requirements',
      'Service scope FAQs',
      'Client onboarding info'
    ]
  }
];

const UseCases: React.FC = () => {
  const [activeCase, setActiveCase] = useState(useCases[0]);

  return (
    <section id="use-cases" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Tailored for Your Industry</h2>
          <p className="text-gray-600">See how HAI adapts to different business needs.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Navigation Tabs */}
          <div className="lg:w-1/3 flex flex-col gap-3">
            {useCases.map((useCase) => (
              <button
                key={useCase.id}
                onClick={() => setActiveCase(useCase)}
                className={`flex items-center gap-4 p-4 rounded-xl transition-all text-left ${
                  activeCase.id === useCase.id
                    ? 'bg-white shadow-md border-l-4 border-yellow-400 text-gray-900'
                    : 'bg-transparent hover:bg-white/50 text-gray-600'
                }`}
              >
                <div className={`p-2 rounded-lg ${activeCase.id === useCase.id ? 'bg-yellow-100' : 'bg-transparent'}`}>
                    <useCase.icon size={24} className={activeCase.id === useCase.id ? 'text-yellow-600' : 'text-gray-400'} />
                </div>
                <span className="font-bold">{useCase.title}</span>
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="lg:w-2/3">
            <div className="bg-white p-8 rounded-2xl shadow-lg h-full border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/10 rounded-bl-full"></div>
              
              <div className="w-16 h-16 bg-yellow-400 text-gray-900 rounded-2xl flex items-center justify-center mb-6 shadow-md shadow-yellow-200">
                <activeCase.icon size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{activeCase.title} Solutions</h3>
              <p className="text-lg text-gray-600 mb-8">{activeCase.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {activeCase.capabilities.map((cap, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-100">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                    <span className="text-gray-700 font-medium">{cap}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;