import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const INGRESHeader: React.FC = () => {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <header className="bg-white border-b border-gray-200">
      {/* Top Government Bar */}
      <div className="bg-orange-500 text-white py-1">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <span>Government of India</span>
            <span>|</span>
            <span>Ministry of Jal Shakti</span>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="hover:underline"
            >
              {language === 'en' ? 'हिन्दी' : 'English'}
            </button>
            <span>|</span>
            <span>Screen Reader</span>
            <span>|</span>
            <span>Skip to Main Content</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img 
              src="https://images.pexels.com/photos/8828687/pexels-photo-8828687.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop" 
              alt="Government of India Emblem" 
              className="h-16 w-16 object-cover rounded"
            />
            <div>
              <h1 className="text-2xl font-bold text-blue-900">
                INGRES
              </h1>
              <p className="text-sm text-gray-600 max-w-md">
                India Ground Water Resource Estimation System
              </p>
              <p className="text-xs text-gray-500">
                Central Ground Water Board | IIT Hyderabad
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <p className="text-sm font-semibold text-blue-900">
                Ministry of Jal Shakti
              </p>
              <p className="text-xs text-gray-600">
                Department of Water Resources, RD & GR
              </p>
            </div>
            <img 
              src="https://images.pexels.com/photos/8828687/pexels-photo-8828687.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop" 
              alt="Ministry Logo" 
              className="h-12 w-12 object-cover rounded"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default INGRESHeader;