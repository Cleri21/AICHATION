import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
  data?: any;
}

interface ChatContextType {
  messages: Message[];
  sendMessage: (text: string) => void;
  isTyping: boolean;
  clearChat: () => void;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

interface ChatProviderProps {
  children: ReactNode;
}

const ChatProvider: React.FC<ChatProviderProps> = ({ children }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  const processQuery = (query: string): string => {
    const lowerQuery = query.toLowerCase();
    
    // Enhanced AI-like responses for INGRES-specific queries
    if (lowerQuery.includes('rajasthan') || lowerQuery.includes('राजस्थान')) {
      return `**Rajasthan Groundwater Assessment (2023)**

📊 **Current Status:**
• Total Assessment Units: 295 blocks
• Safe: 180 blocks (61%)
• Semi-Critical: 55 blocks (19%)
• Critical: 45 blocks (15%)
• Over-Exploited: 15 blocks (5%)

💧 **Key Metrics:**
• Annual Recharge: 12.8 BCM
• Total Extraction: 9.4 BCM
• Stage of Extraction: 73.4%

🎯 **Recommendations:**
• Implement water conservation measures in critical blocks
• Promote rainwater harvesting
• Monitor extraction in semi-critical areas

Would you like detailed data for any specific district in Rajasthan?`;
    }
    
    if (lowerQuery.includes('latest assessment') || lowerQuery.includes('2023') || lowerQuery.includes('current')) {
      return `**Latest Groundwater Assessment (2023)**

🇮🇳 **National Overview:**
• Total Assessment Units: 6,881 blocks
• Assessment Period: April 2022 - March 2023
• Coverage: All states and union territories

📈 **Category Distribution:**
• Safe: 3,785 blocks (55%)
• Semi-Critical: 1,375 blocks (20%)
• Critical: 1,101 blocks (16%)
• Over-Exploited: 620 blocks (9%)

🔍 **Key Findings:**
• Slight improvement in Punjab and Haryana
• Continued stress in western Rajasthan
• Good recharge in southern states

Access detailed state-wise reports through the Reports section.`;
    }
    
    if (lowerQuery.includes('category') || lowerQuery.includes('classification') || lowerQuery.includes('explain')) {
      return `**Groundwater Assessment Categories**

🟢 **Safe (< 70% extraction)**
Units where groundwater extraction is less than 70% of annual extractable resources. Sustainable for future use.

🟡 **Semi-Critical (70-90% extraction)**
Units with extraction between 70-90%. Requires careful monitoring and management.

🟠 **Critical (90-100% extraction)**
Units with extraction between 90-100%. Immediate attention needed for conservation measures.

🔴 **Over-Exploited (> 100% extraction)**
Units where extraction exceeds annual recharge. Requires urgent intervention and regulation.

📋 **Assessment Methodology:**
Based on dynamic groundwater resource assessment using GIS and remote sensing data, following CGWB guidelines.`;
    }
    
    if (lowerQuery.includes('download') || lowerQuery.includes('report') || lowerQuery.includes('data')) {
      return `**Data Download & Reports**

📄 **Available Downloads:**
• State-wise Assessment Reports (PDF)
• Block-wise Data (Excel/CSV)
• GIS Shapefiles and Layers
• Historical Assessment Data (2017-2023)

🗂️ **Report Categories:**
• Annual National Reports
• State Assessment Reports
• Technical Methodology Documents
• Training and Guidelines

📊 **Data Formats:**
• Tabular data: Excel, CSV
• Spatial data: Shapefile, KML, GeoJSON
• Reports: PDF format

**How to Download:**
1. Navigate to 'Data & Maps' section
2. Select required data type
3. Choose format and time period
4. Click download (registration may be required)

Need help finding specific data? Let me know what you're looking for!`;
    }
    
    if (lowerQuery.includes('punjab') || lowerQuery.includes('पंजाब')) {
      return `**Punjab Groundwater Status (2023)**

⚠️ **Critical Situation:**
• Total Blocks: 152
• Over-Exploited: 76 blocks (50%)
• Critical: 42 blocks (28%)
• Semi-Critical: 24 blocks (16%)
• Safe: 10 blocks (6%)

📉 **Key Concerns:**
• Highest stage of extraction in India (142%)
• Declining water table (0.5-1.0m annually)
• Rice-wheat cropping pattern impact

🎯 **Interventions:**
• Crop diversification programs
• Micro-irrigation promotion
• Groundwater regulation enforcement

Punjab requires immediate and sustained intervention for groundwater sustainability.`;
    }
    
    if (lowerQuery.includes('help') || lowerQuery.includes('support') || lowerQuery.includes('how to')) {
      return `**INGRES Portal Help**

🤖 **I can help you with:**
• Groundwater assessment data for any state/district
• Latest assessment results and historical trends
• Understanding assessment categories and methodology
• Downloading reports and data
• Navigation guidance for the portal

💡 **Quick Commands:**
• "Show data for [state name]"
• "Latest assessment results"
• "Explain groundwater categories"
• "How to download reports"
• "Punjab groundwater status"

📞 **Additional Support:**
• User Manual: Available in Help section
• Technical Support: ingres@cgwb.gov.in
• Phone: +91-11-2686-2647

What specific information are you looking for?`;
    }
    
    // Default response with suggestions
    return `I can help you access INGRES groundwater data and information. Here are some things you can ask:

🔍 **Try asking:**
• "Show groundwater status for [state name]"
• "What is the latest assessment data?"
• "Explain groundwater categories"
• "How to download assessment reports?"
• "Punjab groundwater situation"

📊 **Available Information:**
• State and district-wise assessment data
• Historical trends and analysis
• Assessment methodology and guidelines
• Download links for reports and data

What would you like to know about India's groundwater resources?`;
  };

  const sendMessage = (text: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    // Simulate AI processing time
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: processQuery(text),
        isBot: true,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500 + Math.random() * 1000); // Random delay between 1.5-2.5 seconds
  };

  const clearChat = () => {
    setMessages([]);
  };

  return (
    <ChatContext.Provider value={{
      messages,
      sendMessage,
      isTyping,
      clearChat
    }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = (): ChatContextType => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
};

export default ChatProvider;