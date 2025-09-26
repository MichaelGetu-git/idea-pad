"use client";
import {
  ArrowRight,
  MessageSquare,
  Zap,
  Sparkles,
  Code,
  TrendingUp,
  AppWindow,
  Layers2,
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
      slug: "videochat",
      emoji: "🎥",
      title: "Video Chat",
      tagline: "HD video calls with chat and screen share",
      description:
        "Production-ready video calling with messaging, screen share, and modern UI.",
      features: ["HD Calls", "Realtime Chat", "Screen Share", "Profiles"],
      status: "Active",
      color: "purple",
    },
    {
      slug: "aichat",
      emoji: "🤖",
      title: "AI Chat",
      tagline: "ChatGPT-powered assistant for your app",
      description:
        "Fully functional AI assistant with OpenAI integration and Firebase backend.",
      features: ["GPT Responses", "Media Messages", "Push Notifications", "Profiles"],
      status: "Active",
      color: "blue",
    },
    {
      slug: "chatapp",
      emoji: "💬",
      title: "Chat App",
      tagline: "Realtime messaging for iOS & Android",
      description:
        "Private and group chat with media, notifications, and Firebase backend.",
      features: ["Private Chat", "Group Chat", "Media", "Notifications"],
      status: "Active",
      color: "green",
    },
    {
      slug: "dashboard",
      emoji: "📊",
      title: "Dashboard",
      tagline: "Analytics, CRM, tasks — on mobile",
      description:
        "Business dashboard with charts, sales, customers, tasks and notifications.",
      features: ["Charts", "Sales Feed", "CRM", "Tasks"],
      status: "Coming Soon",
      color: "cyan",
    },
    {
      slug: "finance",
      emoji: "💰",
      title: "Finance",
      tagline: "Portfolio, banking & analytics",
      description:
        "Fintech app with investments, banking, charts, and alerts.",
      features: ["Net Worth", "Portfolio", "Banking", "Alerts"],
      status: "Coming Soon",
      color: "yellow",
    },
    {
      slug: "taxi",
      emoji: "🚕",
      title: "Taxi",
      tagline: "Passenger & driver apps with maps",
      description:
        "Taxi booking, driver tracking, chat, payments and notifications.",
      features: ["Booking", "Tracking", "Chat", "Payments"],
      status: "Coming Soon",
      color: "orange",
    },
  ];

  const moduleImages: Record<string, string> = {
    videochat: "/video-chat/video-chat.png",
    aichat: "/ai-chat/ai-chat.png",
    chatapp: "/chat/chat-app.png",
    dashboard: "/dashboard/dashboard.png",
    finance: "/finance/finance.png",
    taxi: "/taxi/taxi.png",
  };

  return (
    <div className="text-white bg-[#0a0a16] font-segoe">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-2">
        <div className="relative min-h-screen overflow-hidden">
          <div
            className="absolute inset-0 h-[700px] bg-gradient-to-b from-[#592986] via-purple-450 to-transparent"
            style={{
              clipPath: "polygon(38% 0%, 62% 0%, 97% 100%, 3% 100%)",
            }}
          />
          <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-18 pt-3 md:pt-3 text-center">
            <div className="mb-3">
              <div className="inline-flex items-center space-x-2 bg-purple-900/50 border border-purple-500/30 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <Sparkles className="w-4 h-4 text-purple-700" />
                <span>
                  Built by Former FAANG Developers • 500,000+ Downloads
                </span>
              </div>
            </div>
            <div className="max-w-5xl mx-auto mb-8">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-white tracking-tight mb-4">
                Ready to Launch App Solutions
              </h1>
              <div className="text-4xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-700 via-purple-600 to-purple-700 bg-clip-text text-transparent">
                For Every Industry
              </div>
            </div>
            <div className="max-w-3xl mx-auto mb-12">
              <p className="text-md sm:text-lg text-gray-300 font-extralight leading-relaxed">
                Get professional, production-ready mobile apps for any industry.
                Built by former FAANG developers with clean code, beautiful UI,
                and enterprise-grade features.
                <span className="block mt-2 text-purple-300 font-medium">
                  Launch in days, not months.
                </span>
              </p>
            </div>
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-5">
              <Link
                href={"/modules/chatapp"}
                className="bg-gradient-to-r from-purple-600 to-purple-900 text-white px-8 py-4 rounded-full font-semibold text-md hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
              >
                <MessageSquare className="w-5 h-5" />
                <span>View Dope Chat</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <button
                onClick={() => setCurrentPage("#")}
                className="border text-white px-8 py-4 rounded-full font-semibold text-md hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
              >
                <AppWindow className="w-5 h-5" />
                <Link href={"#modules"}>Explore Our Apps</Link>
              </button>
            </div>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 text-base font-medium">
            <div className="flex items-center space-x-2 group cursor-pointer">
              <Layers2 className="w-8 h-8 text-purple-400 group-hover:scale-125 transition-transform duration-300" />
              <span className="text-white text-md group-hover:text-purple-400 transition-colors duration-300">
                One platform, endless apps
              </span>
            </div>

            <div className="flex items-center space-x-2 group cursor-pointer">
              <Rocket className="w-8 h-8 text-purple-400 group-hover:scale-125 transition-transform duration-300" />
              <span className="text-white text-md group-hover:text-purple-400 transition-colors duration-300">
                Scalable & future-proof foundation
              </span>
            </div>

            <div className="flex items-center space-x-2 group cursor-pointer">
              <Users2 className="w-8 h-8 text-purple-400 group-hover:scale-125 transition-transform duration-300" />
              <span className="text-white text-md group-hover:text-purple-400 transition-colors duration-300">
                Built for real people, not just code
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-10 md:pt-20 pb-12 bg-gradient-to-b from-transparent to-gray-900/20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-[#a855f7] to-[#7c3aed] bg-clip-text text-transparent">
              Our Apps?
            </span>
          </h2>
          <p className="text-gray-300 text-md md:text-lg mb-16 max-w-3xl font-extralight mx-auto">
            Get everything you need to launch successful apps across any
            industry - ready to deploy, fully customizable, and built to scale
            to millions of users.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="group backdrop-blur-sm border border-gray-600/30 border-t-5 rounded-3xl p-8 shadow-2xl hover:shadow-purple-700/20 hover:border-purple-700 transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 cursor-pointer relative overflow-hidden">
              <div className="absolute inset-0 group-hover:from-purple-900/20 group-hover:to-blue-900/20 transition-all duration-500 rounded-3xl"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-purple-700 from-[#7c3aed] to-[#a855f7] rounded-2xl flex items-center justify-center mb-6">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 text-left">
                  Production-Ready Code
                </h3>
                <p className="text-gray-300 text-sm font-extralight leading-relaxed text-left">
                  Get instant access to clean, well-documented source code.
                  Built by FAANG engineers with industry best practices and
                  scalable architecture.
                </p>
              </div>
            </div>

            <div className="group backdrop-blur-sm border border-gray-600/30 border-t-5 rounded-3xl p-8 shadow-2xl hover:shadow-purple-700/20 hover:border-purple-700 transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 cursor-pointer relative overflow-hidden">
              <div className="absolute inset-0 group-hover:from-purple-900/20 group-hover:to-blue-900/20 transition-all duration-500 rounded-3xl"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-purple-700 from-[#7c3aed] to-[#a855f7] rounded-2xl flex items-center justify-center mb-6">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 text-left">
                  Launch in Days
                </h3>
                <p className="text-gray-300 text-sm font-extralight  max-w-3xl leading-relaxed text-left">
                  Skip months of development. Our apps are ready to customize
                  and deploy, saving you time and allowing you to focus on your
                  business logic.
                </p>
              </div>
            </div>

            <div className="group backdrop-blur-sm border border-gray-600/30 border-t-5 rounded-3xl p-8 shadow-2xl hover:shadow-purple-700/20 hover:border-purple-700 transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 cursor-pointer relative overflow-hidden">
              <div className="absolute inset-0 group-hover:from-purple-900/20 group-hover:to-blue-900/20 transition-all duration-500 rounded-3xl"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-purple-700 from-[#7c3aed] to-[#a855f7] rounded-2xl flex items-center justify-center mb-6">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 text-left">
                  Scale to Millions
                </h3>
                <p className="text-gray-300 text-sm font-extralight leading-relaxed text-left">
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
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-white mb-6">
              Modular <span className="text-purple-700">by Design</span>
            </h2>
            <p className="text-gray-300 text-md md:text-lg mb-16 max-w-3xl font-extralight mx-auto">
              Each module is engineered to solve specific challenges. Mix and
              match to create your perfect communication ecosystem with
              continuous updates.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
            {modules.map((module, index) => (
              <Link
                key={index}
                href={`/modules/${module.slug}`}
                className="group relative bg-purple-950/10 border border-purple-800/40 rounded-xl p-6 
                     hover:border-purple-500 hover:shadow-lg hover:shadow-purple-700/30 
                     transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Animated background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/0 to-blue-900/0 group-hover:from-purple-900/10 group-hover:to-blue-900/10 transition-all duration-500 rounded-2xl"></div>

                <div className="relative z-10">
                  <div className="-mx-6 -mt-6 mb-4 overflow-hidden rounded-t-xl">
                    <img
                      src={moduleImages[module.slug]}
                      alt={`${module.title} preview`}
                      className="w-full h-72 md:h-56 lg:h-56 xl:h-64 object-fit"
                    />
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
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="text-center py-20 px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
          Build Faster. <span className="text-purple-700">Launch Smarter.</span>
        </h2>
        <p className="text-md md:text-lg font-extralight text-gray-300 max-w-3xl mx-auto mb-10">
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
