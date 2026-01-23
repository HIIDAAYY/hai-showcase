import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { CostData } from '../types';

const data: CostData[] = [
  { name: 'Month 1', traditional: 5000, ai: 2000 },
  { name: 'Month 2', traditional: 5500, ai: 2000 },
  { name: 'Month 3', traditional: 5200, ai: 2000 },
  { name: 'Month 4', traditional: 6000, ai: 2000 },
  { name: 'Month 5', traditional: 5800, ai: 2000 },
  { name: 'Month 6', traditional: 6500, ai: 2000 },
];

const ImpactStats: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-orange-500 font-bold tracking-wide uppercase text-sm mb-3">Real-World Impact</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Cut Costs, Not Quality
            </h3>
            <p className="text-gray-600 text-lg mb-8">
              Businesses switching to HAI see an immediate reduction in operational costs while improving customer satisfaction scores through instant availability.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-4 bg-yellow-50 rounded-xl border border-yellow-100">
                    <div className="text-3xl font-bold text-yellow-500 mb-1">80%</div>
                    <div className="text-gray-600 text-sm">Queries Automated</div>
                </div>
                <div className="p-4 bg-orange-50 rounded-xl border border-orange-100">
                    <div className="text-3xl font-bold text-orange-500 mb-1">&lt; 5s</div>
                    <div className="text-gray-600 text-sm">Response Time</div>
                </div>
                <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
                    <div className="text-3xl font-bold text-blue-500 mb-1">24/7</div>
                    <div className="text-gray-600 text-sm">Active Coverage</div>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                    <div className="text-3xl font-bold text-gray-600 mb-1">60%</div>
                    <div className="text-gray-600 text-sm">Cost Reduction</div>
                </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 h-[400px]">
             <h4 className="text-center font-semibold text-gray-700 mb-6">Operational Cost: Human Agents vs AI</h4>
             <ResponsiveContainer width="100%" height="85%">
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#6b7280', fontSize: 12}} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#6b7280', fontSize: 12}} tickFormatter={(value) => `$${value}`} />
                  <Tooltip 
                    cursor={{fill: 'transparent'}}
                    contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'}}
                  />
                  <Legend iconType="circle" wrapperStyle={{paddingTop: '20px'}} />
                  <Bar dataKey="traditional" name="Traditional Support Cost" fill="#d1d5db" radius={[4, 4, 0, 0]} barSize={20} />
                  <Bar dataKey="ai" name="HAI Cost" fill="#fbbf24" radius={[4, 4, 0, 0]} barSize={20} />
                </BarChart>
             </ResponsiveContainer>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ImpactStats;