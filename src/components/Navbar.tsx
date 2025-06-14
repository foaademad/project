import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, User, LogOut, Globe } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const { user, logout, isAuthenticated } = useAuth();
  const { language, toggleLanguage, t, isRTL } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate('/');
    setShowUserMenu(false);
  };

  const navLinks = [
    { name: t('home'), path: '/' },
    { name: t('about'), path: '/about' },
    { name: t('contact'), path: '/contact' },
    { name: t('therapists'), path: '/therapists' },
    { name: t('community'), path: '/community' },
    { name: t('chat'), path: '/chat' },
  ];

  const isActiveLink = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center h-16 ${isRTL ? 'flex-row-reverse' : ''}`}>
          {/* Logo */}
          <Link to="/" className={`flex items-center space-x-2 ${isRTL ? 'space-x-reverse' : ''}`}>
            <div className="w-8 h-8 bg-gradient-to-r from-pink-400 to-pink-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <span className="text-xl font-bold text-pink-600">{t('heroTitle')}</span>
          </Link>

          {/* Desktop Navigation */}
          <div className={`hidden md:flex items-center space-x-8 ${isRTL ? 'space-x-reverse' : ''}`}>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  isActiveLink(link.path)
                    ? 'text-pink-600 bg-pink-50 border-b-2 border-pink-600'
                    : 'text-gray-700 hover:text-pink-600 hover:bg-pink-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Language Toggle & Auth Section */}
          <div className={`hidden md:flex items-center space-x-4 ${isRTL ? 'space-x-reverse' : ''}`}>
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 text-gray-700 hover:text-pink-600 transition-colors duration-200 px-3 py-2 rounded-md hover:bg-pink-50 border border-gray-200 hover:border-pink-200"
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium">
                {language === 'en' ? 'AR' : 'EN'}
              </span>
            </button>

            {isAuthenticated ? (
              <div className="relative">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className={`flex items-center space-x-2 text-gray-700 hover:text-pink-600 transition-colors duration-200 ${isRTL ? 'space-x-reverse' : ''}`}
                >
                  <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-medium">{user?.name}</span>
                </button>
                
                {showUserMenu && (
                  <div className={`absolute mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 ${isRTL ? 'left-0' : 'right-0'}`}>
                    <Link
                      to="/dashboard"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 transition-colors duration-200"
                      onClick={() => setShowUserMenu(false)}
                    >
                      {t('dashboard')}
                    </Link>
                    <button
                      onClick={handleLogout}
                      className={`w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 transition-colors duration-200 flex items-center space-x-2 ${isRTL ? 'space-x-reverse' : ''}`}
                    >
                      <LogOut className="w-4 h-4" />
                      <span>{t('logout')}</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className={`flex items-center space-x-2 ${isRTL ? 'space-x-reverse' : ''}`}>
                <Link
                  to="/login"
                  className="text-pink-600 hover:text-pink-700 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  {t('login')}
                </Link>
                <Link
                  to="/register"
                  className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  {t('register')}
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleLanguage}
              className="text-gray-700 hover:text-pink-600 focus:outline-none p-1 border border-gray-200 rounded-md"
            >
              <div className="flex items-center space-x-1">
                <Globe className="w-4 h-4" />
                <span className="text-xs font-medium">
                  {language === 'en' ? 'AR' : 'EN'}
                </span>
              </div>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-pink-600 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    isActiveLink(link.path)
                      ? 'text-pink-600 bg-pink-50'
                      : 'text-gray-700 hover:text-pink-600 hover:bg-pink-50'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              
              {isAuthenticated ? (
                <div className="pt-4 pb-3 border-t border-gray-200">
                  <div className={`flex items-center px-3 ${isRTL ? 'space-x-reverse' : ''}`}>
                    <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
                      <User className="w-4 h-4 text-white" />
                    </div>
                    <div className={`${isRTL ? 'mr-3' : 'ml-3'}`}>
                      <div className="text-base font-medium text-gray-800">{user?.name}</div>
                    </div>
                  </div>
                  <div className="mt-3 space-y-1">
                    <Link
                      to="/dashboard"
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-pink-600 transition-colors duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      {t('dashboard')}
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-pink-600 transition-colors duration-200"
                    >
                      {t('logout')}
                    </button>
                  </div>
                </div>
              ) : (
                <div className="pt-4 pb-3 border-t border-gray-200 space-y-1">
                  <Link
                    to="/login"
                    className="block px-3 py-2 rounded-md text-base font-medium text-pink-600 hover:text-pink-700 transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {t('login')}
                  </Link>
                  <Link
                    to="/register"
                    className="block px-3 py-2 rounded-md text-base font-medium bg-pink-600 text-white hover:bg-pink-700 transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {t('register')}
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;