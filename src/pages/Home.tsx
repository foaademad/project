import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Shield, Users, MessageCircle, Phone, Calendar, Star, CheckCircle, Clock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Home: React.FC = () => {
  const { t, isRTL } = useLanguage();

  const features = [
    {
      icon: Heart,
      title: t('professionalTherapy'),
      description: t('professionalTherapyDesc')
    },
    {
      icon: Users,
      title: t('communitySupport'),
      description: t('communitySupportDesc')
    },
    {
      icon: Shield,
      title: t('emergencySupport'),
      description: t('emergencySupportDesc')
    },
    {
      icon: MessageCircle,
      title: t('aiChatSupport'),
      description: t('aiChatSupportDesc')
    },
    {
      icon: Calendar,
      title: t('easyBooking'),
      description: t('easyBookingDesc')
    },
    {
      icon: Phone,
      title: t('confidentialSecure'),
      description: t('confidentialSecureDesc')
    }
  ];

  const whyChooseUsFeatures = [
    {
      icon: Users,
      title: t('trustedByThousands'),
      description: t('trustedByThousandsDesc')
    },
    {
      icon: Heart,
      title: t('expertCare'),
      description: t('expertCareDesc')
    },
    {
      icon: Shield,
      title: t('safeEnvironment'),
      description: t('safeEnvironmentDesc')
    },
    {
      icon: Clock,
      title: t('availableAnytime'),
      description: t('availableAnytimeDesc')
    }
  ];

  const testimonials = [
    {
      text: t('testimonial1'),
      author: t('anonymous')
    },
    {
      text: t('testimonial2'),
      author: t('anonymous')
    },
    {
      text: t('testimonial3'),
      author: t('anonymous')
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-pink-500 to-pink-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center ${isRTL ? 'text-right' : 'text-left'} md:text-center`}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {t('heroTitle')}
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              {t('heroSubtitle')}
            </p>
            <div className={`flex flex-col sm:flex-row gap-4 justify-center ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
              <Link
                to="/register"
                className="bg-white text-pink-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                {t('joinCommunity')}
              </Link>
              <Link
                to="/therapists"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-pink-600 transition-colors duration-200"
              >
                {t('findSupport')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 ${isRTL ? 'text-right' : 'text-left'} md:text-center`}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('howWeSupport')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('supportDescription')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-pink-50 p-6 rounded-lg hover:shadow-lg transition-shadow duration-200">
                <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gradient-to-br from-pink-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 ${isRTL ? 'text-right' : 'text-left'} md:text-center`}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('whyChooseUs')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('whyChooseUsDesc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyChooseUsFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
                <div className={`flex items-start space-x-4 ${isRTL ? 'space-x-reverse' : ''}`}>
                  <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">5000+</div>
              <div className="text-lg opacity-90">{t('womenSupported')}</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
              <div className="text-lg opacity-90">{t('emergencySupport24')}</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">25+</div>
              <div className="text-lg opacity-90">{t('qualifiedTherapists')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 ${isRTL ? 'text-right' : 'text-left'} md:text-center`}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('testimonials')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-pink-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4">{testimonial.text}</p>
                <p className="text-gray-600 font-medium">- {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-pink-500 to-pink-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('getStartedToday')}
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            {t('getStartedTodayDesc')}
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 justify-center ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
            <Link
              to="/register"
              className="bg-white text-pink-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-block"
            >
              {t('getSupportNow')}
            </Link>
            <Link
              to="/community"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-pink-600 transition-colors duration-200 inline-block"
            >
              {t('joinCommunityBtn')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;