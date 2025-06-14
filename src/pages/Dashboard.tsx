import React, { useState, useEffect } from 'react';
import { Calendar, MessageCircle, Heart, Award, Clock, User } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';

const Dashboard: React.FC = () => {
  const { user } = useAuth();
  const { t, isRTL } = useLanguage();
  const [appointments, setAppointments] = useState<any[]>([]);
  const [recentMessages, setRecentMessages] = useState<any[]>([]);

  useEffect(() => {
    // Load user's appointments
    const allAppointments = JSON.parse(localStorage.getItem('appointments') || '[]');
    const userAppointments = allAppointments.filter((apt: any) => apt.userId === user?.id);
    setAppointments(userAppointments);

    // Load recent chat messages
    const chatMessages = JSON.parse(localStorage.getItem('chatMessages') || '[]');
    const userMessages = chatMessages.filter((msg: any) => msg.type === 'user').slice(-3);
    setRecentMessages(userMessages);
  }, [user]);

  const stats = [
    {
      icon: Calendar,
      label: t('appointments'),
      value: appointments.length,
      color: 'bg-blue-500'
    },
    {
      icon: MessageCircle,
      label: t('messagesSent'),
      value: recentMessages.length,
      color: 'bg-green-500'
    },
    {
      icon: Heart,
      label: t('daysActive'),
      value: user ? Math.floor((Date.now() - new Date(user.joinDate).getTime()) / (1000 * 60 * 60 * 24)) : 0,
      color: 'bg-pink-500'
    },
    {
      icon: Award,
      label: t('milestones'),
      value: 3,
      color: 'bg-purple-500'
    }
  ];

  const upcomingAppointments = appointments
    .filter(apt => new Date(apt.date) >= new Date())
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, 3);

  const activities = [
    {
      id: 1,
      type: 'appointment',
      title: 'Scheduled appointment with Dr. Sarah Johnson',
      time: '2 hours ago',
      icon: Calendar
    },
    {
      id: 2,
      type: 'message',
      title: 'Started a conversation in General Support group',
      time: '1 day ago',
      icon: MessageCircle
    },
    {
      id: 3,
      type: 'milestone',
      title: 'Completed first week of therapy',
      time: '3 days ago',
      icon: Award
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Welcome Header */}
        <div className="mb-8">
          <div className={`flex items-center space-x-4 mb-4 ${isRTL ? 'space-x-reverse' : ''}`}>
            <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center">
              <User className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{t('welcomeBack')}, {user?.name}!</h1>
              <p className="text-gray-600">{t('journeyHappening')}</p>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <div className={`flex items-center justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div>
                  <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                  <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Upcoming Appointments */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className={`text-xl font-bold text-gray-900 mb-4 flex items-center space-x-2 ${isRTL ? 'space-x-reverse' : ''}`}>
              <Calendar className="w-5 h-5 text-pink-600" />
              <span>{t('upcomingAppointments')}</span>
            </h2>
            
            {upcomingAppointments.length > 0 ? (
              <div className="space-y-4">
                {upcomingAppointments.map((appointment) => (
                  <div key={appointment.id} className={`border-l-4 border-pink-500 pl-4 py-2 ${isRTL ? 'border-l-0 border-r-4 pr-4 pl-0' : ''}`}>
                    <h3 className="font-semibold text-gray-900">{appointment.therapistName}</h3>
                    <p className="text-sm text-gray-600">
                      {new Date(appointment.date).toLocaleDateString()} at {appointment.time}
                    </p>
                    <span className="inline-block px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full mt-1">
                      {appointment.status}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <Calendar className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                <p className="text-gray-500">{t('noUpcomingAppointments')}</p>
                <button
                  onClick={() => window.location.href = '/therapists'}
                  className="mt-2 text-pink-600 hover:text-pink-700 font-medium"
                >
                  {t('bookAppointment')}
                </button>
              </div>
            )}
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className={`text-xl font-bold text-gray-900 mb-4 flex items-center space-x-2 ${isRTL ? 'space-x-reverse' : ''}`}>
              <Clock className="w-5 h-5 text-pink-600" />
              <span>{t('recentActivity')}</span>
            </h2>
            
            <div className="space-y-4">
              {activities.map((activity) => (
                <div key={activity.id} className={`flex items-start space-x-3 ${isRTL ? 'space-x-reverse' : ''}`}>
                  <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <activity.icon className="w-4 h-4 text-pink-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-900">{activity.title}</p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">{t('quickActions')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button
              onClick={() => window.location.href = '/chat'}
              className={`flex items-center space-x-3 p-4 bg-pink-50 rounded-lg hover:bg-pink-100 transition-colors duration-200 ${isRTL ? 'space-x-reverse' : ''}`}
            >
              <MessageCircle className="w-6 h-6 text-pink-600" />
              <span className="font-medium text-gray-900">{t('startChat')}</span>
            </button>
            
            <button
              onClick={() => window.location.href = '/community'}
              className={`flex items-center space-x-3 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200 ${isRTL ? 'space-x-reverse' : ''}`}
            >
              <Heart className="w-6 h-6 text-blue-600" />
              <span className="font-medium text-gray-900">{t('joinCommunity')}</span>
            </button>
            
            <button
              onClick={() => window.location.href = '/therapists'}
              className={`flex items-center space-x-3 p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors duration-200 ${isRTL ? 'space-x-reverse' : ''}`}
            >
              <Calendar className="w-6 h-6 text-green-600" />
              <span className="font-medium text-gray-900">{t('bookAppointment')}</span>
            </button>
          </div>
        </div>

        {/* Progress Section */}
        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">{t('yourProgress')}</h2>
          <div className="space-y-4">
            <div>
              <div className={`flex justify-between items-center mb-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <span className="text-sm font-medium text-gray-700">{t('therapySessions')}</span>
                <span className="text-sm text-gray-500">3/10</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-pink-600 h-2 rounded-full" style={{ width: '30%' }}></div>
              </div>
            </div>
            
            <div>
              <div className={`flex justify-between items-center mb-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <span className="text-sm font-medium text-gray-700">{t('communityEngagement')}</span>
                <span className="text-sm text-gray-500">7/10</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '70%' }}></div>
              </div>
            </div>
            
            <div>
              <div className={`flex justify-between items-center mb-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <span className="text-sm font-medium text-gray-700">{t('selfCareGoals')}</span>
                <span className="text-sm text-gray-500">5/10</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full" style={{ width: '50%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;