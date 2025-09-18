"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  Video,
  MessageSquare,
  Users,
  Zap,
  Shield,
  Clock,
  CheckCircle,
  Star,
  Smartphone,
  Monitor,
  Calendar,
  Sparkles,
  ShoppingCart,
  Briefcase,
  Code,
  Heart,
  TrendingUp,
  Building,
  Bot,
  Globe,
  Mic,
  FileText,
  Search,
  Bell,
  Lock,
  Palette,
  BarChart3,
  MessageCircle,
  Headphones,
  Database,
  Workflow,
  GitBranch,
  Camera,
  Share2,
  Filter,
  Tag,
  Archive,
  ScreenShare,
} from "lucide-react";
import Router from "next/navigation";
// @ts-ignore
const ChatModulePage = () => {
  const router = useRouter();
  const nearTermFeatures = [
    {
      icon: <MessageSquare className="w-5 h-5 text-purple-400" />,
      title: "Enhanced Real-time Chat",
      description:
        "Advanced messaging with smart notifications, file sharing, and thread management",
      eta: "Q4 2025",
    },
    {
      icon: <Video className="w-5 h-5 text-blue-400" />,
      title: "HD Video & Audio Calls",
      description:
        "Crystal-clear video calls with background blur and screen recording capabilities",
      eta: "Q1 2026",
    },
    {
      icon: <Users className="w-5 h-5 text-green-400" />,
      title: "Advanced Team Features",
      description:
        "Team spaces, role management, and collaborative workspaces for better organization",
      eta: "Q1 2026",
    },
    {
      icon: <Shield className="w-5 h-5 text-red-400" />,
      title: "Enterprise Security",
      description:
        "End-to-end encryption, compliance features, and advanced access controls",
      eta: "Q2 2026",
    },
  ];

  const coreFeatures = [
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: "Lightning Fast Performance",
      description:
        "Built with modern technology stack for instant message delivery and seamless user experience across all devices and platforms.",
    },
    {
      icon: <Palette className="w-8 h-8 text-purple-400" />,
      title: "Beautiful & Customizable",
      description:
        "Sleek, modern interface with dark/light themes and customizable appearance options to match your brand identity.",
    },
    {
      icon: <Bell className="w-8 h-8 text-blue-400" />,
      title: "Smart Notifications",
      description:
        "Intelligent notification system that learns your patterns and only alerts you when it matters, with custom notification rules.",
    },
    {
      icon: <Database className="w-8 h-8 text-green-400" />,
      title: "Cloud-Native Architecture",
      description:
        "Scalable cloud infrastructure ensures your data is always synced, backed up, and accessible from anywhere in the world.",
    },
  ];

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 border border-purple-700/30 text-purple-200 px-4 py-2 rounded-full text-sm font-medium mb-8">
                <MessageSquare className="w-4 h-4" />
                <span>Smart Chat Module - Now Available</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
                Video Chat
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent block">
                  Built for Anyone & Everyone
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Enjoy seamless video chat with AI-powered assistance, real-time
                clarity, and beautifully customizable interfaces. Whether you’re
                catching up with friends, connecting with family, or hosting
                live discussions — it just feels natural.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button
                  onClick={() => router.push("/")}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>View All Modules</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gray-800/50 border border-gray-600/50 rounded-3xl shadow-2xl p-8 transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="space-y-4">
                  <img src="img-5.png" alt="" className="border rounded-md" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="border-t items-center mx-10 md:mx-50 border-purple-400"></div>

      {/* Core Features Section */}
      <section className="py-20 bg-gray-950/80">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Core <span className="text-purple-600">Features</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Built with modern technology and designed for seamless team
              collaboration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreFeatures.map((feature, index) => (
              <div
                key={index}
                className="group bg-gray-950 border border-gray-600/50 rounded-2xl p-8 shadow-2xl hover:shadow-purple-700/20 hover:border-purple-800 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="border-t items-center mx-20 border-purple-400"></div>
      {/* Enhanced Roadmap Section */}
      <section className="py-20 bg-gray-950/80">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              The Future of{" "}
              <span className="text-purple-600">Chat is Here</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We're pushing the boundaries of what's possible in conversational
              experiences. Here's what's coming next.
            </p>
          </div>

          {/* Near-term Features */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              <span className="text-white">Coming Soon</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {nearTermFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-600/50 rounded-xl p-6 shadow-2xl hover:shadow-purple-500/20 hover:border-purple-800 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-3 bg-gray-700/50 rounded-lg border border-gray-600/50">
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-bold text-white">
                          {feature.title}
                        </h4>
                        <span className="text-xs bg-purple-900/50 text-purple-300 px-2 py-1 rounded-full font-medium border border-purple-500/30">
                          {feature.eta}
                        </span>
                      </div>
                      <p className="text-gray-300 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Future Vision */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              Future Vision
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: <Camera className="w-5 h-5 text-indigo-400" />,
                  title: "AR/VR Integration",
                  description:
                    "Immersive chat experiences with spatial audio and 3D avatars",
                  category: "Innovation",
                },
                {
                  icon: <Database className="w-5 h-5 text-cyan-400" />,
                  title: "Blockchain Verification",
                  description:
                    "Cryptographic message verification and decentralized identity",
                  category: "Security",
                },
                {
                  icon: <Bell className="w-5 h-5 text-pink-400" />,
                  title: "Smart Notifications",
                  description:
                    "AI-powered notification filtering and priority management",
                  category: "Intelligence",
                },
                {
                  icon: <Workflow className="w-5 h-5 text-yellow-400" />,
                  title: "Workflow Automation",
                  description:
                    "Custom bots and automated responses for team productivity",
                  category: "Automation",
                },
                {
                  icon: <BarChart3 className="w-5 h-5 text-emerald-400" />,
                  title: "Advanced Analytics",
                  description:
                    "Deep insights into communication patterns and team performance",
                  category: "Analytics",
                },
                {
                  icon: <Globe className="w-5 h-5 text-slate-400" />,
                  title: "Global Translation",
                  description:
                    "Real-time message translation for international teams",
                  category: "Communication",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-gray-950 border border-gray-600/50 rounded-xl p-6 shadow-2xl hover:shadow-purple-500/20 hover:border-purple-800 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-gray-700/50 rounded-lg group-hover:scale-110 transition-transform duration-300 border border-gray-600/50">
                      {feature.icon}
                    </div>
                    <span className="text-xs bg-gray-700/50 text-gray-300 px-2 py-1 rounded-full font-medium border border-gray-600/30">
                      {feature.category}
                    </span>
                  </div>
                  <h4 className="font-bold text-white mb-2">{feature.title}</h4>
                  <p className="text-gray-300 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Early Access CTA */}
          <div className="mt-16 bg-gradient-to-br from-purple-950/20 to-blue-800/20 rounded-2xl p-8 border border-purple-500/20">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Join Our Community
              </h3>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Be part of the development journey. Get early access to new
                features and help shape the future of team communication.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => router.push("/")}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                >
                  Start Free Trial
                </button>
                <button
                  onClick={() => router.push("/")}
                  className="border border-purple-500/30 text-purple-300 px-8 py-3 rounded-lg font-semibold hover:bg-purple-900/20 transition-all duration-200"
                >
                  View Pricing
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="border-t items-center mx-20 border-purple-400"></div>

      {/* Device Support Section */}
      <section className="py-20 bg-gray-950/80">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Works <span className="text-purple-600">Everywhere</span>
            </h2>
            <p className="text-xl text-gray-300">
              Native performance across all devices with offline sync
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Desktop */}
            <div className="flex flex-col">
              <div className="bg-purple-950/20 border border-purple-800/60 rounded-3xl shadow-2xl hover:shadow-purple-700/30 transition">
                {/* Image Section */}
                <div className="bg-[url('/img-7.png')] bg-cover bg-center rounded-t-2xl h-48 lg:h-64"></div>

                {/* Text Section */}
                <div className="px-6 py-6 text-left">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Power for Desktop Users
                  </h3>
                  <p className="text-purple-300 text-sm mb-4">
                    Work faster with full keyboard control, multiple windows,
                    and smooth collaboration tools.
                  </p>

                  <ul className="space-y-2">
                    {[
                      "Multi-window conversations",
                      "Drag & drop file sharing",
                      "Rich text formatting",
                      "Screen sharing & recording",
                    ].map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center space-x-2 text-gray-200 text-sm"
                      >
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Mobile */}
            <div className="flex flex-col">
              <div className="bg-purple-950/20 border border-purple-800/60 rounded-3xl shadow-2xl hover:shadow-purple-700/30 transition">
                {/* Image Section */}
                <div className="bg-[url('/img-5.png')] bg-cover bg-center rounded-t-2xl h-48 lg:h-64"></div>

                {/* Text Section */}
                <div className="px-6 py-6 text-left">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Smooth on Mobile
                  </h3>
                  <p className="text-purple-300 text-sm mb-4">
                    Enjoy native app performance, smart notifications, and
                    security you can trust.
                  </p>

                  <ul className="space-y-2">
                    {[
                      "Offline message sync",
                      "Smart push notifications",
                      "Voice message support",
                      "Biometric security",
                    ].map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center space-x-2 text-gray-200 text-sm"
                      >
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-700 via-blue-900 to-purple-700">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Team Communication?
          </h2>
          <p className="text-xl text-purple-200 mb-8">
            Join thousands who've already discovered the power of intelligent,
            subscription-based communication.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button
              onClick={() => router.push("/")}
              className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>View All Modules</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
          <div className="text-center">
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-purple-200">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4  flex-shrink-0" />
                <span>14-day money-back guarantee</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 flex-shrink-0" />
                <span>No setup fees</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 flex-shrink-0" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default ChatModulePage;
