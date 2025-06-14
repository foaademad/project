import React from 'react';
import { Heart, Award, Users, Shield } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { t, isRTL } = useLanguage();

  const teamMembers = [
    {
      name: 'Rana',
      role: 'Founder & Clinical Director',
      description: 'Licensed therapist with 10+ years of experience in trauma recovery and women\'s mental health.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Reem',
      role: 'Community Manager',
      description: 'Dedicated to building safe spaces and fostering supportive communities for survivors.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Angham',
      role: 'Crisis Counselor',
      description: 'Specialized in crisis intervention and emergency support for women in distress.',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Sara',
      role: 'Wellness Coordinator',
      description: 'Focuses on holistic healing approaches and wellness programs for survivors.',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const values = [
    {
      icon: Heart,
      title: t('compassion'),
      description: t('compassionDesc')
    },
    {
      icon: Shield,
      title: t('safety'),
      description: t('safetyDesc')
    },
    {
      icon: Users,
      title: t('community'),
      description: t('communityDesc')
    },
    {
      icon: Award,
      title: t('excellence'),
      description: t('excellenceDesc')
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 ${isRTL ? 'text-right' : 'text-left'} md:text-center`}>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('aboutTitle')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('aboutDescription')}
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <div className={`text-center ${isRTL ? 'text-right' : 'text-left'} md:text-center`}>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('ourMission')}</h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              {t('missionStatement')}
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className={`text-3xl font-bold text-gray-900 text-center mb-12 ${isRTL ? 'text-right' : 'text-left'} md:text-center`}>
            {t('ourValues')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className={`text-3xl font-bold text-gray-900 text-center mb-12 ${isRTL ? 'text-right' : 'text-left'} md:text-center`}>
            {t('meetOurTeam')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-pink-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-pink-600 text-white rounded-lg p-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">5000+</div>
              <div className="text-lg">{t('womenSupported')}</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-lg">{t('emergencySupport24')}</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-lg">{t('qualifiedTherapists')}</div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className={`text-center ${isRTL ? 'text-right' : 'text-left'} md:text-center`}>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('readyToGetHelp')}</h2>
          <p className="text-lg text-gray-600 mb-8">
            {t('readyToGetHelpDesc')}
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 justify-center ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
            <button className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              {t('getSupportNow')}
            </button>
            <button className="border-2 border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              {t('joinCommunityBtn')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;