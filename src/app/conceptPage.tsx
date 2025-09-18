'use client'
import { ArrowRight, Video, MessageSquare, Users, Zap, Shield, Clock, CheckCircle, Star, Smartphone, Monitor, Calendar, Sparkles, ShoppingCart, Briefcase, Code, Heart, TrendingUp, Building } from 'lucide-react';
import UseCaseTabs from './useCase';

const ConceptPage = ({ onNavigate }) => {
    const modules = [
      {
        emoji: "💬",
        title: "Chat",
        tagline: "Chatting in style with your own themes"
      },
      {
        emoji: "📹",
        title: "HD Video Calls",
        tagline: "Crystal-clear video that adapts to any bandwidth"
      },
      {
        emoji: "👥",
        title: "Team Spaces",
        tagline: "Organized collaboration for any group size or structure"
      },
      {
        emoji: "🔒",
        title: "Privacy Shield",
        tagline: "Enterprise-grade security that doesn't slow you down"
      },
      {
        emoji: "⚡",
        title: "Quick Connect",
        tagline: "One-click joining from any device or platform"
      },
      {
        emoji: "🎨",
        title: "White-Label",
        tagline: "Fully customizable to match your brand identity"
      },
      {
        emoji: "🔗",
        title: "API Integration",
        tagline: "Embed seamlessly into your existing workflow"
      },
      {
        emoji: "📊",
        title: "Analytics Hub",
        tagline: "Deep insights into communication patterns and engagement"
      }
    ];
  
    return (
      <div>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
          <div className="relative max-w-6xl mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-gray-600 to-blue-800 bg-clip-text text-transparent leading-tight mb-6">
              Communication
              <br />
              <span className="text-4xl md:text-6xl">For Every Business</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              From e-commerce stores to enterprise teams, developers to healthcare professionals – build the perfect communication solution for <em>your</em> unique needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button 
                onClick={() => onNavigate('chat')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
              >
                <span>Explore Chat Module</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              {/*
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold text-lg hover:border-blue-500 hover:text-blue-600 transition-all duration-300">
                Watch Demo
              </button>
              */}
            </div>
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </section>
  
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Fits Perfectly Into Your World
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Whether you're running an online store, managing a remote team, or building the next big app - our modules adapt to your unique needs.
              </p>
            </div>
  
            <UseCaseTabs />
          </div>
        </section>
  
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Mix & Match Modules
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Each module is crafted to solve real problems. Combine them to create your perfect communication solution.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {modules.map((module, index) => (
                <div 
                  key={index}
                  className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 hover:border-blue-200 transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {module.emoji}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {module.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {module.tagline}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
  
        {/* Visual Mockup Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                See It In Action
              </h2>
              <p className="text-xl text-gray-600">
                Experience the future of communication today
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-8 text-center text-white shadow-2xl">
                <Monitor className="w-24 h-24 mx-auto mb-6 opacity-80" />
                <h3 className="text-2xl font-bold mb-4">Interactive Demo Coming Soon</h3>
                <p className="text-lg opacity-90 mb-8">
                  Get exclusive early access to our interactive product demo
                </p>
                {/*
                <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                  Join Waitlist
                </button>
                */}
            </div>
          </div>
        </section>
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">What's Coming Next</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Q1 2025 - Chat Module Launch</h4>
                      <p className="text-gray-600">Core messaging with real-time sync</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Q2 2025 - Video Calls</h4>
                      <p className="text-gray-600">HD video with smart bandwidth optimization</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-gray-300 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Q3 2025 - Group Spaces</h4>
                      <p className="text-gray-600">Collaborative workspaces and team features</p>
                    </div>
                  </div>
                </div>
              </div>
  
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Early Bird Special</h3>
                  <p className="text-gray-600">Lock in lifetime pricing before our official launch</p>
                </div>
                <div id='price' className="text-center mb-8">
                  <div className="text-5xl font-bold text-gray-900 mb-2">
                    $100
                    <span className="text-lg text-gray-500 font-normal">/year</span>
                  </div>
                  <p className="text-sm text-gray-500 line-through mb-1">Regular price: $149/year</p>
                  <p className="text-green-600 font-semibold">Save 40% - Limited time</p>
                </div>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className='text-purple-500'>All current and future modules</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className='text-purple-500'>Priority support & feedback</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className='text-purple-500'>Weekly product updates</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className='text-purple-500'>14-day money-back guarantee</span>
                  </div>
                </div>
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                  Start Your Journey
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  };

  export default ConceptPage