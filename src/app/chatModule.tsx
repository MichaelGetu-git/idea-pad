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

// @ts-ignore
const ChatModulePage = ({ onNavigate }) => {
  type ChatUseCaseKey = keyof typeof chatUseCases;
  const [activeUseCase, setActiveUseCase] = useState<ChatUseCaseKey>("ecommerce");
  const router = useRouter();

  const chatUseCases = {
    ecommerce: {
      title: "E-commerce Chat",
      icon: <ShoppingCart className="w-6 h-6" />,
      description:
        "Turn browsers into buyers with AI-powered shopping assistance that understands context and intent",
      features: [
        {
          icon: <Bot className="w-8 h-8 text-blue-500" />,
          title: "AI Shopping Assistant",
          description:
            "GPT-4 powered chatbot that understands product catalogs, suggests alternatives, and handles complex queries like 'find me a red dress under $100 for a wedding'.",
        },
        {
          icon: <Video className="w-8 h-8 text-green-500" />,
          title: "Live Product Demos",
          description:
            "One-click screen sharing lets sales reps showcase products in real-time, with recording capabilities for later review and training.",
        },
        {
          icon: <TrendingUp className="w-8 h-8 text-purple-500" />,
          title: "Smart Cart Recovery",
          description:
            "Behavioral triggers send personalized offers to abandoned carts, with A/B tested messaging that adapts to customer segments and purchase history.",
        },
        {
          icon: <BarChart3 className="w-8 h-8 text-orange-500" />,
          title: "Conversion Analytics",
          description:
            "Track chat-to-purchase rates, identify high-value conversations, and optimize agent performance with detailed conversation analytics and revenue attribution.",
        },
      ],
    },
    enterprise: {
      title: "Enterprise Chat",
      icon: <Building className="w-6 h-6" />,
      description:
        "Scale secure communication across global teams with enterprise-grade features and compliance",
      features: [
        {
          icon: <Shield className="w-8 h-8 text-blue-500" />,
          title: "Zero-Trust Security",
          description:
            "SOC 2 Type II + ISO 27001 certified with end-to-end encryption, SSO integration, and granular permission controls that scale from teams to enterprise.",
        },
        {
          icon: <Workflow className="w-8 h-8 text-green-500" />,
          title: "Workflow Automation",
          description:
            "Custom bots handle routine tasks, route messages based on content analysis, and integrate with 200+ enterprise tools including Salesforce, Jira, and ServiceNow.",
        },
        {
          icon: <Database className="w-8 h-8 text-purple-500" />,
          title: "Compliance & Archiving",
          description:
            "Automatic message retention, eDiscovery support, and regulatory compliance for GDPR, HIPAA, and financial services with searchable archives.",
        },
        {
          icon: <BarChart3 className="w-8 h-8 text-orange-500" />,
          title: "Team Intelligence",
          description:
            "AI-powered insights identify communication bottlenecks, measure team collaboration health, and suggest workflow optimizations based on message patterns.",
        },
      ],
    },
    developers: {
      title: "Developer Chat",
      icon: <Code className="w-6 h-6" />,
      description:
        "White-label chat infrastructure that scales from prototype to millions of users with zero DevOps overhead",
      features: [
        {
          icon: <GitBranch className="w-8 h-8 text-blue-500" />,
          title: "SDK & Components",
          description:
            "React, Vue, Angular components plus REST/GraphQL APIs. Full TypeScript support with real-time webhooks and 99.9% uptime SLA.",
        },
        {
          icon: <Palette className="w-8 h-8 text-green-500" />,
          title: "Complete Customization",
          description:
            "CSS-in-JS theming, custom emoji sets, branded notifications, and white-label domain hosting. Make it look exactly like your app.",
        },
        {
          icon: <Database className="w-8 h-8 text-purple-500" />,
          title: "Scalable Architecture",
          description:
            "Auto-scaling WebSocket infrastructure handles 10M+ concurrent connections. Built on Kubernetes with global CDN and edge caching.",
        },
        {
          icon: <Bot className="w-8 h-8 text-orange-500" />,
          title: "AI-First Platform",
          description:
            "Built-in sentiment analysis, auto-moderation, smart routing, and custom AI integrations. Train models on your conversation data.",
        },
      ],
    },
    healthcare: {
      title: "Healthcare Chat",
      icon: <Heart className="w-6 h-6" />,
      description:
        "HIPAA-compliant patient communication with clinical workflow integration and care team coordination",
      features: [
        {
          icon: <Shield className="w-8 h-8 text-blue-500" />,
          title: "HIPAA-First Design",
          description:
            "Built from the ground up for healthcare with BAA agreements, encrypted PHI handling, audit trails, and role-based access controls for care teams.",
        },
        {
          icon: <Calendar className="w-8 h-8 text-green-500" />,
          title: "Clinical Integration",
          description:
            "Direct EHR integration with Epic, Cerner, and Allscripts. Appointment scheduling, prescription refills, and lab results sharing in secure chat.",
        },
        {
          icon: <Headphones className="w-8 h-8 text-purple-500" />,
          title: "Telehealth Ready",
          description:
            "HIPAA-compliant video calls, screen sharing for medical images, and secure file transfer with automatic PHI detection and encryption.",
        },
        {
          icon: <Bot className="w-8 h-8 text-orange-500" />,
          title: "Clinical AI Assistant",
          description:
            "AI triage helps prioritize urgent messages, suggests clinical protocols, and provides decision support while maintaining full clinician oversight.",
        },
      ],
    },
  };
  const nearTermFeatures = [
    {
      icon: <Video className="w-5 h-5 text-blue-500" />,
      title: "Basic Video & Audio Calls",
      description:
        "One-to-one and group video/audio calls with stable connections and mute/unmute controls",
      eta: "Q4 2025",
    },
    {
      icon: <Users className="w-5 h-5 text-green-500" />,
      title: "User Authentication & Profiles",
      description:
        "Secure sign-up, login, and user profiles to manage contacts and settings",
      eta: "Q4 2025",
    },
    {
      icon: <MessageSquare className="w-5 h-5 text-purple-500" />,
      title: "Text Chat with Emojis",
      description: "Send messages alongside video calls with emoji reactions",
      eta: "Q1 2026",
    },
    {
      icon: <ScreenShare className="w-5 h-5 text-orange-500" />,
      title: "Screen Sharing",
      description:
        "Share your screen during calls for presentations or collaborative work",
      eta: "Q1 2026",
    },
    {
      icon: <Calendar className="w-5 h-5 text-teal-500" />,
      title: "Basic Scheduling",
      description:
        "Schedule video calls and send calendar invites to participants",
      eta: "Q2 2026",
    },
    {
      icon: <Shield className="w-5 h-5 text-red-500" />,
      title: "End-to-End Encryption",
      description:
        "Ensure that calls and chats are encrypted for security and privacy",
      eta: "Q2 2026",
    },
  ];

  const futureFeatures = [
    {
      icon: <Camera className="w-5 h-5 text-indigo-500" />,
      title: "AR/VR Integration",
      description:
        "Immersive chat experiences with spatial audio and 3D avatars",
      category: "Innovation",
    },
    {
      icon: <Database className="w-5 h-5 text-cyan-500" />,
      title: "Blockchain Verification",
      description:
        "Cryptographic message verification and decentralized identity",
      category: "Security",
    },
    {
      icon: <Share2 className="w-5 h-5 text-pink-500" />,
      title: "Social Media Integration",
      description: "Unified inbox for Instagram, Twitter, LinkedIn, and SMS",
      category: "Integration",
    },
    {
      icon: <Filter className="w-5 h-5 text-yellow-500" />,
      title: "Smart Content Filtering",
      description:
        "AI-powered spam detection and content moderation with custom rules",
      category: "AI",
    },
    {
      icon: <Tag className="w-5 h-5 text-emerald-500" />,
      title: "Dynamic Message Tagging",
      description: "Automatic categorization and smart folder organization",
      category: "Organization",
    },
    {
      icon: <Archive className="w-5 h-5 text-slate-500" />,
      title: "Advanced Analytics Suite",
      description:
        "Predictive engagement metrics and conversation trend analysis",
      category: "Analytics",
    },
  ];
  const features = chatUseCases[activeUseCase]?.features;

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
                <span>Chat Module - Industry-Specific Intelligence</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
                One Chat Engine,
                <span className="bg-gradient-to-r from-blue-600 via-gray-700 to-purple-600 bg-clip-text text-transparent">
                  {" "}
                  Infinite Adaptations
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                From AI shopping assistants to HIPAA-compliant patient care –
                the same powerful infrastructure automatically configures itself
                for your industry's unique needs and compliance requirements.
              </p>

              {/* Industry Selector */}
              <div className="flex flex-wrap gap-3 mb-8">
                {Object.entries(chatUseCases).map(([key, useCase]) => (
                  <button
                    key={key}
                    onClick={() => setActiveUseCase(key as ChatUseCaseKey)}
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
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Explore All Modules</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-3xl shadow-2xl p-8 transform rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <MessageSquare className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-900">
                        AI Assistant
                      </div>
                      <div className="text-xs text-gray-500">
                        How can I help you today?
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <Users className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-900">
                        Team Channel
                      </div>
                      <div className="text-xs text-gray-500">
                        3 new messages
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-purple-50 rounded-lg">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                      <Video className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-900">
                        Video Call
                      </div>
                      <div className="text-xs text-gray-500">Join meeting</div>
                    </div>
                  </div>
                </div>
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
              Industry-specific AI intelligence built into the same reliable
              chat infrastructure that powers millions of conversations daily.
            </p>
          </div>

          {/* Industry Tabs for Features */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(chatUseCases).map(([key, useCase]) => (
              <button
                key={key}
                onClick={() => setActiveUseCase(key as ChatUseCaseKey)}
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

      {/* Enhanced Roadmap Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              The Future of Chat is Here
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're pushing the boundaries of what's possible in conversational
              experiences. Here's what's coming next.
            </p>
          </div>

          {/* Near-term Features */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Coming Soon
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {nearTermFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-3 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg">
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-bold text-gray-900">
                          {feature.title}
                        </h4>
                        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full font-medium">
                          {feature.eta}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm">
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
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Future Vision
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {futureFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full font-medium">
                      {feature.category}
                    </span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Early Access CTA */}
          <div className="mt-16 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Shape the Future with Us
              </h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Join our beta program to get early access to new features,
                provide feedback, and help us build the next generation of
                conversational experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                  Join Beta Program
                </button>
                <button className="border border-blue-200 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200">
                  Request Feature
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mockup Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Works Everywhere You Do
            </h2>
            <p className="text-xl text-gray-600">
              Native performance across all devices with offline sync and smart
              caching
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Desktop Mockup */}
            <div className="text-center">
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-200">
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-12 mb-6">
                  <Monitor className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-600 mb-2">
                    Desktop Powerhouse
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Full keyboard shortcuts and multi-window support
                  </p>
                </div>
                <div className="space-y-2">
                  {[
                    "Multi-window conversations",
                    "Drag & drop file sharing",
                    "Rich text formatting",
                    "Screen sharing & recording",
                  ].map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-center space-x-2 text-sm text-gray-500"
                    >
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Mockup */}
            <div className="text-center">
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-200">
                <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-12 mb-6">
                  <Smartphone className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-600 mb-2">
                    Mobile First
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Native app performance in your browser
                  </p>
                </div>
                <div className="space-y-2">
                  {[
                    "Offline message sync",
                    "Smart push notifications",
                    "Voice message support",
                    "Biometric security",
                  ].map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-center space-x-2 text-sm text-gray-500"
                    >
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
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
            Join thousands who've already discovered the joy of effortless,
            intelligent messaging.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button
              onClick={() => onNavigate("concept")}
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>View All Modules</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
          <div className="text-center">
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm opacity-80">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 flex-shrink-0" />
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
