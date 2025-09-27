import React from 'react';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

const INGRESFooter: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">INGRES Portal</h3>
            <p className="text-gray-300 text-sm mb-4">
              India Ground Water Resource Estimation System - A collaborative initiative 
              by CGWB and IIT Hyderabad for comprehensive groundwater assessment.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <MapPin className="h-4 w-4" />
              <span>Central Ground Water Board, New Delhi</span>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Assessment Methodology</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Data Download</a></li>
              <li><a href="#" className="hover:text-white transition-colors">State Reports</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Technical Guidelines</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Training Materials</a></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">User Manual</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Support</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Feedback Form</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Information</h4>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>ingres@cgwb.gov.in</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+91-11-2686-2647</span>
              </div>
              <div className="flex items-center space-x-2">
                <ExternalLink className="h-4 w-4" />
                <a href="https://cgwb.gov.in" className="hover:text-white transition-colors">
                  cgwb.gov.in
                </a>
              </div>
            </div>
            
            <div className="mt-6">
              <h5 className="font-semibold mb-2">Technical Partner</h5>
              <p className="text-sm text-gray-300">
                Indian Institute of Technology, Hyderabad
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>
              © 2024 Central Ground Water Board, Ministry of Jal Shakti, Government of India. 
              All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
              <a href="#" className="hover:text-white transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default INGRESFooter;