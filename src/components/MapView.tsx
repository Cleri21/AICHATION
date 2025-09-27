import React, { useState } from 'react';
import { MapPin, Zap, Droplets, TrendingDown, TrendingUp } from 'lucide-react';

const MapView: React.FC = () => {
  const [selectedState, setSelectedState] = useState<string | null>(null);

  const states = [
    { name: 'Rajasthan', x: 25, y: 35, category: 'critical', blocks: 295, color: 'bg-orange-500' },
    { name: 'Punjab', x: 30, y: 15, category: 'overexploited', blocks: 152, color: 'bg-red-500' },
    { name: 'Haryana', x: 32, y: 20, category: 'semicritical', blocks: 119, color: 'bg-yellow-500' },
    { name: 'Gujarat', x: 20, y: 45, category: 'critical', blocks: 226, color: 'bg-orange-500' },
    { name: 'Maharashtra', x: 35, y: 55, category: 'safe', blocks: 355, color: 'bg-green-500' },
    { name: 'Karnataka', x: 35, y: 70, category: 'safe', blocks: 176, color: 'bg-green-500' },
    { name: 'Tamil Nadu', x: 42, y: 80, category: 'semicritical', blocks: 385, color: 'bg-yellow-500' },
    { name: 'Andhra Pradesh', x: 45, y: 70, category: 'safe', blocks: 675, color: 'bg-green-500' },
    { name: 'Odisha', x: 55, y: 55, category: 'safe', blocks: 314, color: 'bg-green-500' },
    { name: 'West Bengal', x: 60, y: 45, category: 'semicritical', blocks: 341, color: 'bg-yellow-500' },
    { name: 'Uttar Pradesh', x: 45, y: 30, category: 'critical', blocks: 820, color: 'bg-orange-500' },
    { name: 'Bihar', x: 55, y: 35, category: 'safe', blocks: 534, color: 'bg-green-500' },
    { name: 'Jharkhand', x: 57, y: 45, category: 'safe', blocks: 260, color: 'bg-green-500' },
    { name: 'Madhya Pradesh', x: 40, y: 45, category: 'safe', blocks: 313, color: 'bg-green-500' },
    { name: 'Chhattisgarh', x: 50, y: 55, category: 'safe', blocks: 146, color: 'bg-green-500' },
  ];

  return (
    <div className="space-y-4">
      {/* Interactive Map */}
      <div className="relative bg-gradient-to-b from-blue-100 to-green-50 rounded-lg p-4 h-80 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-200/30 to-green-200/30"></div>
        
        {/* India outline (simplified) */}
        <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full opacity-20">
          <path
            d="M20 20 L80 20 L85 40 L80 80 L70 85 L30 85 L15 70 L15 30 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-gray-400"
          />
        </svg>

        {/* State markers */}
        {states.map((state, index) => (
          <div
            key={index}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
            style={{ left: `${state.x}%`, top: `${state.y}%` }}
            onMouseEnter={() => setSelectedState(state.name)}
            onMouseLeave={() => setSelectedState(null)}
          >
            <div className={`w-3 h-3 ${state.color} rounded-full animate-pulse shadow-lg`}></div>
            
            {/* Tooltip */}
            {selectedState === state.name && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white p-3 rounded-lg shadow-lg border z-10 min-w-max">
                <h4 className="font-semibold text-gray-800">{state.name}</h4>
                <p className="text-xs text-gray-600">{state.blocks} blocks assessed</p>
                <p className="text-xs">
                  <span className={`inline-block w-2 h-2 ${state.color} rounded-full mr-1`}></span>
                  {state.category.charAt(0).toUpperCase() + state.category.slice(1)}
                </p>
              </div>
            )}
          </div>
        ))}

        {/* Legend */}
        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-md">
          <h4 className="font-semibold text-gray-800 mb-2 text-sm">Groundwater Status</h4>
          <div className="space-y-1 text-xs">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Safe</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <span>Semi-Critical</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <span>Critical</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <span>Over-Exploited</span>
            </div>
          </div>
        </div>

        {/* Statistics overlay */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-md">
          <div className="text-xs space-y-1">
            <div className="flex items-center space-x-2">
              <Droplets className="h-3 w-3 text-blue-600" />
              <span>Total Blocks: 6,881</span>
            </div>
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-3 w-3 text-green-600" />
              <span>Recharge: 437.6 BCM</span>
            </div>
            <div className="flex items-center space-x-2">
              <TrendingDown className="h-3 w-3 text-red-600" />
              <span>Draft: 249.4 BCM</span>
            </div>
          </div>
        </div>
      </div>

      {/* State Selection Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 max-h-32 overflow-y-auto">
        {states.slice(0, 6).map((state, index) => (
          <button
            key={index}
            onClick={() => setSelectedState(selectedState === state.name ? null : state.name)}
            className={`p-2 text-xs rounded-lg border transition-colors ${
              selectedState === state.name
                ? 'bg-blue-50 border-blue-300 text-blue-800'
                : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
            }`}
          >
            <div className="flex items-center space-x-2">
              <div className={`w-2 h-2 ${state.color} rounded-full`}></div>
              <span>{state.name}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default MapView;