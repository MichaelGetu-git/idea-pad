"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  ArrowRight,
  Video as VideoIconActual,
  MessageSquare,
  MessageCircle,
  Shield,
  Smartphone,
  Code,
  Palette,
  BarChart3,
  Database,
  Workflow,
  Camera,
  Globe,
  Bell,
  ChevronDown,
  VideoIcon,
  Download,
  Lock as LockIcon,
  Play,
  Calendar,
  LayoutDashboard,
  CalendarCheck,
  ClipboardList,
  Search,
  Star,
  Users,
  Image,
  User,
  Moon,
  Mic,
  Languages,
  Zap,
  TrendingUp,
  Cpu,
  Bot,
  Smile,
  ShoppingCart,
  CheckSquare,
  Package,
  Cloud,
  PieChart,
  DollarSign,
  CreditCard,
  MapPin,
  Car,
  Clock,
} from "lucide-react";
import { ModuleData } from "../lib/modules/types";

type IconMap = Record<string, React.ElementType>;

const featureIcons: IconMap = {
  Code,
  Smartphone,
  Video: VideoIconActual,
  MessageSquare,
  MessageCircle,
  Shield,
  Palette,
  Bot,
  Bell,
  Smile,
  Globe,
  Database,
  CalendarCheck,
  ClipboardList,
  Search,
  Star,
  Users,
  Image,
  User,
  Moon,
  ShoppingCart,
  CheckSquare,
  Package,
  PieChart,
  DollarSign,
  CreditCard,
  MapPin,
  Car,
  Clock,
};

const futureIcons: IconMap = {
  Camera,
  Database,
  Bell,
  Workflow,
  BarChart3,
  Globe,
  Mic,
  Translate: Languages,
  Zap,
  Users,
  TrendingUp,
  Lock: LockIcon,
  Cpu,
  Video: VideoIconActual,
  Cloud,
};

const heroBadgeIcons: IconMap = {
  VideoIcon,
  Code,
  Smartphone,
  MessageSquare,
  Bot,
  Calendar,
  MessageCircle,
  LayoutDashboard,
  CreditCard,
  Car,
};

