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
} from "lucide-react";
const ChatModulePage = ({ onNavigate }) => {
  const [activeUseCase, setActiveUseCase] = useState("ecommerce");
  const router = useRouter();

  const chatUseCases = {
    ecommerce: {
      title: "E-commerce Chat",
      icon: <ShoppingCart className="w-6 h-6" />,
      description:
        "Turn browsers into buyers with intelligent shopping assistance",
      features: [
        {
          icon: <Zap className="w-8 h-8 text-blue-500" />,
          title: "Smart Product Recommendations",
          description:
            "AI suggests products based on chat context and browsing behavior, increasing average order value by 35%.",
        },
        {
          icon: <Video className="w-8 h-8 text-green-500" />,
          title: "Live Product Demos",
          description:
            "Show products in action with screen sharing and video calls, reducing return rates by 60%.",
        },
        {
          icon: <Users className="w-8 h-8 text-purple-500" />,
          title: "Cart Recovery Chat",
          description:
            "Proactive messages to abandoned carts with personalized offers, recovering 23% of lost sales.",
        },
        {
          icon: <Clock className="w-8 h-8 text-orange-500" />,
          title: "Order Status Updates",
          description:
            "Real-time shipping updates and support directly in chat, reducing support tickets by 40%.",
        },
      ],
    },
    enterprise: {
      title: "Enterprise Chat",
      icon: <Building className="w-6 h-6" />,
      description: "Scale team communication across departments and time zones",
      features: [
        {
          icon: <Shield className="w-8 h-8 text-blue-500" />,
          title: "Enterprise Security",
          description:
            "SOC 2 Type II compliance with end-to-end encryption and enterprise SSO integration.",
        },
        {
          icon: <Users className="w-8 h-8 text-green-500" />,
          title: "Department Channels",
          description:
            "Organize conversations by project, team, or location with advanced permission controls.",
        },
        {
          icon: <TrendingUp className="w-8 h-8 text-purple-500" />,
          title: "Analytics Dashboard",
          description:
            "Track team communication patterns, response times, and collaboration effectiveness.",
        },
        {
          icon: <Zap className="w-8 h-8 text-orange-500" />,
          title: "Workflow Integration",
          description:
            "Connect with Slack, Teams, Salesforce, and 100+ business tools for seamless workflows.",
        },
      ],
    },
    developers: {
      title: "Developer Chat",
      icon: <Code className="w-6 h-6" />,
      description: "Embed powerful chat directly into your application",
      features: [
        {
          icon: <Code className="w-8 h-8 text-blue-500" />,
          title: "5-Minute Integration",
          description:
            "Drop-in React components and REST APIs get you live in minutes, not months of development.",
        },
        {
          icon: <Shield className="w-8 h-8 text-green-500" />,
          title: "White-Label Ready",
          description:
            "Fully customizable UI that matches your brand with CSS variables and theme overrides.",
        },
        {
          icon: <Zap className="w-8 h-8 text-purple-500" />,
          title: "Realtime Webhooks",
          description:
            "Sync chat events with your database and trigger custom workflows in real-time.",
        },
        {
          icon: <TrendingUp className="w-8 h-8 text-orange-500" />,
          title: "Scalable Infrastructure",
          description:
            "Auto-scaling architecture handles everything from MVP to millions of concurrent users.",
        },
      ],
    },
    healthcare: {
      title: "Healthcare Chat",
      icon: <Heart className="w-6 h-6" />,
      description: "HIPAA-compliant communication for patient care",
      features: [
        {
          icon: <Shield className="w-8 h-8 text-blue-500" />,
          title: "HIPAA Compliance",
          description:
            "Full HIPAA compliance with encrypted messaging, audit logs, and secure file sharing.",
        },
        {
          icon: <Calendar className="w-8 h-8 text-green-500" />,
          title: "Appointment Integration",
          description:
            "Seamlessly connect with scheduling systems for pre and post-appointment communication.",
        },
        {
          icon: <Users className="w-8 h-8 text-purple-500" />,
          title: "Care Team Coordination",
          description:
            "Secure group chats between doctors, nurses, and specialists for coordinated patient care.",
        },
        {
          icon: <Clock className="w-8 h-8 text-orange-500" />,
          title: "Prescription & Records",
          description:
            "Share prescriptions and medical records securely with automatic encryption and access controls.",
        },
      ],
    },
  };
  const roadmapFeatures = [
    {
      icon: <Sparkles className="w-6 h-6 text-blue-500" />,
      title: "Voice messages with transcription",
      description: "Send quick voice notes, auto-transcribed into text.",
    },
    {
      icon: <Users className="w-6 h-6 text-green-500" />,
      title: "Group threads",
      description: "Break conversations into smaller, focused discussions.",
    },
    {
      icon: <Code className="w-6 h-6 text-purple-500" />,
      title: "API-first integrations",
      description: "Easily connect chat with CRMs, ERPs, and custom workflows.",
    },
  ];

  const features = chatUseCases[activeUseCase].features;

  const upcomingFeatures = [
    "Voice messages with transcription",
    "File sharing with preview",
    "Message reactions and threads",
    "Custom chat backgrounds",
    "Advanced search across all chats",
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-8">
                <MessageSquare className="w-4 h-4" />
                <span>Chat Module - Adapts to Any Industry</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
                One Chat Module,
                <span className="bg-gradient-to-r from-blue-600 via-gray-700 to-purple-600 bg-clip-text text-transparent">
                  {" "}
                  Endless Possibilities
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Whether you're selling products, managing teams, or caring for
                patients – the same powerful chat engine adapts to your unique
                workflow and delivers exactly what you need.
              </p>

              {/* Industry Selector */}
              <div className="flex flex-wrap gap-3 mb-8">
                {Object.entries(chatUseCases).map(([key, useCase]) => (
                  <button
                    key={key}
                    onClick={() => setActiveUseCase(key)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                      activeUseCase === key
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {useCase.icon}
                    <span>{useCase.title}</span>
                  </button>
                ))}
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100 mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {chatUseCases[activeUseCase].title}
                </h3>
                <p className="text-gray-700">
                  {chatUseCases[activeUseCase].description}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button
                  onClick={() => onNavigate("concept")}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  View All Modules
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-3xl shadow-2xl p-8 transform rotate-2 hover:rotate-0 transition-transform duration-300">
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {chatUseCases[activeUseCase].title} Superpowers
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The same chat engine, optimized for{" "}
              {chatUseCases[activeUseCase].title.toLowerCase()} workflows and
              enhanced with industry-specific intelligence.
            </p>
          </div>

          {/* Industry Tabs for Features */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(chatUseCases).map(([key, useCase]) => (
              <button
                key={key}
                onClick={() => setActiveUseCase(key)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeUseCase === key
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {useCase.icon}
                <span className="hidden sm:inline">{useCase.title}</span>
                <span className="sm:hidden">{useCase.title.split(" ")[0]}</span>
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 hover:border-blue-200 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mockup Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Designed for Every Device
            </h2>
            <p className="text-xl text-gray-600">
              Seamless experience whether you're on desktop, tablet, or mobile
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Desktop Mockup */}
            <div className="text-center">
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-200">
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-12 mb-6">
                  <h3 className="text-lg font-semibold text-gray-600 mb-2">
                    Desktop Experience
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Full-screen chat with keyboard shortcuts
                  </p>
                </div>
                <div className="space-y-2 flex flex-col items-center">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Multi-window support</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Drag & drop files</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Rich text formatting</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Mockup */}
            <div className="text-center">
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-200">
                <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-12 mb-6">
                  <h3 className="text-lg font-semibold text-gray-600 mb-2">
                    Mobile Optimized
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Native app performance in the browser
                  </p>
                </div>
                <div className="space-y-2 flex flex-col items-center">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Offline message sync</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Smart notifications</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Voice message support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              What's Coming to Chat
            </h2>
            <p className="text-xl text-gray-600">
              We're constantly improving based on your feedback
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Coming Soon
                </h3>
                <div className="space-y-4">
                  {upcomingFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Calendar className="w-5 h-5 text-blue-500" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 border border-blue-200">
                <h4 className="font-bold text-gray-900 mb-4">
                  Get Updates First
                </h4>
                <p className="text-gray-600 mb-6">
                  Join our early access program and help shape the future of
                  chat.
                </p>
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                  Join Early Access
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Communication?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Join thousands who've already discovered the joy of effortless
            messaging.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button
              onClick={() => router.push("/#concept-section")}
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              View Pricing
            </button>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center space-x-6 text-sm opacity-80">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4" />
                <span>14-day money-back guarantee</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4" />
                <span>No setup fees</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4" />
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
