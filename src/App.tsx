import React, { useState } from 'react';
import Header from './components/Header';
import ChatBot from './components/ChatBot';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import LanguageProvider from './contexts/LanguageContext';
import DataProvider from './contexts/DataContext';

function App() {
  const [activeView, setActiveView] = useState<'dashboard' | 'chat'>('dashboard');

  return (
    <LanguageProvider>
      <DataProvider>
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50">
          <Header activeView={activeView} setActiveView={setActiveView} />
          <main className="container mx-auto px-4 py-8">
            {activeView === 'dashboard' ? <Dashboard /> : <ChatBot />}
          </main>
          <Footer />
        </div>
      </DataProvider>
    </LanguageProvider>
  );
}

export default App;