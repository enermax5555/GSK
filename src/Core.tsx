import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import GalleryDetail from './pages/GalleryDetail';
// import Login from './pages/Login';
// import Registration from './pages/Registration';
import NotFound from './pages/NotFound';
// import AdminIndex from './admin/index';
// import Dashboard from './admin/pages/Dashboard';
// import ManageUsers from './admin/pages/ManageUsers';
// import ManageContent from './admin/pages/ManageContent';
import { initGA, pageview } from './utils/analytics';

const Core: React.FC = () => {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
};

// Separate component to use useLocation hook (can't be used directly in Core)
const AppContent: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Initialize Google Analytics
    initGA();
  }, []);

  useEffect(() => {
    // Track page views on route change
    pageview(location.pathname);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/gallery/:serviceType" element={<GalleryDetail />} />
          
          {/* Admin Routes (commented for client build)
          <Route path="/admin" element={<AdminIndex />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/users" element={<ManageUsers />} />
          <Route path="/admin/content" element={<ManageContent />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          */}
          
          {/* 404 Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default Core;
