import React from 'react';
import { Droplets, Mail, Phone, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Droplets className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold">INGRES AI</h3>
                <p className="text-gray-400 text-sm">{t('subtitle')}</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              {t('footerDescription')}
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">{t('contactInfo')}</h4>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>support@ingres.gov.in</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+91-11-2345-6789</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="h-4 w-4" />
                <span>www.ingres.iith.ac.in</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">{t('quickLinks')}</h4>
            <div className="space-y-2 text-sm">
              <a href="#" className="text-gray-300 hover:text-white transition-colors block">
                {t('aboutCGWB')}
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors block">
                {t('dataPolicy')}
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors block">
                {t('documentation')}
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors block">
                {t('support')}
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>
            © 2024 Central Ground Water Board, Ministry of Jal Shakti, Government of India. 
            {t('allRightsReserved')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;