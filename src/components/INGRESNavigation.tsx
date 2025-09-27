import React, { useState } from 'react';
import { ChevronDown, Home, Database, FileText, BarChart3, Users, HelpCircle } from 'lucide-react';

const INGRESNavigation: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navigationItems = [
    {
      label: 'Home',
      icon: Home,
      href: '#',
      dropdown: null
    },
    {
      label: 'Assessment',
      icon: Database,
      href: '#',
      dropdown: [
        'Current Assessment (2023)',
        'Historical Data',
        'Methodology',
        'Assessment Units'
      ]
    },
    {
      label: 'Reports',
      icon: FileText,
      href: '#',
      dropdown: [
        'Annual Reports',
        'State Reports',
        'Technical Reports',
        'Publications'
      ]
    },
    {
      label: 'Data & Maps',
      icon: BarChart3,
      href: '#',
      dropdown: [
        'Interactive Maps',
        'Data Download',
        'GIS Layers',
        'Visualization Tools'
      ]
    },
    {
      label: 'Resources',
      icon: Users,
      href: '#',
      dropdown: [
        'Guidelines',
        'Training Materials',
        'Best Practices',
        'Case Studies'
      ]
    },
    {
      label: 'Help',
      icon: HelpCircle,
      href: '#',
      dropdown: [
        'User Manual',
        'FAQs',
        'Contact Support',
        'Feedback'
      ]
    }
  ];

  return (
    <nav className="bg-blue-900 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <ul className="flex space-x-0">
            {navigationItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <li key={index} className="relative">
                  <button
                    className="flex items-center space-x-2 px-4 py-3 hover:bg-blue-800 transition-colors"
                    onMouseEnter={() => item.dropdown && setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <IconComponent className="h-4 w-4" />
                    <span className="text-sm font-medium">{item.label}</span>
                    {item.dropdown && <ChevronDown className="h-3 w-3" />}
                  </button>
                  
                  {item.dropdown && activeDropdown === item.label && (
                    <div 
                      className="absolute top-full left-0 bg-white text-gray-800 shadow-lg rounded-b-lg min-w-48 z-50"
                      onMouseEnter={() => setActiveDropdown(item.label)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      {item.dropdown.map((subItem, subIndex) => (
                        <a
                          key={subIndex}
                          href="#"
                          className="block px-4 py-2 text-sm hover:bg-gray-100 border-b border-gray-100 last:border-b-0"
                        >
                          {subItem}
                        </a>
                      ))}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
          
          <div className="flex items-center space-x-4">
            <span className="text-sm">Last Updated: Dec 2024</span>
            <div className="h-4 w-px bg-blue-700"></div>
            <span className="text-sm">Assessment Year: 2023</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default INGRESNavigation;