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
  ChevronDown,
  AppWindow,
  PlugZapIcon,
  Plug2Icon,
  Layers2,
  Grid,
  Users2,
  Rocket,
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
      tagline: "Instant conversations without limits",
      description:
        "Stay connected with seamless messaging and calling designed for modern communication.",
      features: [
        "Real-time sync",
        "Group & private chats",
        "Voice & video calls",
        "Cross-device support",
      ],
      status: "In Development",
      color: "orange",
    },
    {
      emoji: "❤️",
      title: "Dating",
      tagline: "Meaningful connections, redefined",
      description:
        "Discover new people, match with confidence, and build relationships in a safe and engaging way.",
      features: [
        "Smart matching",
        "Profile discovery",
        "Interactive chats",
        "Privacy controls",
      ],
      status: "Comming Soon",
      color: "pink",
    },
    {
      emoji: "🏠",
      title: "Real Estate",
      tagline: "Find your next home or property",
      description:
        "Browse properties, connect with agents, and explore real estate opportunities with immersive tools.",
      features: [
        "Property search",
        "Virtual tours",
        "Agent connection",
        "Saved favorites",
      ],
      status: "Comming Soon",
      color: "green",
    },
    {
      emoji: "👥",
      title: "Social Network",
      tagline: "A community built for everyone",
      description:
        "Connect, share, and engage with a social platform that adapts to your lifestyle.",
      features: [
        "User profiles",
        "News feeds",
        "Group creation",
        "Content sharing",
      ],
      status: "Comming Soon",
      color: "cyan",
    },
    {
      emoji: "🛒",
      title: "Ecommerce",
      tagline: "Sell smarter, shop better",
      description:
        "Create stores, manage products, and enjoy secure transactions in a modern shopping experience.",
      features: [
        "Product catalogs",
        "Secure payments",
        "Cart & checkout",
        "Customer reviews",
      ],
      status: "Comming Soon",
      color: "purple",
    },
    {
      emoji: "💰",
      title: "Finance",
      tagline: "Smarter ways to manage money",
      description:
        "Track expenses, plan budgets, and make informed financial decisions with ease.",
      features: [
        "Expense tracking",
        "Budget planning",
        "Analytics",
        "Secure accounts",
      ],
      status: "Comming Soon",
      color: "yellow",
    },
    {
      emoji: "🍔",
      title: "Food Delivery",
      tagline: "Your favorite meals, delivered fast",
      description:
        "Browse menus, order with a tap, and get food delivered right to your door.",
      features: [
        "Restaurant search",
        "Live tracking",
        "Secure payments",
        "Order history",
      ],
      status: "Comming Soon",
      color: "red",
    },
    {
      emoji: "🏋️",
      title: "Fitness",
      tagline: "Stay active, stay healthy",
      description:
        "Personalized workouts, progress tracking, and health insights to support your fitness journey.",
      features: [
        "Workout plans",
        "Progress tracking",
        "Nutrition tips",
        "Community support",
      ],
      status: "Comming Soon",
      color: "teal",
    },
  ];

  return (
    <div className="text-white bg-[#0a0a16] font-serif">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-2">
        <div className="relative min-h-screen overflow-hidden">
          <div
            className="absolute inset-0 h-[700px] bg-gradient-to-b from-[#592986] via-purple-450 to-transparent"
            style={{
              clipPath: "polygon(38% 0%, 62% 0%, 97% 100%, 3% 100%)",
            }}
          />
          <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-18 pt-14 md:pt-22 text-center">
            <div className="mb-8">
              <div className="inline-flex items-center space-x-2 bg-purple-900/50 border border-purple-500/30 text-purple-200 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Sparkles className="w-4 h-4" />
                <span>
                  Built by Former FAANG Developers • 500,000+ Downloads
                </span>
              </div>
            </div>
            <div className="max-w-5xl mx-auto mb-8">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-semibold font-bold text-white leading-tight mb-4">
                Ready-to-Launch App Solutions
              </h1>
              <div className="text-4xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-700 via-purple-600 to-purple-700 bg-clip-text text-transparent">
                For Every Industry
              </div>
            </div>
            <div className="max-w-3xl mx-auto mb-12">
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                Get professional, production-ready mobile apps for any industry.
                Built by former FAANG developers with clean code, beautiful UI,
                and enterprise-grade features.
                <span className="block mt-2 text-purple-300 font-medium">
                  Launch in days, not months.
                </span>
              </p>
            </div>
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button
                onClick={() => setCurrentPage("chat")}
                className="bg-gradient-to-r from-purple-600 to-purple-900 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
              >
                <MessageSquare className="w-5 h-5" />
                <Link href={"/chat"}>View Dope Chat</Link>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => setCurrentPage("#")}
                className="border text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
              >
                <AppWindow className="w-5 h-5" />
                <Link href={"#modules"}>Explore Our Apps</Link>
              </button>
            </div>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 text-base font-medium">
            <div className="flex items-center space-x-2 group cursor-pointer">
              <Layers2 className="w-8 h-8 text-purple-400 group-hover:scale-125 transition-transform duration-300" />
              <span className="text-gray-300 text-lg group-hover:text-purple-400 transition-colors duration-300">
                One platform, endless apps
              </span>
            </div>

            <div className="flex items-center space-x-2 group cursor-pointer">
              <Rocket className="w-8 h-8 text-purple-400 group-hover:scale-125 transition-transform duration-300" />
              <span className="text-gray-300 text-lg group-hover:text-purple-400 transition-colors duration-300">
                Scalable & future-proof foundation
              </span>
            </div>

            <div className="flex items-center space-x-2 group cursor-pointer">
              <Users2 className="w-8 h-8 text-purple-400 group-hover:scale-125 transition-transform duration-300" />
              <span className="text-gray-300 text-lg group-hover:text-purple-400 transition-colors duration-300">
                Built for real people, not just code
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-gradient-to-b from-transparent to-gray-900/20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-[#a855f7] to-[#7c3aed] bg-clip-text text-transparent">
              Our Apps?
            </span>
          </h2>
          <p className="text-gray-300 text-xl md:text-2xl mb-16 max-w-3xl mx-auto">
            Get everything you need to launch successful apps across any
            industry — ready to deploy, fully customizable, and built to scale
            to millions of users.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="group backdrop-blur-sm border border-gray-600/30 rounded-3xl p-8 shadow-2xl hover:shadow-purple-500/20 hover:border-purple-500/50 transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 cursor-pointer relative overflow-hidden">
              <div className="absolute inset-0 group-hover:from-purple-900/20 group-hover:to-blue-900/20 transition-all duration-500 rounded-3xl"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-[#7c3aed] to-[#a855f7] rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-500">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Production-Ready Code
                </h3>
                <p className="text-gray-300 text-md leading-relaxed">
                  Get instant access to clean, well-documented source code.
                  Built by FAANG engineers with industry best practices and
                  scalable architecture.
                </p>
              </div>
            </div>

            <div className="group backdrop-blur-sm border border-gray-600/30 rounded-3xl p-8 shadow-2xl hover:shadow-purple-500/20 hover:border-purple-500/50 transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 cursor-pointer relative overflow-hidden">
              <div className="absolute inset-0 group-hover:from-purple-900/20 group-hover:to-blue-900/20 transition-all duration-500 rounded-3xl"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-[#7c3aed] to-[#a855f7] rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-500">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Launch in Days
                </h3>
                <p className="text-gray-300 text-md leading-relaxed">
                  Skip months of development. Our apps are ready to customize
                  and deploy, saving you time and allowing you to focus on your
                  business logic.
                </p>
              </div>
            </div>

            <div className="group backdrop-blur-sm border border-gray-600/30 rounded-3xl p-8 shadow-2xl hover:shadow-purple-500/20 hover:border-purple-500/50 transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 cursor-pointer relative overflow-hidden">
              <div className="absolute inset-0 group-hover:from-purple-900/20 group-hover:to-blue-900/20 transition-all duration-500 rounded-3xl"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-[#7c3aed] to-[#a855f7] rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-500">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Scale to Millions
                </h3>
                <p className="text-gray-300 text-md leading-relaxed">
                  Built for enterprise scale with optimized performance, robust
                  architecture, and proven ability to handle millions of users
                  from day one.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section id="modules" className="py-20 bg-[#0a0a16]">
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
                className="group relative bg-purple-950/10 border border-purple-800/40 rounded-xl p-6 
                     hover:border-purple-500 hover:shadow-lg hover:shadow-purple-700/30 
                     transition-all duration-300 transform hover:-translate-y-2"
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
      <section className="text-center py-20 px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
          Build Faster. Launch Smarter.
        </h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10">
          Our platform gives you ready-to-use modules for chat, video, social,
          and more — crafted with scalability and design in mind. Save weeks of
          development and focus on what makes your product truly unique.
        </p>
        <p className="text-xl font-semibold text-purple-400">
          Built for makers. Loved by teams.
        </p>
      </section>
    </div>
  );
};

export default ConceptPage;
