import React from 'react';
import { Clock, Sparkles } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Community: React.FC = () => {
  const { t, isRTL } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8">
            <div className="w-24 h-24 bg-gradient-to-r from-pink-400 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Sparkles className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('community')}
            </h1>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-12 max-w-2xl mx-auto">
            <div className="mb-8">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-pink-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {t('comingSoon')}
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                {t('comingSoonDesc')}
              </p>
            </div>

            <div className="bg-gradient-to-r from-pink-50 to-pink-100 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-pink-800 mb-3">
                {t('whatToExpect')}
              </h3>
              <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-pink-700 ${isRTL ? 'text-right' : 'text-left'}`}>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                    <span>{t('supportGroups')}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                    <span>{t('peerSupport')}</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                    <span>{t('safeSpace')}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                    <span>{t('sharedExperiences')}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <p className="text-gray-500 text-sm">
                {t('stayTuned')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;