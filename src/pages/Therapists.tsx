import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Clock, DollarSign, Search, Filter } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Therapists: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('');

  const therapists = [
    {
      id: '1',
      name: 'Dr. Sarah Johnson',
      specialty: 'Trauma & PTSD',
      rating: 4.9,
      price: 120,
      availability: t('availableToday'),
      image: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=400',
      experience: '12 years',
      bio: 'Specialized in trauma recovery and EMDR therapy. Compassionate approach to healing.',
      languages: ['English', 'Spanish']
    },
    {
      id: '2',
      name: 'Dr. Emily Chen',
      specialty: 'Anxiety & Depression',
      rating: 4.8,
      price: 100,
      availability: t('availableTomorrow'),
      image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=400',
      experience: '8 years',
      bio: 'Expert in cognitive behavioral therapy and mindfulness-based treatments.',
      languages: ['English', 'Mandarin']
    },
    {
      id: '3',
      name: 'Dr. Maria Rodriguez',
      specialty: 'Family Therapy',
      rating: 4.7,
      price: 150,
      availability: t('availableThisWeek'),
      image: 'https://images.pexels.com/photos/5452268/pexels-photo-5452268.jpeg?auto=compress&cs=tinysrgb&w=400',
      experience: '15 years',
      bio: 'Helping families heal together through systemic approaches and communication.',
      languages: ['English', 'Spanish', 'Portuguese']
    },
    {
      id: '4',
      name: 'Dr. Jessica Brown',
      specialty: 'Sexual Assault Recovery',
      rating: 4.9,
      price: 130,
      availability: t('availableToday'),
      image: 'https://images.pexels.com/photos/5452235/pexels-photo-5452235.jpeg?auto=compress&cs=tinysrgb&w=400',
      experience: '10 years',
      bio: 'Dedicated to helping survivors reclaim their power and heal from trauma.',
      languages: ['English']
    },
    {
      id: '5',
      name: 'Dr. Amanda Wilson',
      specialty: 'Relationship Counseling',
      rating: 4.6,
      price: 110,
      availability: t('availableNextWeek'),
      image: 'https://images.pexels.com/photos/5452247/pexels-photo-5452247.jpeg?auto=compress&cs=tinysrgb&w=400',
      experience: '9 years',
      bio: 'Supporting healthy relationships and communication patterns.',
      languages: ['English', 'French']
    },
    {
      id: '6',
      name: 'Dr. Lisa Thompson',
      specialty: 'Group Therapy',
      rating: 4.8,
      price: 80,
      availability: t('availableToday'),
      image: 'https://images.pexels.com/photos/5452271/pexels-photo-5452271.jpeg?auto=compress&cs=tinysrgb&w=400',
      experience: '11 years',
      bio: 'Facilitating healing through peer support and group dynamics.',
      languages: ['English']
    }
  ];

  const specialties = ['All', 'Trauma & PTSD', 'Anxiety & Depression', 'Family Therapy', 'Sexual Assault Recovery', 'Relationship Counseling', 'Group Therapy'];

  const filteredTherapists = therapists.filter(therapist => {
    const matchesSearch = therapist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         therapist.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty = selectedSpecialty === '' || selectedSpecialty === 'All' || therapist.specialty === selectedSpecialty;
    return matchesSearch && matchesSpecialty;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-12 ${isRTL ? 'text-right' : 'text-left'} md:text-center`}>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('ourTherapists')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('therapistsDescription')}
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className={`absolute ${isRTL ? 'right-3' : 'left-3'} top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5`} />
                <input
                  type="text"
                  placeholder={t('searchTherapists')}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className={`w-full ${isRTL ? 'pr-10 pl-4' : 'pl-10 pr-4'} py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500`}
                />
              </div>
            </div>
            <div className="md:w-64">
              <div className="relative">
                <Filter className={`absolute ${isRTL ? 'right-3' : 'left-3'} top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5`} />
                <select
                  value={selectedSpecialty}
                  onChange={(e) => setSelectedSpecialty(e.target.value)}
                  className={`w-full ${isRTL ? 'pr-10 pl-4' : 'pl-10 pr-4'} py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500`}
                >
                  {specialties.map(specialty => (
                    <option key={specialty} value={specialty === 'All' ? '' : specialty}>
                      {specialty}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Therapist Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTherapists.map((therapist) => (
            <div key={therapist.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200">
              <img
                src={therapist.image}
                alt={therapist.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className={`flex items-center justify-between mb-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <h3 className="text-xl font-semibold text-gray-900">{therapist.name}</h3>
                  <div className={`flex items-center space-x-1 ${isRTL ? 'space-x-reverse' : ''}`}>
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600">{therapist.rating}</span>
                  </div>
                </div>
                
                <p className="text-pink-600 font-medium mb-2">{therapist.specialty}</p>
                <p className="text-gray-600 text-sm mb-4">{therapist.bio}</p>
                
                <div className="space-y-2 mb-4">
                  <div className={`flex items-center space-x-2 ${isRTL ? 'space-x-reverse' : ''}`}>
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{therapist.availability}</span>
                  </div>
                  <div className={`flex items-center space-x-2 ${isRTL ? 'space-x-reverse' : ''}`}>
                    <DollarSign className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">${therapist.price}/hour</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <p className="text-xs text-gray-500 mb-1">Languages:</p>
                  <div className="flex flex-wrap gap-1">
                    {therapist.languages.map((lang, index) => (
                      <span key={index} className="px-2 py-1 bg-pink-100 text-pink-700 text-xs rounded-full">
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
                
                <Link
                  to={`/therapist/${therapist.id}`}
                  className="w-full bg-pink-600 hover:bg-pink-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors duration-200 text-center block"
                >
                  {t('viewProfileBook')}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredTherapists.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">{t('noTherapistsFound')}</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedSpecialty('');
              }}
              className="mt-4 text-pink-600 hover:text-pink-700 font-medium"
            >
              {t('clearFilters')}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Therapists;