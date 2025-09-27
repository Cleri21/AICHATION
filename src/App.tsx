import React, { useState } from 'react';
import INGRESHeader from './components/INGRESHeader';
import INGRESNavigation from './components/INGRESNavigation';
import ChatBotWidget from './components/ChatBotWidget';
import MainContent from './components/MainContent';
import INGRESFooter from './components/INGRESFooter';
import LanguageProvider from './contexts/LanguageContext';
import DataProvider from './contexts/DataContext';
import ChatProvider from './contexts/ChatContext';

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <LanguageProvider>
      <DataProvider>
        <ChatProvider>
          <div className="min-h-screen bg-white">
            <INGRESHeader />
            <INGRESNavigation />
            <MainContent />
            <INGRESFooter />
            
            {/* Floating ChatBot Widget */}
            <ChatBotWidget 
              isOpen={isChatOpen} 
              onToggle={() => setIsChatOpen(!isChatOpen)} 
            />
          </div>
        </ChatProvider>
      </DataProvider>
    </LanguageProvider>
  );
}

export default App;