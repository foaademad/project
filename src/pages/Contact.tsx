import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Contact: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Save to localStorage
    const contacts = JSON.parse(localStorage.getItem('contacts') || '[]');
    const newContact = {
      id: Date.now().toString(),
      ...formData,
      timestamp: new Date().toISOString()
    };
    contacts.push(newContact);
    localStorage.setItem('contacts', JSON.stringify(contacts));
    
    alert('Message sent successfully! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 ${isRTL ? 'text-right' : 'text-left'} md:text-center`}>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('contactUs')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('contactUsDesc')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">{t('getInTouch')}</h2>
            
            <div className="space-y-6">
              <div className={`flex items-start space-x-4 ${isRTL ? 'space-x-reverse' : ''}`}>
                <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{t('emergencyHotline')}</h3>
                  <p className="text-gray-600">{t('emergencyHotlineDesc')}</p>
                  <p className="text-pink-600 font-medium">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className={`flex items-start space-x-4 ${isRTL ? 'space-x-reverse' : ''}`}>
                <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{t('emailSupport')}</h3>
                  <p className="text-gray-600">{t('emailSupportDesc')}</p>
                  <p className="text-pink-600 font-medium">support@safehaven.com</p>
                </div>
              </div>

              <div className={`flex items-start space-x-4 ${isRTL ? 'space-x-reverse' : ''}`}>
                <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{t('officeLocation')}</h3>
                  <p className="text-gray-600">{t('officeLocationDesc')}</p>
                  <p className="text-pink-600 font-medium">123 Support Street, City, State 12345</p>
                </div>
              </div>

              <div className={`flex items-start space-x-4 ${isRTL ? 'space-x-reverse' : ''}`}>
                <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{t('officeHours')}</h3>
                  <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
                  <p className="text-gray-600">Sunday: Emergency calls only</p>
                </div>
              </div>
            </div>

            {/* Emergency Notice */}
            <div className="mt-8 bg-red-50 border border-red-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-red-800 mb-2">{t('inCaseOfEmergency')}</h3>
              <p className="text-red-700">
                {t('emergencyWarning')}
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('sendMessage')}</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('fullName')} *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                  placeholder={t('fullName')}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('emailAddress')} *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                  placeholder={t('emailAddress')}
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('subject')} *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                >
                  <option value="">{t('selectSubject')}</option>
                  <option value="general">{t('generalInquiry')}</option>
                  <option value="support">{t('needSupport')}</option>
                  <option value="appointment">{t('bookAppointmentContact')}</option>
                  <option value="feedback">{t('feedback')}</option>
                  <option value="other">{t('other')}</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('message')} *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                  placeholder={t('messagePlaceholder')}
                ></textarea>
              </div>

              <button
                type="submit"
                className={`w-full bg-pink-600 hover:bg-pink-700 text-white py-3 px-4 rounded-md font-semibold transition-colors duration-200 flex items-center justify-center space-x-2 ${isRTL ? 'space-x-reverse' : ''}`}
              >
                <Send className="w-5 h-5" />
                <span>{t('sendMessageBtn')}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;