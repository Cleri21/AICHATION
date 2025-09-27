import React from 'react';
import { MapPin, TrendingUp, Database, FileText, Users, AlertCircle } from 'lucide-react';

const MainContent: React.FC = () => {
  const quickStats = [
    { label: 'Total Assessment Units', value: '6,881', icon: Database, color: 'bg-blue-100 text-blue-600' },
    { label: 'Safe Units', value: '3,785', icon: Users, color: 'bg-green-100 text-green-600' },
    { label: 'Critical Units', value: '1,101', icon: AlertCircle, color: 'bg-orange-100 text-orange-600' },
    { label: 'Over-Exploited Units', value: '620', icon: TrendingUp, color: 'bg-red-100 text-red-600' }
  ];

  const recentUpdates = [
    {
      title: 'Dynamic Ground Water Resources Assessment 2023',
      date: 'December 15, 2024',
      description: 'Latest assessment results for all states and union territories'
    },
    {
      title: 'Rajasthan State Report Published',
      date: 'December 10, 2024',
      description: 'Comprehensive groundwater assessment report for Rajasthan'
    },
    {
      title: 'New GIS Layers Added',
      date: 'December 5, 2024',
      description: 'Enhanced mapping capabilities with additional data layers'
    }
  ];

  return (
    <main className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg p-8 mb-8">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold mb-4">
            Welcome to INGRES Portal
          </h2>
          <p className="text-lg mb-6 text-blue-100">
            Access comprehensive groundwater resource assessment data for India. 
            Get real-time insights, historical trends, and detailed analysis for informed decision-making.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              View Latest Assessment
            </button>
            <button className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Download Data
            </button>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {quickStats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className={`p-3 rounded-lg ${stat.color}`}>
                  <IconComponent className="h-6 w-6" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Interactive Map Section */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-md border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-800">Interactive Groundwater Map</h3>
            <MapPin className="h-5 w-5 text-blue-600" />
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-lg h-96 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-200/30 to-green-200/30"></div>
            
            {/* Simplified India Map Visualization */}
            <div className="relative z-10 text-center">
              <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  National Groundwater Assessment
                </h4>
                <p className="text-gray-600 mb-4">
                  Click on states to view detailed assessment data
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span>Safe: 55%</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <span>Semi-Critical: 20%</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    <span>Critical: 16%</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span>Over-Exploited: 9%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Updates */}
        <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-800">Recent Updates</h3>
            <FileText className="h-5 w-5 text-blue-600" />
          </div>
          
          <div className="space-y-4">
            {recentUpdates.map((update, index) => (
              <div key={index} className="border-l-4 border-blue-500 pl-4 py-2">
                <h4 className="font-semibold text-gray-800 text-sm">{update.title}</h4>
                <p className="text-xs text-gray-500 mb-1">{update.date}</p>
                <p className="text-sm text-gray-600">{update.description}</p>
              </div>
            ))}
          </div>
          
          <button className="w-full mt-6 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
            View All Updates
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="mt-12 bg-gray-50 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
          INGRES Portal Features
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Database className="h-8 w-8 text-blue-600" />
            </div>
            <h4 className="font-semibold text-gray-800 mb-2">Comprehensive Database</h4>
            <p className="text-gray-600 text-sm">
              Access to complete groundwater assessment data for all states and union territories
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-8 w-8 text-green-600" />
            </div>
            <h4 className="font-semibold text-gray-800 mb-2">Interactive Mapping</h4>
            <p className="text-gray-600 text-sm">
              GIS-based visualization tools for spatial analysis and data exploration
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="h-8 w-8 text-orange-600" />
            </div>
            <h4 className="font-semibold text-gray-800 mb-2">Trend Analysis</h4>
            <p className="text-gray-600 text-sm">
              Historical data analysis and trend identification for informed planning
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainContent;