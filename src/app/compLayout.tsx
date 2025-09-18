'use client'
import React, { useState } from 'react';
import { ArrowRight, Video, MessageSquare, Users, Zap, Shield, Clock, CheckCircle, Star, Smartphone, Monitor, Calendar, Sparkles, ShoppingCart, Briefcase, Code, Heart, TrendingUp, Building } from 'lucide-react';
import ConceptPage from './conceptPage';
import ChatModulePage from './chatModule';

// Layout Component
const Layout = () => {
  const [currentPage, setCurrentPage] = useState('concept');

  const NavBar = () => (
    <nav className="bg-white/90 backdrop-blur-lg border-b border-gray-200/50 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center">
               <img src="logo.png" alt="" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ZemenayChat
            </span>
          </div>
          <div className="flex items-center space-x-8">
            <button 
              onClick={() => setCurrentPage('concept')}
              className={`font-medium transition-colors ${currentPage === 'concept' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
            >
              Overview
            </button>
            <button 
              onClick={() => setCurrentPage('chat')}
              className={`font-medium transition-colors ${currentPage === 'chat' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
            >
              Chat Module
            </button>
          </div>
        </div>
      </div>
    </nav>
  );

  const Footer = () => (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
            <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center">
               <img src="logo.png" alt="" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ZemenayChat
            </span>
          </div>
            </div>
            <p className="text-gray-400 max-w-full">
              Building the future of communication, one module at a time. Join thousands of early adopters shaping the next generation of video chat.
            </p>
            <div className="flex items-center space-x-2 mt-4 text-sm text-gray-400">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Weekly updates delivered</span>
            </div>
          </div>
          {/*
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Roadmap</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        */}
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 ModularChat. Built with care for the future of communication.</p>
        </div>
      </div>
    </footer>
  );

  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <main>
        {currentPage === 'concept' ? <ConceptPage onNavigate={setCurrentPage} /> : <ChatModulePage onNavigate={setCurrentPage} />}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;