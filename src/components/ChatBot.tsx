import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, MessageCircle, TrendingUp, MapPin, Calendar } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useData } from '../contexts/DataContext';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
  data?: any;
}

const ChatBot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();
  const { getGroundwaterData, getStateData } = useData();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Welcome message
    const welcomeMessage: Message = {
      id: '1',
      text: t('chatWelcome'),
      isBot: true,
      timestamp: new Date(),
    };
    setMessages([welcomeMessage]);
  }, [t]);

  const simulateTyping = () => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
    }, 1500);
  };

  const processQuery = (query: string): string => {
    const lowerQuery = query.toLowerCase();
    
    if (lowerQuery.includes('rajasthan') || lowerQuery.includes('राजस्थान')) {
      const data = getStateData('Rajasthan');
      return `${t('rajasthanInfo')}\n\n• ${t('safeBlocks')}: ${data.safeBlocks}\n• ${t('criticalBlocks')}: ${data.criticalBlocks}\n• ${t('overExploited')}: ${data.overExploited}\n• ${t('totalRecharge')}: ${data.totalRecharge} MCM`;
    }
    
    if (lowerQuery.includes('karnal') || lowerQuery.includes('कर्नाल')) {
      return t('karnalInfo');
    }
    
    if (lowerQuery.includes('safe') || lowerQuery.includes('सुरक्षित')) {
      return t('safeBlocksInfo');
    }
    
    if (lowerQuery.includes('critical') || lowerQuery.includes('गंभीर')) {
      return t('criticalBlocksInfo');
    }
    
    if (lowerQuery.includes('trend') || lowerQuery.includes('प्रवृत्ति')) {
      return t('trendInfo');
    }
    
    if (lowerQuery.includes('help') || lowerQuery.includes('सहायता')) {
      return t('helpInfo');
    }
    
    // Default response with suggestions
    return t('defaultResponse');
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    simulateTyping();

    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: processQuery(inputText),
        isBot: true,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1500);
  };

  const quickQuestions = [
    { text: t('quickQ1'), icon: MapPin },
    { text: t('quickQ2'), icon: TrendingUp },
    { text: t('quickQ3'), icon: Calendar },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-teal-600 p-6 text-white">
          <div className="flex items-center space-x-3">
            <Bot className="h-8 w-8" />
            <div>
              <h2 className="text-xl font-bold">{t('aiAssistant')}</h2>
              <p className="text-blue-100">{t('assistantDescription')}</p>
            </div>
          </div>
        </div>

        <div className="h-96 overflow-y-auto p-6 space-y-4 bg-gray-50">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
            >
              <div
                className={`max-w-xs lg:max-w-md px-4 py-3 rounded-lg shadow-sm ${
                  message.isBot
                    ? 'bg-white text-gray-800 border border-gray-200'
                    : 'bg-blue-600 text-white'
                }`}
              >
                <div className="flex items-start space-x-2">
                  {message.isBot && (
                    <Bot className="h-5 w-5 mt-1 text-blue-600 flex-shrink-0" />
                  )}
                  <div className="flex-1">
                    <p className="whitespace-pre-line">{message.text}</p>
                    <span className="text-xs opacity-70 mt-1 block">
                      {message.timestamp.toLocaleTimeString()}
                    </span>
                  </div>
                  {!message.isBot && (
                    <User className="h-5 w-5 mt-1 text-white flex-shrink-0" />
                  )}
                </div>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-white text-gray-800 border border-gray-200 px-4 py-3 rounded-lg shadow-sm max-w-xs">
                <div className="flex items-center space-x-2">
                  <Bot className="h-5 w-5 text-blue-600" />
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="p-6 bg-white border-t">
          <div className="mb-4">
            <p className="text-sm text-gray-600 mb-3">{t('quickQuestions')}:</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              {quickQuestions.map((question, index) => {
                const IconComponent = question.icon;
                return (
                  <button
                    key={index}
                    onClick={() => setInputText(question.text)}
                    className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-left"
                  >
                    <IconComponent className="h-4 w-4 text-blue-600" />
                    <span className="text-sm">{question.text}</span>
                  </button>
                );
              })}
            </div>
          </div>
          
          <div className="flex space-x-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder={t('chatPlaceholder')}
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              onClick={handleSendMessage}
              disabled={!inputText.trim() || isTyping}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Send className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;