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
} from "lucide-react";
import { useState } from "react";
import UseCaseTabs from "./useCase";

const ConceptPage = ({ onNavigate }) => {
  const [selectedModule, setSelectedModule] = useState(null);

  const modules = [
    {
      emoji: "💬",
      title: "Chat",
      tagline: "Chat's themed with beauty, style and intent",
      description:
        "More than just messaging - understanding, beautiful, and themed.",
      features: [
        "Real-time chat",
        "Smart Notifications",
        "Reaction emojie acess",
        "Thread Management",
      ],
      status: "In Development",
      color: "blue",
    },
    {
      emoji: "📹",
      title: "HD Video Calls",
      tagline: "Crystal-clear video that adapts to any bandwidth",
      description:
        "Enterprise-grade video calling with smart bandwidth optimization, recording, and virtual backgrounds.",
      features: [
        "4K Video Quality",
        "Background Blur",
        "Screen Recording",
        "Bandwidth Optimization",
      ],
      status: "Coming Soon",
      color: "green",
    },
    {
      emoji: "👥",
      title: "Team Spaces",
      tagline: "Organized collaboration for any group size or structure",
      description:
        "Dynamic workspaces that scale from small teams to enterprise departments with advanced permissions.",
      features: [
        "Role-based Access",
        "Project Channels",
        "File Collaboration",
        "Activity Streams",
      ],
      status: "Q2 2026",
      color: "purple",
    },
    {
      emoji: "🔒",
      title: "Privacy Shield",
      tagline: "Enterprise-grade security that doesn't slow you down",
      description:
        "Zero-trust security architecture with end-to-end encryption and compliance certifications.",
      features: [
        "E2E Encryption",
        "SOC 2 Compliance",
        "GDPR Ready",
        "Audit Trails",
      ],
      status: "Q3 2026",
      color: "red",
    },
    {
      emoji: "⚡",
      title: "Quick Connect",
      tagline: "One-click joining from any device or platform",
      description:
        "Seamless connection experience with smart device detection and automatic quality optimization.",
      features: [
        "Universal Links",
        "QR Code Join",
        "Guest Access",
        "Device Switching",
      ],
      status: "In Future plans",
      color: "yellow",
    },
    {
      emoji: "🎨",
      title: "White-Label",
      tagline: "Fully customizable to match your brand identity",
      description:
        "Complete visual customization with CSS-in-JS theming and branded domain hosting.",
      features: [
        "Custom Themes",
        "Brand Colors",
        "Logo Integration",
        "Domain Hosting",
      ],
      status: "In Future plans",
      color: "indigo",
    },
    {
      emoji: "🔗",
      title: "API Integration",
      tagline: "Embed seamlessly into your existing workflow",
      description:
        "Developer-first APIs with SDKs, webhooks, and 200+ pre-built integrations.",
      features: [
        "REST & GraphQL APIs",
        "Real-time Webhooks",
        "SDK Libraries",
        "Zapier Integration",
      ],
      status: "In Future plans",
      color: "cyan",
    },
    {
      emoji: "📊",
      title: "Analytics Hub",
      tagline: "Deep insights into communication patterns and engagement",
      description:
        "AI-powered analytics that reveal communication trends, bottlenecks, and optimization opportunities.",
      features: [
        "Usage Analytics",
        "Performance Metrics",
        "AI Insights",
        "Custom Dashboards",
      ],
      status: "In Future plans",
      color: "orange",
    },
  ];

  const roadmapItems = [
    {
      quarter: "Q4 2025",
      title: "Chat Launch",
      description:
        "Core messaging with AI assistant, real-time sync, and industry-specific intelligence",
      status: "in-progress",
      features: [
        "Real-time chat",
        "Smart Notifications",
        "Reaction emojie acess",
        "Thread Management",
      ],
    },
    {
      quarter: "Q4 2025",
      title: "Video & Voice Calling",
      description:
        "HD video calls with bandwidth optimization, recording, and virtual backgrounds",
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
        "Advanced team spaces, file sharing, project management, and workflow automation",
      status: "planned",
      features: [
        "Project channels",
        "File collaboration",
        "Workflow bots",
        "Advanced permissions",
      ],
    },
    {
      quarter: "Q3 2026",
      title: "Enterprise Security & Compliance",
      description:
        "Advanced security features, compliance certifications, and enterprise management",
      status: "planned",
      features: [
        "Advanced encryption",
        "Compliance dashboard",
        "Enterprise SSO",
        "Audit controls",
      ],
    },
    {
      quarter: "Q4 2026",
      title: "AI & Automation Platform",
      description:
        "Custom AI assistants, workflow automation, and predictive analytics",
      status: "planned",
      features: [
        "Custom AI training",
        "Workflow automation",
        "Predictive insights",
        "Integration marketplace",
      ],
    },
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: 49,
      originalPrice: 79,
      description: "Perfect for small teams and growing businesses",
      features: [
        "Smart Chat Module",
        "Up to 50 users",
        "5GB file storage",
        "Basic analytics",
        "Email support",
      ],
      highlighted: false,
    },
    {
      name: "Professional",
      price: 99,
      originalPrice: 149,
      description: "Everything you need for professional teams",
      features: [
        "All Starter features",
        "HD Video Calls",
        "Up to 500 users",
        "50GB file storage",
        "Advanced analytics",
        "Priority support",
        "Custom branding",
      ],
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: 199,
      originalPrice: 299,
      description: "Advanced features for large organizations",
      features: [
        "All Professional features",
        "Unlimited users",
        "1TB file storage",
        "Enterprise security",
        "Custom integrations",
        "Dedicated support",
        "SLA guarantee",
      ],
      highlighted: false,
    },
  ];

  const getStatusColor = (status) => {
    if (status === "Available") return "bg-green-100 text-green-800";
    if (status.includes("Q")) return "bg-blue-100 text-blue-800";
    return "bg-gray-100 text-gray-600";
  };

  const ModuleModal = ({ module, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-8">
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center space-x-4">
              <div className="text-4xl">{module.emoji}</div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {module.title}
                </h3>
                <p className="text-gray-600">{module.tagline}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="mb-6">
            <span
              className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                module.status
              )}`}
            >
              {module.status === "Available"
                ? "✨ Available Now"
                : `🚧 Coming ${module.status}`}
            </span>
          </div>

          <p className="text-gray-700 mb-8 leading-relaxed">
            {module.description}
          </p>

          <div className="mb-8">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">
              Key Features
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {module.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            {module.status === "Available" && (
              <button
                onClick={() => onNavigate("chat")}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <span>Try Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
            <button
              onClick={onClose}
              className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-200"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4" />
            <span>The Future of Business Communication</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-gray-600 to-blue-800 bg-clip-text text-transparent leading-tight mb-6">
            Communication
            <br />
            <span className="text-4xl md:text-6xl">That Adapts to You</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            From AI-powered chat to enterprise security, from developer APIs to
            healthcare compliance – build the perfect communication solution for{" "}
            <em>your</em> unique industry and workflow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={() => onNavigate("chat")}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Explore Smart Chat</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-500">
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
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>SOC 2 certified</span>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Built for Your Industry
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you're running an online store, managing a remote team,
              building the next big app, or caring for patients - our
              intelligent modules adapt to your unique needs and compliance
              requirements.
            </p>
          </div>

          <UseCaseTabs />
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Modular by Design
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Each module is engineered to solve specific challenges. Mix and
              match to create your perfect communication ecosystem.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {modules.map((module, index) => (
              <div
                key={index}
                onClick={() => setSelectedModule(module)}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl border border-gray-100 hover:border-blue-200 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                    {module.emoji}
                  </div>
                  <span
                    className={`text-xs px-2 py-1 rounded-full font-medium ${getStatusColor(
                      module.status
                    )}`}
                  >
                    {module.status === "Available" ? "Live" : module.status}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {module.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {module.tagline}
                </p>
                <div className="flex items-center text-blue-600 text-sm font-medium">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Roadmap Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Development Roadmap
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Transparent development timeline with regular updates and
              community feedback integration
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>

            <div className="space-y-12">
              {roadmapItems.map((item, index) => (
                <div
                  key={index}
                  className="relative flex items-start space-x-8"
                >
                  {/* Timeline dot */}
                  <div
                    className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center ${
                      item.status === "in-progress"
                        ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                        : "bg-white border-4 border-blue-500 text-blue-500"
                    }`}
                  >
                    {item.status === "in-progress" ? (
                      <Cpu className="w-6 h-6" />
                    ) : (
                      <Calendar className="w-6 h-6" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
                          {item.quarter}
                        </span>
                        <h3 className="text-xl font-bold text-gray-900 mt-1">
                          {item.title}
                        </h3>
                      </div>
                      {item.status === "in-progress" && (
                        <span className="bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full">
                          🚀 In Progress
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {item.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center space-x-2"
                        >
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-gray-700">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Pricing Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Early Bird Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Lock in lifetime pricing before our official launch. No surprises,
              no hidden fees.
            </p>
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-100 to-pink-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium mt-4">
              <Clock className="w-4 h-4" />
              <span>Limited Time: 40% Off All Plans</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl p-8 shadow-lg border-2 transition-all duration-300 ${
                  tier.highlighted
                    ? "border-blue-500 transform scale-105 shadow-2xl"
                    : "border-gray-100 hover:border-blue-200 hover:shadow-xl"
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {tier.name}
                  </h3>
                  <p className="text-gray-600 mb-6">{tier.description}</p>

                  <div className="mb-4">
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-gray-900">
                        ${tier.price}
                      </span>
                      <span className="text-lg text-gray-500 ml-1">/year</span>
                    </div>
                    <div className="text-center mt-2">
                      <span className="text-sm text-gray-500 line-through">
                        Regular: ${tier.originalPrice}/year
                      </span>
                      <div className="text-green-600 font-semibold text-sm">
                        Save ${tier.originalPrice - tier.price} - Limited Time
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
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-200 ${
                    tier.highlighted
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg transform hover:scale-105"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  Start Your Journey
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">All plans include:</p>
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>14-day money-back guarantee</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>No setup fees</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Cancel anytime</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Free migration assistance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedModule && (
        <ModuleModal
          module={selectedModule}
          onClose={() => setSelectedModule(null)}
        />
      )}
    </div>
  );
};

export default ConceptPage;
