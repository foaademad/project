import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Star, Clock, DollarSign, MapPin, Phone, Calendar, ArrowLeft } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const TherapistDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth();
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [showBooking, setShowBooking] = useState(false);

  const therapist = {
    id: id,
    name: 'Dr. Sarah Johnson',
    specialty: 'Trauma & PTSD',
    rating: 4.9,
    price: 120,
    availability: 'Available Today',
    image: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=400',
    experience: '12 years',
    bio: 'Dr. Sarah Johnson is a licensed clinical psychologist with over 12 years of experience specializing in trauma recovery and EMDR therapy. She has helped hundreds of women overcome the effects of harassment and abuse, using evidence-based treatments combined with a compassionate, person-centered approach.',
    languages: ['English', 'Spanish'],
    education: ['PhD in Clinical Psychology - Stanford University', 'MA in Counseling Psychology - UCLA'],
    certifications: ['Licensed Clinical Psychologist', 'EMDR Certified Therapist', 'Trauma-Informed Care Specialist'],
    approach: 'I believe in creating a safe, non-judgmental space where healing can begin. My approach combines evidence-based therapies with mindfulness and self-compassion techniques.',
    location: '123 Healing Avenue, Suite 200',
    phone: '+1 (555) 123-4567',
    reviews: [
      {
        id: 1,
        author: 'Anonymous',
        rating: 5,
        comment: 'Dr. Johnson helped me through the most difficult time in my life. Her compassionate approach and expertise made all the difference.',
        date: '2024-01-15'
      },
      {
        id: 2,
        author: 'Anonymous',
        rating: 5,
        comment: 'Professional, understanding, and incredibly helpful. I highly recommend Dr. Johnson to anyone seeking trauma therapy.',
        date: '2024-01-10'
      }
    ]
  };

  const availableDates = [
    '2024-02-01',
    '2024-02-02',
    '2024-02-03',
    '2024-02-05',
    '2024-02-06'
  ];

  const availableTimes = [
    '09:00 AM',
    '10:00 AM',
    '11:00 AM',
    '02:00 PM',
    '03:00 PM',
    '04:00 PM'
  ];

  const handleBookAppointment = () => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }

    if (!selectedDate || !selectedTime) {
      alert('Please select both date and time for your appointment.');
      return;
    }

    const appointments = JSON.parse(localStorage.getItem('appointments') || '[]');
    const newAppointment = {
      id: Date.now().toString(),
      therapistId: therapist.id,
      therapistName: therapist.name,
      userId: user?.id,
      userName: user?.name,
      date: selectedDate,
      time: selectedTime,
      status: 'confirmed',
      createdAt: new Date().toISOString()
    };

    appointments.push(newAppointment);
    localStorage.setItem('appointments', JSON.stringify(appointments));

    alert('Appointment booked successfully! You will receive a confirmation email shortly.');
    setShowBooking(false);
    setSelectedDate('');
    setSelectedTime('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          onClick={() => navigate('/therapists')}
          className="flex items-center space-x-2 text-pink-600 hover:text-pink-700 mb-6 transition-colors duration-200"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Therapists</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Profile Header */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex flex-col md:flex-row gap-6">
                <img
                  src={therapist.image}
                  alt={therapist.name}
                  className="w-full md:w-48 h-48 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h1 className="text-3xl font-bold text-gray-900">{therapist.name}</h1>
                    <div className="flex items-center space-x-1">
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <span className="text-lg font-semibold">{therapist.rating}</span>
                    </div>
                  </div>
                  <p className="text-xl text-pink-600 font-medium mb-4">{therapist.specialty}</p>
                  <p className="text-gray-600 mb-4">{therapist.bio}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-5 h-5 text-gray-400" />
                      <span className="text-gray-600">{therapist.experience} experience</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <DollarSign className="w-5 h-5 text-gray-400" />
                      <span className="text-gray-600">${therapist.price}/hour</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-5 h-5 text-gray-400" />
                      <span className="text-gray-600">{therapist.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="w-5 h-5 text-gray-400" />
                      <span className="text-gray-600">{therapist.phone}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Approach */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">My Approach</h2>
              <p className="text-gray-600 leading-relaxed">{therapist.approach}</p>
            </div>

            {/* Education & Certifications */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Education & Certifications</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Education</h3>
                  <ul className="space-y-2">
                    {therapist.education.map((edu, index) => (
                      <li key={index} className="text-gray-600">• {edu}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Certifications</h3>
                  <ul className="space-y-2">
                    {therapist.certifications.map((cert, index) => (
                      <li key={index} className="text-gray-600">• {cert}</li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {therapist.languages.map((lang, index) => (
                    <span key={index} className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Reviews */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Client Reviews</h2>
              <div className="space-y-6">
                {therapist.reviews.map((review) => (
                  <div key={review.id} className="border-b border-gray-200 pb-6 last:border-b-0">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <span className="text-sm text-gray-500">{new Date(review.date).toLocaleDateString()}</span>
                    </div>
                    <p className="text-gray-600 italic">"{review.comment}"</p>
                    <p className="text-sm text-gray-500 mt-2">- {review.author}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Book Appointment</h3>
              
              {!showBooking ? (
                <button
                  onClick={() => setShowBooking(true)}
                  className="w-full bg-pink-600 hover:bg-pink-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Schedule Now</span>
                </button>
              ) : (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Select Date
                    </label>
                    <select
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                    >
                      <option value="">Choose a date</option>
                      {availableDates.map((date) => (
                        <option key={date} value={date}>
                          {new Date(date).toLocaleDateString()}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Select Time
                    </label>
                    <select
                      value={selectedTime}
                      onChange={(e) => setSelectedTime(e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                    >
                      <option value="">Choose a time</option>
                      {availableTimes.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-gray-600">Session fee:</span>
                      <span className="text-xl font-bold text-gray-900">${therapist.price}</span>
                    </div>
                    
                    <div className="space-y-2">
                      <button
                        onClick={handleBookAppointment}
                        className="w-full bg-pink-600 hover:bg-pink-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors duration-200"
                      >
                        Confirm Booking
                      </button>
                      <button
                        onClick={() => setShowBooking(false)}
                        className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 px-4 rounded-lg font-medium transition-colors duration-200"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              )}
              
              <div className="mt-6 p-4 bg-pink-50 rounded-lg">
                <h4 className="font-semibold text-pink-800 mb-2">What to Expect</h4>
                <ul className="text-sm text-pink-700 space-y-1">
                  <li>• Initial consultation (50 minutes)</li>
                  <li>• Safe and confidential environment</li>
                  <li>• Personalized treatment plan</li>
                  <li>• Flexible scheduling options</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TherapistDetail;