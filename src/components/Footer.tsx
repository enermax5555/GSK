import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold flex items-center">
              <img 
                src={"https://i.ibb.co/LDPFCmqz/65c96ec3b9c1.png"} 
                alt="GSK Logo" 
                className="h-10 w-auto mr-3 rounded"
              />
              <span>ГСК - Гипсокартон Бургас</span>
            </h3>
            <p className="text-gray-300">
              Професионален монтаж на гипсокартон с високо качество и внимание към детайла. Опитен екип с дългогодишна практика в изграждането на интериорни решения.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Бързи връзки</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">Начало</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">Услуги</Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-white transition-colors">Галерия</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">За нас</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Услуги</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">Преградни стени</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">Окачени тавани</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">Предстенни обшивки</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">Растерни тавани</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold mb-4">Контакти</h3>
            <p className="flex items-start">
              <span className="text-blue-400 mr-2">📱</span>
              <a href="tel:0899368419" className="text-blue-600 hover:underline">089 936 8419</a>
            </p>
            <p className="flex items-start">
              <span className="text-blue-400 mr-2">✉️</span>
              <a href="mailto:georgikalpakchiev056@gmail.com" className="text-blue-600 hover:underline">georgikalpakchiev056@gmail.com</a>
            </p>
            <p className="flex items-start">
              <span className="text-blue-400 mr-2">📍</span>
              <span>гр. Бургас</span>
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} ГСК - Гипсокартон Бургас. Всички права запазени.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;