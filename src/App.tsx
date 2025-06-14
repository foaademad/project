import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { LanguageProvider } from './contexts/LanguageContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Therapists from './pages/Therapists';
import Community from './pages/Community';
import Chat from './pages/Chat';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import TherapistDetail from './pages/TherapistDetail';
import SOSButton from './components/SOSButton';

function App() {
  return (
    <LanguageProvider>
      <AuthProvider>
        <Router>
          <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white">
            <Navbar />
            <main className="pb-20">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/therapists" element={<Therapists />} />
                <Route path="/therapist/:id" element={<TherapistDetail />} />
                <Route path="/community" element={<Community />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </Routes>
            </main>
            <SOSButton />
          </div>
        </Router>
      </AuthProvider>
    </LanguageProvider>
  );
}

export default App;