import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'hi';

interface Translations {
  [key: string]: {
    en: string;
    hi: string;
  };
}

const translations: Translations = {
  title: {
    en: 'INGRES AI Assistant',
    hi: 'इंग्रेस एआई सहायक'
  },
  subtitle: {
    en: 'India Ground Water Resource Estimation System',
    hi: 'भारत भूजल संसाधन अनुमान प्रणाली'
  },
  dashboard: {
    en: 'Dashboard',
    hi: 'डैशबोर्ड'
  },
  aiAssistant: {
    en: 'AI Assistant',
    hi: 'एआई सहायक'
  },
  totalBlocks: {
    en: 'Total Blocks',
    hi: 'कुल ब्लॉक'
  },
  safeBlocks: {
    en: 'Safe Blocks',
    hi: 'सुरक्षित ब्लॉक'
  },
  criticalBlocks: {
    en: 'Critical Blocks',
    hi: 'गंभीर ब्लॉक'
  },
  overExploited: {
    en: 'Over-Exploited',
    hi: 'अति दोहन'
  },
  groundwaterTrends: {
    en: 'Groundwater Trends (2019-2024)',
    hi: 'भूजल रुझान (2019-2024)'
  },
  regionalData: {
    en: 'Regional Assessment Data',
    hi: 'क्षेत्रीय मूल्यांकन डेटा'
  },
  interactiveMap: {
    en: 'Interactive Groundwater Map',
    hi: 'इंटरैक्टिव भूजल मानचित्र'
  },
  categoryBreakdown: {
    en: 'Category Breakdown',
    hi: 'श्रेणी विवरण'
  },
  recentAssessments: {
    en: 'Recent Assessments',
    hi: 'हाल के मूल्यांकन'
  },
  safe: {
    en: 'Safe',
    hi: 'सुरक्षित'
  },
  semicritical: {
    en: 'Semi-Critical',
    hi: 'अर्ध-गंभीर'
  },
  critical: {
    en: 'Critical',
    hi: 'गंभीर'
  },
  overexploited: {
    en: 'Over-Exploited',
    hi: 'अति दोहन'
  },
  state: {
    en: 'State',
    hi: 'राज्य'
  },
  district: {
    en: 'District',
    hi: 'जिला'
  },
  category: {
    en: 'Category',
    hi: 'श्रेणी'
  },
  lastUpdated: {
    en: 'Last Updated',
    hi: 'अंतिम अपडेट'
  },
  extractionRate: {
    en: 'Extraction Rate',
    hi: 'निकासी दर'
  },
  chatWelcome: {
    en: 'Welcome to INGRES AI Assistant! I can help you access groundwater resource data, historical assessments, and provide insights about India\'s groundwater status. What would you like to know?',
    hi: 'इंग्रेस एआई सहायक में आपका स्वागत है! मैं आपको भूजल संसाधन डेटा, ऐतिहासिक मूल्यांकन तक पहुंच में मदद कर सकता हूं और भारत की भूजल स्थिति के बारे में जानकारी प्रदान कर सकता हूं। आप क्या जानना चाहेंगे?'
  },
  assistantDescription: {
    en: 'Your intelligent groundwater data companion',
    hi: 'आपका बुद्धिमान भूजल डेटा साथी'
  },
  chatPlaceholder: {
    en: 'Ask about groundwater data, trends, or specific regions...',
    hi: 'भूजल डेटा, रुझान, या विशिष्ट क्षेत्रों के बारे में पूछें...'
  },
  quickQuestions: {
    en: 'Quick Questions',
    hi: 'त्वरित प्रश्न'
  },
  quickQ1: {
    en: 'Show groundwater status for Rajasthan',
    hi: 'राजस्थान के लिए भूजल स्थिति दिखाएं'
  },
  quickQ2: {
    en: 'What are the current trends?',
    hi: 'वर्तमान रुझान क्या हैं?'
  },
  quickQ3: {
    en: 'Latest assessment data for 2024',
    hi: '2024 के लिए नवीनतम मूल्यांकन डेटा'
  },
  totalRecharge: {
    en: 'Total Recharge',
    hi: 'कुल रिचार्ज'
  },
  rajasthanInfo: {
    en: 'Rajasthan Groundwater Status (2024):',
    hi: 'राजस्थान भूजल स्थिति (2024):'
  },
  karnalInfo: {
    en: 'Karnal district shows a Safe groundwater status with 45% extraction rate. The district has good recharge potential with 23 blocks assessed as Safe and 2 blocks as Semi-Critical.',
    hi: 'करनाल जिला 45% निकासी दर के साथ सुरक्षित भूजल स्थिति दिखाता है। जिले में अच्छी रिचार्ज क्षमता है जिसमें 23 ब्लॉक सुरक्षित और 2 ब्लॉक अर्ध-गंभीर के रूप में मूल्यांकित हैं।'
  },
  safeBlocksInfo: {
    en: 'Safe blocks are assessment units where groundwater extraction is less than 70% of the annual extractable groundwater. These areas have sustainable groundwater use.',
    hi: 'सुरक्षित ब्लॉक वे मूल्यांकन इकाइयां हैं जहां भूजल निकासी वार्षिक निकासी योग्य भूजल के 70% से कम है। इन क्षेत्रों में टिकाऊ भूजल उपयोग है।'
  },
  criticalBlocksInfo: {
    en: 'Critical blocks have groundwater extraction between 90-100% of annual recharge. These areas require immediate attention and water conservation measures.',
    hi: 'गंभीर ब्लॉकों में वार्षिक रिचार्ज के 90-100% के बीच भूजल निकासी होती है। इन क्षेत्रों में तत्काल ध्यान और जल संरक्षण उपायों की आवश्यकता है।'
  },
  trendInfo: {
    en: 'Analysis shows a declining trend in safe blocks from 65% in 2019 to 55% in 2024. Over-exploited blocks have remained stable at 8-9%. Immediate conservation measures are needed.',
    hi: 'विश्लेषण 2019 में 65% से 2024 में 55% तक सुरक्षित ब्लॉकों में गिरावट का रुझान दिखाता है। अति दोहन ब्लॉक 8-9% पर स्थिर रहे हैं। तत्काल संरक्षण उपायों की आवश्यकता है।'
  },
  helpInfo: {
    en: 'I can help you with:\n• Groundwater status for any state/district\n• Historical assessment data\n• Trend analysis\n• Category definitions\n• Extraction rates and recharge data',
    hi: 'मैं आपकी मदद कर सकता हूं:\n• किसी भी राज्य/जिले के लिए भूजल स्थिति\n• ऐतिहासिक मूल्यांकन डेटा\n• रुझान विश्लेषण\n• श्रेणी परिभाषाएं\n• निकासी दर और रिचार्ज डेटा'
  },
  defaultResponse: {
    en: 'I can help you access groundwater information. Try asking about specific states, districts, or groundwater categories. You can also ask about trends, assessment data, or use the quick questions above.',
    hi: 'मैं आपको भूजल जानकारी तक पहुंचने में मदद कर सकता हूं। विशिष्ट राज्यों, जिलों, या भूजल श्रेणियों के बारे में पूछने का प्रयास करें। आप रुझान, मूल्यांकन डेटा के बारे में भी पूछ सकते हैं या ऊपर दिए गए त्वरित प्रश्नों का उपयोग कर सकते हैं।'
  },
  footerDescription: {
    en: 'Advanced AI-powered groundwater resource management system providing real-time access to India\'s comprehensive groundwater assessment data.',
    hi: 'उन्नत एआई-संचालित भूजल संसाधन प्रबंधन प्रणाली जो भारत के व्यापक भूजल मूल्यांकन डेटा तक रीयल-टाइम पहुंच प्रदान करती है।'
  },
  contactInfo: {
    en: 'Contact Information',
    hi: 'संपर्क जानकारी'
  },
  quickLinks: {
    en: 'Quick Links',
    hi: 'त्वरित लिंक'
  },
  aboutCGWB: {
    en: 'About CGWB',
    hi: 'CGWB के बारे में'
  },
  dataPolicy: {
    en: 'Data Policy',
    hi: 'डेटा नीति'
  },
  documentation: {
    en: 'Documentation',
    hi: 'प्रलेखन'
  },
  support: {
    en: 'Support',
    hi: 'सहायता'
  },
  allRightsReserved: {
    en: 'All rights reserved.',
    hi: 'सभी अधिकार सुरक्षित।'
  }
};

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'hi' : 'en');
  };

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export default LanguageProvider;