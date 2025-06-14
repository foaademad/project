import React, { useState, useEffect } from 'react';
import { Send, Bot, User } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Chat: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const [messages, setMessages] = useState<any[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const savedMessages = localStorage.getItem('chatMessages');
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    } else {
      // Initialize with welcome message
      const welcomeMessage = {
        id: '1',
        type: 'bot',
        content: "Hello! I'm here to provide support and information. How can I help you today?",
        timestamp: new Date().toISOString()
      };
      setMessages([welcomeMessage]);
      localStorage.setItem('chatMessages', JSON.stringify([welcomeMessage]));
    }
  }, []);

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return "Hello! I'm here to support you. How are you feeling today?";
    }
    
    if (message.includes('help') || message.includes('support')) {
      return "I'm here to help. You can talk to me about anything. If you need immediate professional help, please consider contacting our therapists or using the SOS button for emergency support.";
    }
    
    if (message.includes('scared') || message.includes('afraid') || message.includes('fear')) {
      return "I understand you're feeling scared. It's completely normal to feel this way. Remember that you're safe here, and there are people who want to help you. Would you like to talk about what's making you feel scared?";
    }
    
    if (message.includes('sad') || message.includes('depressed') || message.includes('down')) {
      return "I'm sorry you're feeling sad. Your feelings are valid, and it's okay to not be okay sometimes. Talking about it can help. Have you considered speaking with one of our professional therapists?";
    }
    
    if (message.includes('emergency') || message.includes('crisis') || message.includes('danger')) {
      return "If you're in immediate danger, please call emergency services (911) or use the SOS button. If you need to talk to someone right now, our crisis hotline is available 24/7. Your safety is the most important thing.";
    }
    
    if (message.includes('therapist') || message.includes('counselor') || message.includes('therapy')) {
      return "Our platform has qualified therapists who specialize in trauma and harassment recovery. You can browse their profiles and book appointments through the Therapists page. They offer both individual and group sessions.";
    }
    
    if (message.includes('community') || message.includes('group') || message.includes('people')) {
      return "Our Community section has support groups where you can connect with others who understand what you're going through. It's a safe space to share experiences and find mutual support.";
    }
    
    if (message.includes('thank') || message.includes('thanks')) {
      return "You're very welcome! I'm glad I could help. Remember, you're not alone in this journey. Is there anything else you'd like to talk about?";
    }
    
    if (message.includes('bye') || message.includes('goodbye')) {
      return "Take care of yourself! Remember, I'm here whenever you need support, and don't hesitate to reach out to our professional resources if you need more help. You're stronger than you know.";
    }
    
    // Default responses for unrecognized input
    const defaultResponses = [
      "I understand. Can you tell me more about how you're feeling?",
      "Thank you for sharing that with me. You're being very brave by talking about this.",
      "I'm here to listen. Please know that your feelings are valid and you deserve support.",
      "That sounds difficult. Remember that healing takes time, and it's okay to take things one step at a time.",
      "I want you to know that you're not alone. Many people have experienced similar feelings, and recovery is possible."
    ];
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  const handleSendMessage = async () => {
    if (!newMessage.trim()) return;

    const userMessage = {
      id: Date.now().toString(),
      type: 'user',
      content: newMessage,
      timestamp: new Date().toISOString()
    };

    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setNewMessage('');
    setIsTyping(true);

    // Simulate bot typing delay
    setTimeout(() => {
      const botResponse = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: getBotResponse(newMessage),
        timestamp: new Date().toISOString()
      };

      const finalMessages = [...updatedMessages, botResponse];
      setMessages(finalMessages);
      localStorage.setItem('chatMessages', JSON.stringify(finalMessages));
      setIsTyping(false);
    }, 1000 + Math.random() * 2000); // Random delay between 1-3 seconds
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-8 ${isRTL ? 'text-right' : 'text-left'} md:text-center`}>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('aiSupportChat')}
          </h1>
          <p className="text-xl text-gray-600">
            {t('aiSupportChatDesc')}
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg">
          {/* Chat Header */}
          <div className="p-4 border-b border-gray-200 bg-pink-50 rounded-t-lg">
            <div className={`flex items-center space-x-3 ${isRTL ? 'space-x-reverse' : ''}`}>
              <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{t('supportAssistant')}</h3>
                <p className="text-sm text-gray-600">{t('onlineToHelp')}</p>
              </div>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="h-96 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.type === 'user' ? (isRTL ? 'justify-start' : 'justify-end') : (isRTL ? 'justify-end' : 'justify-start')}`}
              >
                <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                  message.type === 'user'
                    ? 'bg-pink-600 text-white'
                    : 'bg-gray-100 text-gray-900'
                }`}>
                  <div className={`flex items-start space-x-2 ${isRTL ? 'space-x-reverse' : ''}`}>
                    {message.type === 'bot' && (
                      <Bot className="w-4 h-4 mt-0.5 text-pink-600" />
                    )}
                    {message.type === 'user' && (
                      <User className="w-4 h-4 mt-0.5 text-white" />
                    )}
                    <div>
                      <p className="text-sm">{message.content}</p>
                      <p className={`text-xs mt-1 ${
                        message.type === 'user' ? 'text-pink-200' : 'text-gray-500'
                      }`}>
                        {new Date(message.timestamp).toLocaleTimeString()}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className={`flex ${isRTL ? 'justify-end' : 'justify-start'}`}>
                <div className="max-w-xs lg:max-w-md px-4 py-2 rounded-lg bg-gray-100 text-gray-900">
                  <div className={`flex items-center space-x-2 ${isRTL ? 'space-x-reverse' : ''}`}>
                    <Bot className="w-4 h-4 text-pink-600" />
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Chat Input */}
          <div className="p-4 border-t border-gray-200">
            <div className={`flex space-x-2 ${isRTL ? 'space-x-reverse' : ''}`}>
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder={t('typeMessage')}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                disabled={isTyping}
              />
              <button
                onClick={handleSendMessage}
                disabled={isTyping || !newMessage.trim()}
                className="bg-pink-600 hover:bg-pink-700 disabled:bg-gray-300 text-white px-4 py-2 rounded-lg transition-colors duration-200"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <h3 className="font-semibold text-yellow-800 mb-2">{t('importantNotice')}</h3>
          <p className="text-yellow-700 text-sm">
            {t('aiDisclaimer')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Chat;