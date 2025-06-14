import React, { useState } from 'react';
import { Phone, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const SOSButton: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const { t, isRTL } = useLanguage();

  const handleSOSClick = () => {
    setShowModal(true);
  };

  const handleEmergencyCall = () => {
    // In a real application, this would trigger an actual call
    window.open('tel:+1234567890', '_self');
    setShowModal(false);
  };

  return (
    <>
      <button
        onClick={handleSOSClick}
        className={`fixed bottom-6 w-16 h-16 bg-red-600 hover:bg-red-700 text-white rounded-full shadow-lg flex items-center justify-center z-50 transition-all duration-200 hover:scale-110 animate-pulse ${
          isRTL ? 'left-6' : 'right-6'
        }`}
      >
        <span className="font-bold text-lg">SOS</span>
      </button>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <div className={`flex justify-between items-center mb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <h2 className="text-xl font-bold text-red-600">{t('emergencySupport')}</h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="space-y-4">
              <p className="text-gray-700">
                {t('emergencyDesc')}
              </p>
              
              <div className="space-y-2">
                <button
                  onClick={handleEmergencyCall}
                  className={`w-full bg-red-600 hover:bg-red-700 text-white py-3 px-4 rounded-lg flex items-center justify-center space-x-2 transition-colors duration-200 ${
                    isRTL ? 'space-x-reverse' : ''
                  }`}
                >
                  <Phone className="w-5 h-5" />
                  <span>{t('callWomenHotline')}</span>
                </button>
                
                <button
                  onClick={() => window.open('tel:911', '_self')}
                  className={`w-full bg-orange-600 hover:bg-orange-700 text-white py-3 px-4 rounded-lg flex items-center justify-center space-x-2 transition-colors duration-200 ${
                    isRTL ? 'space-x-reverse' : ''
                  }`}
                >
                  <Phone className="w-5 h-5" />
                  <span>{t('callEmergency')}</span>
                </button>
              </div>
              
              <div className="bg-pink-50 p-4 rounded-lg">
                <h3 className="font-semibold text-pink-800 mb-2">{t('quickTips')}</h3>
                <ul className={`text-sm text-pink-700 space-y-1 ${isRTL ? 'text-right' : 'text-left'}`}>
                  <li>{t('trustInstincts')}</li>
                  <li>{t('moveToSafety')}</li>
                  <li>{t('tellSomeone')}</li>
                  <li>{t('documentIncidents')}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SOSButton;