export default function ModuleDetail({ data }: { data: ModuleData }) {
  const router = useRouter();

  const PlanButton = () => (
    <button
      onClick={() => {
        if (typeof window !== "undefined" && (window as any).Paddle) {
          (window as any).Paddle.Setup({ vendor: 123456 });
          (window as any).Paddle.Checkout.open({
            product: data.plan.productId,
            successCallback: () => {
              alert("✅ Purchase successful!");
            },
          });
        } else {
          console.error("Paddle is not initialized or unavailable.");
        }
      }}
      className="w-full py-4 px-6 rounded-xl font-semibold transition-all duration-200 transform hover:scale-[1.02] bg-[#9c40f4] hover:shadow-lg hover:shadow-purple-500/50 text-white"
    >
      <Download className="w-4 h-4 inline mr-2" />
      Get Code Now
    </button>
  );

  const HeroBadgeIcon = heroBadgeIcons[data.hero.badgeIconName] ?? VideoIcon;

  return (
    <div className="text-white bg-[#0a0a16] font-segoe pt-2">
      {/* Hero Section */}
      <div className="relative min-h-screen overflow-hidden">
        <div
          className="absolute inset-0 h-[700px] bg-gradient-to-b from-[#592986] via-purple-450 to-transparent"
          style={{
            clipPath: "polygon(38% 0%, 62% 0%, 97% 100%, 3% 100%)",
          }}
        />
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-18 pt-3 md:pt-3 text-center">
          <div className="mb-5">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/20 border border-purple-400/30 backdrop-blur-sm">
              <span className="flex items-center justify-between text-purple-200 text-sm font-medium">
                <HeroBadgeIcon className="w-7 h-7 pr-2" /> {data.hero.badgeText}
              </span>
            </div>
          </div>
          <div className="max-w-5xl mx-auto mb-5">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-white tracking-tight mb-4">
              {data.hero.titleLine1}
            </h1>
            <div className="text-4xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-purple-700 via-purple-600 to-purple-700 bg-clip-text text-transparent">
              {data.hero.titleLine2}
            </div>
          </div>
          <div className="max-w-3xl mx-auto mb-7">
            <p className="text-md sm:text-lg text-gray-300 font-extralight leading-relaxed mx-auto max-w-2xl">
              {data.hero.description}
            </p>
          </div>
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md mx-auto">
            <Link
              href="#demos"
              className="flex items-center justify-center px-8 py-4 bg-[#9c40f4] hover:shadow-lg hover:shadow-purple-500/50 text-white font-semibold rounded-xl transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <span>View Live Demo</span>
              <Play className="ml-2 w-5 h-5" />
            </Link>

            <Link
              href={"#pricing"}
              className="flex items-center justify-center px-8 py-4 bg-gray-800/70 hover:bg-gray-700/70 text-white font-semibold rounded-xl border border-gray-600/40 backdrop-blur-sm transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              <span>Buy Now</span>
              <ChevronDown className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* App Screenshots Showcase */}
      <section className="py-3">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">
              See What You're <span className="text-purple-600">Getting</span>
            </h2>
            <p className="text-lg font-extralight text-gray-300 max-w-2xl mx-auto">
              Beautiful, pixel-perfect interfaces designed for modern applications.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 pb-8 md:pb-12">
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
                Our App
              </h1>
              <p className="text-sm text-gray-400 mt-2">
                Explore beautifully crafted UI components
              </p>
            </div>

            <Link
              href="#pricing"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-purple-700/40 bg-purple-800/20 text-white hover:bg-purple-700/30 font-semibold backdrop-blur-md shadow-sm hover:shadow-purple-600/20 transition-all duration-200 hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-purple-600"
            >
              <LockIcon className="w-5 h-5 text-purple-300 group-hover:text-white transition-colors duration-200" />
              <span className="group-hover:underline decoration-purple-300/40">
                Get Code
              </span>
            </Link>
          </div>

          <div id="demos" className="grid grid-cols-1 md:grid-cols-2 gap-8 rounded-lg p-3 md:p-5">
            {data.screenshots.map((screenshot, index) => (
              <div
                key={index}
                className="group border border-purple-700/20 rounded-2xl overflow-hidden shadow-2xl hover:shadow-purple-900/20 hover:border-purple-600/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4 pt-3 md:pt-7 px-0 md:px-10">
                  <div className="">
                    <h3 className="text-sm md:text-xl font-bold text-white mb-2">
                      {screenshot.title}
                    </h3>
                  </div>
                  <span className="text-xs bg-purple-900/50 text-purple-300 px-2 py-1 rounded-full font-medium border border-purple-500/30 whitespace-nowrap">
                    {screenshot.category}
                  </span>
                </div>
                <div className="flex justify-center">
                  <div className="relative w-[360px] aspect-[9/16] group rounded-xl transition-transform duration-500 group-hover:scale-[1.02]">
                    <div>
                      <img src={screenshot.image} alt="Screenshot" className="w-full p-4.5 object-cover rounded-xl" />
                    </div>
                    <img src="/frame.png" alt="Phone frame" className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none" />
                    <div className="absolute inset-0 z-20 flex items-center md:items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-t from-black/70 via-black/30 to-transparent rounded-xl">
                      <div className="pb-6 md:pb-0 py-2">
                        <Link
                          href={"#pricing"}
                          aria-label="Get Code"
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold shadow-lg shadow-purple-900/30 ring-1 ring-white/20 hover:from-purple-500 hover:to-indigo-500 transform transition-all duration-300 hover:scale-105"
                        >
                          <Download className="w-4 h-4" />
                          <span>Get Code</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <p className="text-gray-300 text-sm mb-4">{screenshot.description}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {screenshot.features.map((feature, i) => (
                        <span key={i} className="text-xs bg-purple-800 font-extralight text-gray-300 px-2 py-1 rounded-lg border border-gray-700">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-10 relative overflow-hidden">
        <div className="absolute inset-0"></div>

        <div className="relative max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">
              Core <span className="text-purple-800">Features</span>
            </h2>
            <p className="text-lg font-extralight text-gray-300 max-w-2xl mx-auto">
              Everything you need to launch your {data.name}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.features.map((feature, index) => {
              const IconCmp = featureIcons[feature.iconName] ?? Code;
              return (
                <div
                  key={index}
                  className="group relative bg-purple-950/10 border-t-5 border border-purple-800/40 rounded-xl p-6 
                     hover:border-purple-700 hover:shadow-lg hover:shadow-purple-700/20 
                     transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="mb-4 transition-transform duration-300 group-hover:scale-110">
                    <IconCmp className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm font-extralight">{feature.desc}</p>
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 
                          transition duration-500 bg-gradient-to-r from-purple-800/20 to-purple-800/20 blur-lg -z-10"></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enhanced Roadmap Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">
              The Future of <span className="text-purple-600">{data.name}</span> is Here
            </h2>
            <p className="text-lg font-extralight text-gray-300 max-w-2xl mx-auto">
              We're pushing the boundaries of what's possible in conversational
              experiences. Here's what's coming next.
            </p>
          </div>

          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.future.map((feature, index) => {
                const IconCmp = futureIcons[feature.iconName] ?? Camera;
                return (
                  <div
                    key={index}
                    className="group relative bg-purple-950/10 border-t-5 border border-purple-800/40 rounded-xl p-6 
                     hover:border-purple-700 hover:shadow-lg hover:shadow-purple-700/20 
                     transition-all duration-300 transform hover:-translate-y-2"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 bg-gray-700/50 rounded-lg group-hover:scale-110 transition-transform duration-300 border border-gray-600/50">
                        <IconCmp className="w-5 h-5 text-indigo-400" />
                      </div>
                      <span className="text-xs bg-gray-700/50 text-gray-300 px-2 py-1 rounded-full font-medium border border-gray-600/30">
                        {feature.category}
                      </span>
                    </div>
                    <h4 className="font-bold text-white mb-2">{feature.title}</h4>
                    <p className="text-gray-300 font-extralight text-sm">{feature.description}</p>
                    <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 
                          transition duration-500 bg-gradient-to-r from-purple-800/20 to-purple-800/20 blur-lg -z-10"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-10">
        <div className="flex flex-col items-center justify-center p-8">
          <div className="relative bg-gray-900/50 border border-purple-600 shadow-2xl shadow-purple-600/20 rounded-2xl p-8 w-full max-w-md">
            {data.plan.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-[#9c40f4] text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
            )}

            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">{data.plan.name}</h3>
              <div className="text-4xl font-bold text-purple-400 mb-2">
                {data.plan.price}
                <span className="text-lg text-gray-400"> {data.plan.cadenceLabel ?? ""}</span>
              </div>
              <p className="text-gray-300 text-sm">{data.plan.description}</p>
            </div>

            <ul className="space-y-4 mb-8">
              {data.plan.features.map((feature, i) => (
                <li key={i} className="flex items-center text-gray-300 text-sm">
                  <span className="w-4 h-4 mr-3 text-green-400">✔️</span>
                  {feature}
                </li>
              ))}
            </ul>

            <PlanButton />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900/30 via-purple-800/20 to-blue-900/30">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">{data.cta.title}</h2>
          <p className="text-lg font-extralight text-gray-300 mb-8">{data.cta.description}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href={"#pricing"}
              className="bg-[#9c40f4] hover:shadow-lg hover:shadow-purple-500/50 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center"
            >
              <Download className="w-5 h-5 mr-2" />
              Get Complete Package
            </Link>
            <button
              onClick={() => router.push("/")}
              className="bg-gray-800 hover:bg-gray-700 border border-gray-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center"
            >
              <span>View All Products</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-400">
            {data.cta.bullets.map((b, i) => (
              <div key={i} className="flex items-center space-x-2">
                <CheckIcon />
                <span>{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function CheckIcon() {
  return <span className="w-4 h-4 mr-0.5 text-green-400">✔️</span>;
}


