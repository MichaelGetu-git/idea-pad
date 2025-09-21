"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  Video,
  MessageSquare,
  Shield,
  CheckCircle,
  Smartphone,
  Code,
  Globe,
  Bell,
  Palette,
  BarChart3,
  Database,
  Workflow,
  Camera,
  ChevronDown,
  VideoIcon,
  Download,
  Play,
  LockIcon,
} from "lucide-react";
import Link from "next/link";

const VideoChat = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("mobile");

  const appScreenshots = [
    {
      id: 1,
      title: "Mobile Video Call Interface",
      category: "Mobile UI",
      image: "video-call.png",
      description:
        "Clean, modern mobile video calling interface with intuitive controls",
      features: ["HD Video Quality", "Touch Controls", "Responsive Design"],
    },
    {
      id: 2,
      title: "Chat Integration",
      category: "Chat UI",
      image: "chat-ui.png",
      description:
        "Seamless text chat alongside video calls with emoji reactions",
      features: ["Real-time Chat", "File Sharing", "Emoji Reactions"],
    },
    {
      id: 3,
      title: "In chat File Sharing",
      category: "File Sharing UI",
      image: "file-sharing.png",
      description:
        "Professional desktop video conferencing with screen sharing capabilities",
      features: ["Multi-participant", "Screen Share", "Chat Integration"],
    },
    {
      id: 3,
      title: "User Profile",
      category: "Profile UI",
      image: "profile-ui.png",
      description:
        "Professional desktop video conferencing with screen sharing capabilities",
      features: ["Multi-participant", "Screen Share", "Chat Integration"],
    },
    {
      id: 4,
      title: "Settings & Customization",
      category: "Customization UI",
      image: "user-customization.png",
      description:
        "Comprehensive settings panel for audio, video, and app preferences",
      features: ["Block User", "Add User", "Privacy Controls"],
    },
  ];

  const plan = {
    name: "Pro",
    price: "$399",
    description: "One-time yearly payment.",
    features: ["Unlimited Projects", "Premium Support", "1 Year Access"],
    productId: 987654, // 🔁 Replace with actual Paddle product ID
    popular: true,
  };

  const handleCheckout = () => {
    if (typeof window !== "undefined" && window.Paddle) {
      if (typeof window !== "undefined" && window.Paddle) {
        window.Paddle.Setup({ vendor: 123456 }); // Replace 123456 with your vendor ID
        window.Paddle.Checkout.open({
          product: plan.productId, // Access the first plan's productId
          successCallback: () => {
            alert("✅ Purchase successful!");
          },
        });
      } else {
        console.error("Paddle is not initialized or unavailable.");
      }
    }
  };

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
                <VideoIcon className="w-7 h-7 pr-2" /> Premium Video Chat Source
                Code
              </span>
            </div>
          </div>
          <div className="max-w-5xl mx-auto mb-5">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-white tracking-tight mb-4">
              Professional Video Chat App
            </h1>
            <div className="text-4xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-purple-700 via-purple-600 to-purple-700 bg-clip-text text-transparent">
              Ready to Deploy
            </div>
          </div>
          <div className="max-w-3xl mx-auto mb-7">
            <p className="text-md sm:text-lg text-gray-300 font-extralight leading-relaxed mx-auto max-w-2xl">
              Get a complete, production-ready video chat application with
              beautiful UI, robust features, and clean code. Perfect for
              developers, agencies, and businesses looking to integrate video
              calling capabilities.
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
              Beautiful, pixel-perfect interfaces designed for modern video
              communication
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

          <div
            id="demos"
            className="grid grid-cols-1 md:grid-cols-2 gap-8 rounded-lg p-3 md:p-5"
          >
            {appScreenshots.map((screenshot, index) => (
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
                  <div className="relative w-[350px] aspect-[9/16] group">
                    {/* Screenshot - background layer */}
                    <div>
                      <img
                        src={screenshot.image}
                        alt="Screenshot"
                        className="w-full p-4 object-cover rounded-xl"
                      />
                    </div>

                    {/* Frame - foreground layer */}
                    <img
                      src="/frame.png"
                      alt="Phone frame"
                      className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none"
                    />

                    {/* Hover overlay with blur & button */}
                    <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl">
                      <Link
                        href={"/pricing"}
                        className="px-6 py-2 bg-purple-600 text-white font-semibold rounded-lg shadow-lg hover:bg-purple-700 transition"
                      >
                        Get Code
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <p className="text-gray-300 text-sm mb-4">
                        {screenshot.description}
                      </p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {screenshot.features.map((feature, i) => (
                        <span
                          key={i}
                          className="text-xs bg-purple-800 font-extralight text-gray-300 px-2 py-1 rounded-lg border border-gray-700"
                        >
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
        {/* Subtle overlay for depth */}
        <div className="absolute inset-0"></div>

        <div className="relative max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">
              Core <span className="text-purple-800">Features</span>
            </h2>
            <p className="text-lg font-extralight text-gray-300 max-w-2xl mx-auto">
              Everything you need to launch your video chat application
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Code className="w-8 h-8 text-purple-400" />,
                title: "Clean Source Code",
                desc: "Well-documented, maintainable code",
              },
              {
                icon: <Smartphone className="w-8 h-8 text-purple-400" />,
                title: "Mobile Responsive",
                desc: "Works perfectly on all devices",
              },
              {
                icon: <Video className="w-8 h-8 text-purple-400" />,
                title: "HD Video Calls",
                desc: "Crystal clear video communication",
              },
              {
                icon: <MessageSquare className="w-8 h-8 text-purple-400" />,
                title: "Real-time Chat",
                desc: "Integrated messaging system",
              },
              {
                icon: <Shield className="w-8 h-8 text-purple-400" />,
                title: "Secure & Private",
                desc: "End-to-end encrypted calls",
              },
              {
                icon: <Palette className="w-8 h-8 text-purple-400" />,
                title: "Customizable UI",
                desc: "Easy to brand and customize",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group relative bg-purple-950/10 border-t-5 border border-purple-800/40 rounded-xl p-6 
                     hover:border-purple-700 hover:shadow-lg hover:shadow-purple-700/20 
                     transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="mb-4 transition-transform duration-300 group-hover:scale-110">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm font-extralight">{feature.desc}</p>
                <div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 
                          transition duration-500 bg-gradient-to-r from-purple-800/20 to-purple-800/20 blur-lg -z-10"
                ></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Roadmap Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">
              The Future of{" "}
              <span className="text-purple-600">Chat is Here</span>
            </h2>
            <p className="text-lg font-extralight text-gray-300 max-w-2xl mx-auto">
              We're pushing the boundaries of what's possible in conversational
              experiences. Here's what's coming next.
            </p>
          </div>

          {/* Future Vision */}
          <div>
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
                  className="group relative bg-purple-950/10 border-t-5 border border-purple-800/40 rounded-xl p-6 
                     hover:border-purple-700 hover:shadow-lg hover:shadow-purple-700/20 
                     transition-all duration-300 transform hover:-translate-y-2"
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
                  <p className="text-gray-300 font-extralight text-sm">{feature.description}</p>
                  {/* Glow effect on hover */}
                  <div
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 
                          transition duration-500 bg-gradient-to-r from-purple-800/20 to-purple-800/20 blur-lg -z-10"
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-10">
        <div className="flex flex-col items-center justify-center p-8">
          <div className="relative bg-gray-900/50 border border-purple-600 shadow-2xl shadow-purple-600/20 rounded-2xl p-8 w-full max-w-md">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-[#9c40f4] text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </span>
            </div>

            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">
                {plan.name}
              </h3>
              <div className="text-4xl font-bold text-purple-400 mb-2">
                {plan.price}
                <span className="text-lg text-gray-400"> /year</span>
              </div>
              <p className="text-gray-300 text-sm">{plan.description}</p>
            </div>

            <ul className="space-y-4 mb-8">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center text-gray-300 text-sm">
                  <span className="w-4 h-4 mr-3 text-green-400">✔️</span>
                  {feature}
                </li>
              ))}
            </ul>

            <button
              onClick={handleCheckout}
              className="w-full py-4 px-6 rounded-xl font-semibold transition-all duration-200 transform hover:scale-[1.02] bg-[#9c40f4] hover:shadow-lg hover:shadow-purple-500/50 text-white"
            >
              <Download className="w-4 h-4 inline mr-2" />
              Get Code Now
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900/30 via-purple-800/20 to-blue-900/30">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Launch Your Video Chat App?
          </h2>
          <p className="text-lg font-extralight text-gray-300 mb-8">
            Join hundreds of developers who've already built successful video
            chat applications with our code
          </p>

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
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>Instant download</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>30-day money back</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>Free updates</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VideoChat;
