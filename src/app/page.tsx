"use client";
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
  Headphones,
  Database,
  Workflow,
  GitBranch,
  Camera,
  Share2,
  Filter,
  Tag,
  Archive,
  Play,
  X,
  Layers,
  Settings,
  Cpu,
  Cloud,
  View,
  ViewIcon,
  Watch,
  VideoIcon,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";
// @ts-ignore
const ConceptPage = () => {
  const [currentPage, setCurrentPage] = useState("concept");
  const [selectedModule, setSelectedModule] = useState<{
    emoji: string;
    title: string;
    tagline: string;
    description: string;
    features: string[];
    status: string;
    color: string;
  } | null>(null);
  const modules = [
    {
      emoji: "💬",
      title: "Chat",
      tagline: "active messaging with real-time sync",
      description:
        "Built for seamless cross-platform messaging with WebRTC integration for crystal-clear communication.",
      features: [
        "Real-time messaging",
        "beautiful reactions",
        "Cross-platform sync",
        "WebRTC support",
      ],
      status: "In Development",
      color: "orange",
    },
    {
      emoji: "📹",
      title: "HD Video Calls",
      tagline: "WebRTC-powered video calling with Flutter optimization",
      description:
        "1-on-1 and group video calls with Flutter WebRTC integration, background blur, screen recording, and bandwidth optimization.",
      features: [
        "WebRTC Integration",
        "Group Video Calls",
        "Screen Recording",
        "Background Effects",
      ],
      status: "Coming Q1 2026",
      color: "blue",
    },
    {
      emoji: "👥",
      title: "Social Features",
      tagline: "Complete social networking with friend management",
      description:
        "Add friends, manage requests, create groups, and build social connections with comprehensive user management and discovery features.",
      features: [
        "Friend Management",
        "Group Creation",
        "User Discovery",
        "Social Engagement",
      ],
      status: "Coming Q2 2026",
      color: "green",
    },
    {
      emoji: "📱",
      title: "Mobile Optimized",
      tagline: "Native iOS and Android performance",
      description:
        "Optimized Flutter codebase for both iOS and Android with push notifications, offline sync, and native performance.",
      features: [
        "iOS & Android",
        "Push Notifications",
        "Offline Sync",
        "Native Performance",
      ],
      status: "Available",
      color: "orange",
    },
    {
      emoji: "🔒",
      title: "Security Suite",
      tagline: "Enterprise-grade security without complexity",
      description:
        "End-to-end encryption, secure file sharing, user blocking/reporting, and compliance with app store guidelines.",
      features: [
        "E2E Encryption",
        "Secure File Sharing",
        "User Safety",
        "Compliance Ready",
      ],
      status: "Coming Q3 2026",
      color: "red",
    },
    {
      emoji: "🎨",
      title: "Customization",
      tagline: "Dark mode, themes, and localization support",
      description:
        "Complete customization with dark/light modes, RTL support, multiple languages, and customizable themes for global audiences.",
      features: ["Dark Mode", "RTL Support", "Multi-language", "Custom Themes"],
      status: "Available",
      color: "indigo",
    },
    {
      emoji: "📁",
      title: "Media Sharing",
      tagline: "Rich media with Firebase Storage integration",
      description:
        "Send photos, videos, audio messages with Firebase Storage integration, camera integration, and optimized media compression.",
      features: [
        "Photo & Video",
        "Audio Messages",
        "Camera Integration",
        "Cloud Storage",
      ],
      status: "Available",
      color: "cyan",
    },
    {
      emoji: "⚡",
      title: "Performance",
      tagline: "FAANG-level optimization and scalability",
      description:
        "Built by former FAANG developers with advanced optimizations like video compression, memoization, and disk caching for millions of users.",
      features: [
        "Video Compression",
        "Memory Optimization",
        "Disk Caching",
        "Scalable Architecture",
      ],
      status: "Available",
      color: "yellow",
    },
  ];

  const roadmapItems = [
    {
      quarter: "Q4 2025",
      title: "Smart Chat Launch",
      description:
        "Core messaging with AI assistant and real-time collaboration features",
      status: "in-progress",
      features: [
        "Real-time messaging",
        "Smart notifications",
        "File sharing",
        "AI assistance",
      ],
    },
    {
      quarter: "Q1 2026",
      title: "Video & Voice Calling",
      description:
        "HD video calls with advanced features and bandwidth optimization",
      status: "planned",
      features: [
        "4K video quality",
        "Screen recording",
        "Virtual backgrounds",
        "Noise cancellation",
      ],
    },
    {
      quarter: "Q2 2026",
      title: "Team Collaboration Suite",
      description:
        "Advanced team spaces, project management, and workflow automation",
      status: "planned",
      features: [
        "Project channels",
        "File collaboration",
        "Workflow automation",
        "Advanced permissions",
      ],
    },
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: 19,
      originalPrice: 29,
      description: "Perfect for small teams and personal use",
      features: [
        "Smart Chat Module",
        "Up to 10 users",
        "5GB storage",
        "Basic support",
        "Weekly updates",
      ],
      highlighted: false,
    },
    {
      name: "Professional",
      price: 49,
      originalPrice: 79,
      description: "Everything you need for growing teams",
      features: [
        "All Starter features",
        "HD Video Calls",
        "Up to 100 users",
        "50GB storage",
        "Priority support",
        "Advanced analytics",
      ],
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: 99,
      originalPrice: 149,
      description: "Advanced features for large organizations",
      features: [
        "All Professional features",
        "Unlimited users",
        "500GB storage",
        "Enterprise security",
        "24/7 support",
        "Custom integrations",
      ],
      highlighted: false,
    },
  ];

  return (
    <div className="text-white bg-black">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0"></div>
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <div className="inline-flex items-center space-x-2 bg-purple-900/50 border border-purple-500/30 text-purple-200 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4" />
            <span>Built by Former FAANG Developers • 500,000+ Downloads</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent leading-tight mb-6">
            Dope <span className="text-purple-600">Chat</span>
            <br />
            <span className="text-4xl md:text-6xl">
              Production-Ready Communication
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            Don't spend 15 months building what we've perfected. Get a
            battle-tested video chat platform with full suport, and proven
            scalability from day one.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={() => setCurrentPage("chat")}
              className="bg-gradient-to-r from-purple-600 to-purple-900 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
            >
              <MessageSquare className="w-5 h-5" />
              <Link href={"/chat"}>Explore Dope Chat</Link>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => setCurrentPage("#")}
              className="border text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
            >
              <VideoIcon className="w-5 h-5" />
              <Link href={"#demo"}>See It In Action</Link>
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-purple-400 mb-1">
                500,000+
              </div>
              <div className="text-sm text-gray-400">Downloads</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-blue-400 mb-1">
                150,000+
              </div>
              <div className="text-sm text-gray-400">Developers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-green-400 mb-1">
                5,500+
              </div>
              <div className="text-sm text-gray-400">Customers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-yellow-400 mb-1">
                $1M+
              </div>
              <div className="text-sm text-gray-400">Revenue</div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-400">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>Full Supported and maintained</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>WebRTC integrated</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>Money-back guarantee</span>
            </div>
          </div>
        </div>
      </section>
      <div className="border-t items-center mx-4 md:mx-20 border-purple-600"></div>

      {/* What We Offer Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What <span className="text-purple-700">We Offer</span>
          </h2>
          <p className="text-gray-300 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
            Get everything you need to build a powerful video and chat app —
            ready to launch, fully customizable, and built to scale.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-gray-900/50 border border-gray-600/50 rounded-2xl p-6 shadow-2xl hover:shadow-purple-500/20 hover:border-purple-700 transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 cursor-pointer relative overflow-hidden">
              <h3 className="text-2xl font-bold text-white mb-4">
                Fully Customizable Code
              </h3>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                Get instant access to the codebase of our Flutter Video and Chat
                App to save time and money on design and development.
              </p>
            </div>

            <div className="group bg-gray-900/50 border border-gray-600/50 rounded-2xl p-6 shadow-2xl hover:shadow-purple-500/20 hover:border-purple-700 transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 cursor-pointer relative overflow-hidden">
              <h3 className="text-2xl font-bold text-white mb-4">
                Launch Instantly
              </h3>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                Save years of hard work and energy by starting with a
                high-quality implementation right away.
              </p>
            </div>

            <div className="group bg-gray-900/50 border border-gray-600/50 rounded-2xl p-6 shadow-2xl hover:shadow-purple-500/20 hover:border-purple-700 transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 cursor-pointer relative overflow-hidden">
              <h3 className="text-2xl font-bold text-white mb-4">
                Save Money & Scale
              </h3>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                Save hundreds of thousands in design, development, and
                management costs, and scale to millions of users from day 1 with
                FAANG-quality code.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="border-t items-center mx-4 md:mx-20 border-purple-600"></div>

      {/* Modules Section */}
      <section className="bg-black py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Modular <span className="text-purple-700">by Design</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Each module is engineered to solve specific challenges. Mix and
              match to create your perfect communication ecosystem with
              continuous updates.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {modules.map((module, index) => (
              <div
                key={index}
                onClick={() => setSelectedModule(module)}
                className="group bg-gray-900/50 border border-gray-600/50 rounded-2xl p-6 shadow-2xl hover:shadow-purple-500/20 hover:border-purple-700 transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 cursor-pointer relative overflow-hidden"
              >
                {/* Animated background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/0 to-blue-900/0 group-hover:from-purple-900/10 group-hover:to-blue-900/10 transition-all duration-500 rounded-2xl"></div>

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-3xl group-hover:scale-125 transition-transform duration-500 group-hover:rotate-12">
                      {module.emoji}
                    </div>
                    <span
                      className={`text-xs px-2 py-1 rounded-full font-medium transition-all duration-300 ${
                        module.status === "Available"
                          ? "bg-green-900/50 text-green-300 border border-green-500/30 group-hover:bg-green-800/70 group-hover:text-green-200"
                          : "bg-blue-900/50 text-blue-300 border border-blue-500/30 group-hover:bg-blue-800/70 group-hover:text-blue-200"
                      }`}
                    >
                      {module.status === "Available" ? "Live" : module.status}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-200 transition-colors duration-300">
                    {module.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4 group-hover:text-gray-200 transition-colors duration-300">
                    {module.tagline}
                  </p>
                  <div className="flex items-center text-purple-400 text-sm font-medium group-hover:text-purple-300 transition-colors duration-300">
                    <span>Explore features</span>
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t items-center mx-4 md:mx-20 border-purple-600"></div>

      {/* App Showcase Section */}
      <section id="demo" className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              See It <span className="text-purple-600">In Action</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Beautiful, native mobile experience built with Flutter for iOS and
              Android
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Chat Screen Mockup */}
            <div className="group relative">
              <div className="bg-gray-800/50 border border-gray-600/50 rounded-3xl p-4 shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 transform hover:-translate-y-4 hover:scale-105">
                <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl aspect-[9/16] flex flex-col">
                  <img src="img-6.png" alt="" className="rounded-2xl" />
                </div>

                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/10 group-hover:to-blue-500/10 rounded-3xl transition-all duration-500"></div>
              </div>
              <div className="text-center mt-4">
                <h3 className="text-white font-semibold mb-1">
                  Real-time Chat
                </h3>
                <p className="text-gray-400 text-sm">
                  Instant messaging with emoji support
                </p>
              </div>
            </div>

            {/* Video Call Screen Mockup */}
            <div className="group relative">
              <div className="bg-gray-800/50 border border-gray-600/50 rounded-3xl p-4 shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 h-176">
                <div className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 rounded-2xl flex flex-col relative overflow-hidden">
                  <img src="img-3.jpg" alt="" className="rounded-2xl" />
                </div>

                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 rounded-3xl transition-all duration-500"></div>
              </div>
              <div className="text-center mt-4">
                <h3 className="text-white font-semibold mb-1">
                  HD Video Calls
                </h3>
                <p className="text-gray-400 text-sm">
                  WebRTC powered video calling
                </p>
              </div>
            </div>

            {/* Settings/Profile Screen Mockup */}
            <div className="group relative">
              <div className="bg-gray-800/50 border border-gray-600/50 rounded-3xl p-4 shadow-2xl hover:shadow-green-500/20 transition-all duration-500 transform hover:-translate-y-4 hover:scale-105">
                <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl aspect-[9/16] flex flex-col">
                  <img src="img-8.png" alt="" className="rounded-2xl" />
                </div>

                <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-blue-500/0 group-hover:from-green-500/10 group-hover:to-blue-500/10 rounded-3xl transition-all duration-500"></div>
              </div>
              <div className="text-center mt-4">
                <h3 className="text-white font-semibold mb-1">
                  Voice Recording
                </h3>
                <p className="text-gray-400 text-sm">Record messages at will</p>
              </div>
            </div>
          </div>

          {/* Technical Highlights */}
          <div className="mt-16 bg-gray-800/30 border border-gray-700/30 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-2">
                  500,000+
                </div>
                <div className="text-gray-300 text-sm">App Downloads</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">
                  150,000+
                </div>
                <div className="text-gray-300 text-sm">Active Developers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400 mb-2">
                  99.9%
                </div>
                <div className="text-gray-300 text-sm">Uptime Guarantee</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="border-t items-center mx-4 md:mx-20 border-purple-600"></div>

      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              What Our{" "}
              <span className="text-purple-700">Clients Are Saying</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Real feedback from developers who've shipped products using our
              codebase
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-gray-900/50 border border-gray-600/50 rounded-2xl p-6 shadow-2xl hover:shadow-purple-500/20 hover:border-purple-700 transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 cursor-pointer relative overflow-hidden">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-400">
                  Speed & Costs
                </span>
              </div>
              <blockquote className="text-gray-300 mb-6 leading-relaxed">
                "We built our solution in just a matter of days. This was a
                project estimated to 15 months by several development teams.
                It's insane how much money and time it saved us!"
              </blockquote>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                  D
                </div>
                <div className="ml-3">
                  <div className="text-white font-semibold">David Falkman</div>
                  <div className="text-gray-400 text-sm">Startup Founder</div>
                </div>
              </div>
            </div>

            <div className="group bg-gray-900/50 border border-gray-600/50 rounded-2xl p-6 shadow-2xl hover:shadow-purple-500/20 hover:border-purple-700 transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 cursor-pointer relative overflow-hidden">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-400">Code Quality</span>
              </div>
              <blockquote className="text-gray-300 mb-6 leading-relaxed">
                "Really impressed by how well organized the code is. Easy to add
                new components. I'm a newcomer and it was easy to understand.
                The Firebase integration is amazing!"
              </blockquote>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                  J
                </div>
                <div className="ml-3">
                  <div className="text-white font-semibold">José Ruiz</div>
                  <div className="text-gray-400 text-sm">Mobile Developer</div>
                </div>
              </div>
            </div>

            <div className="group bg-gray-900/50 border border-gray-600/50 rounded-2xl p-6 shadow-2xl hover:shadow-purple-500/20 hover:border-purple-700 transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 cursor-pointer relative overflow-hidden">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-400">Performance</span>
              </div>
              <blockquote className="text-gray-300 mb-6 leading-relaxed">
                "The code is amazingly clean and elegant. Learned about
                optimizations like video compression, memoization, and disk
                caching. The app is crazy fast!"
              </blockquote>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                  N
                </div>
                <div className="ml-3">
                  <div className="text-white font-semibold">Nicholas Besyk</div>
                  <div className="text-gray-400 text-sm">Senior Engineer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="border-t items-center mx-4 md:mx-20 border-purple-600"></div>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-br from-black via-purple-900/20 to-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Subscription <span className="text-purple-700">Plans</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Get continuous updates, new features, and dedicated support with
              your subscription
            </p>
            <div className="inline-flex items-center space-x-2 bg-red-900/50 border border-red-500/30 text-red-200 px-4 py-2 rounded-full text-sm font-medium mt-4">
              <Clock className="w-4 h-4" />
              <span>Early Bird: 35% Off All Plans</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div
                key={index}
                className={`relative bg-gray-800/50 border rounded-2xl p-8 shadow-2xl transition-all duration-300 ${
                  tier.highlighted
                    ? "border-purple-500/50 transform scale-105 shadow-purple-500/20"
                    : "border-gray-600/50 hover:border-purple-500/30 hover:shadow-purple-500/10"
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {tier.name}
                  </h3>
                  <p className="text-gray-300 mb-6">{tier.description}</p>

                  <div className="mb-4">
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-white">
                        ${tier.price}
                      </span>
                      <span className="text-lg text-gray-400 ml-1">/month</span>
                    </div>
                    <div className="text-center mt-2">
                      <span className="text-sm text-gray-500 line-through">
                        Regular: ${tier.originalPrice}/month
                      </span>
                      <div className="text-green-400 font-semibold text-sm">
                        Save ${tier.originalPrice - tier.price} monthly
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-200 ${
                    tier.highlighted
                      ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-lg transform hover:scale-105"
                      : "bg-gray-700 text-gray-200 hover:bg-gray-600 border border-gray-600"
                  }`}
                >
                  Start Free Trial
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Module Modal */}
      {selectedModule && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 border border-gray-600 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">{selectedModule.emoji}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      {selectedModule.title}
                    </h3>
                    <p className="text-gray-300">{selectedModule.tagline}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedModule(null)}
                  className="text-gray-400 hover:text-gray-200 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="mb-6">
                <span
                  className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                    selectedModule.status === "Available"
                      ? "bg-green-900/50 text-green-300 border border-green-500/30"
                      : "bg-blue-900/50 text-blue-300 border border-blue-500/30"
                  }`}
                >
                  {selectedModule.status === "Available"
                    ? "✨ Available Now"
                    : `🚧 ${selectedModule.status}`}
                </span>
              </div>

              <p className="text-gray-300 mb-8 leading-relaxed">
                {selectedModule.description}
              </p>

              <div className="mb-8">
                <h4 className="text-lg font-semibold text-white mb-4">
                  Key Features
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedModule.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                {selectedModule.status === "Available" && (
                  <button
                    onClick={() => setCurrentPage("chat")}
                    className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
                  >
                    <span>Try Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
                <button
                  onClick={() => setSelectedModule(null)}
                  className="border border-gray-600 text-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-all duration-200"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConceptPage;
