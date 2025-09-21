import { CheckCircle,  ShoppingCart,  Code, Heart, Building } from 'lucide-react';
import { useState } from 'react';


const UseCaseTabs = () => {
    const [activeTab, setActiveTab] = useState<keyof typeof useCases>('ecommerce');
  
    const useCases = {
      ecommerce: {
        title: "E-commerce & Customer Support",
        icon: <ShoppingCart className="w-8 h-8 text-purple-500" />,
        description: "Transform your online store with real-time customer support that converts browsers into buyers.",
        features: [
          "Live shopping assistance - guide customers through purchases",
          "Video product demonstrations - show don't just tell",
          "Instant order support - resolve issues before cart abandonment", 
          "Multi-language support - serve global customers naturally"
        ],
        metrics: {
          stat1: "47% higher conversion",
          stat2: "3x faster resolution", 
          stat3: "89% customer satisfaction"
        },

      },
      enterprise: {
        title: "Enterprise & Remote Teams",
        icon: <Building className="w-8 h-8 text-blue-500" />,
        description: "Scale communication across departments, time zones, and projects with enterprise-grade reliability.",
        features: [
          "Secure team collaboration - SOC 2 compliant communication",
          "Department-specific channels - organized by project, team, location",
          "Executive briefing rooms - high-stakes meetings made simple",
          "Integration with existing tools - Slack, Teams, Salesforce ready"
        ],
        metrics: {
          stat1: "60% fewer meetings",
          stat2: "99.9% uptime SLA",
          stat3: "500+ team support"
        },

      },
      developers: {
        title: "Developers & SaaS Integration",
        icon: <Code className="w-8 h-8 text-green-500" />,
        description: "Embed powerful communication directly into your application with our developer-friendly APIs.",
        features: [
          "Plug-and-play SDK - integrate in minutes, not months",
          "White-label customization - your brand, your experience",
          "Scalable infrastructure - from MVP to millions of users",
          "Real-time webhooks - sync with your existing systems"
        ],
        metrics: {
          stat1: "5-minute integration",
          stat2: "99.99% API uptime",
          stat3: "50+ SDKs available"
        },
        
      },
      healthcare: {
        title: "Healthcare & Professional Services", 
        icon: <Heart className="w-8 h-8 text-red-500" />,
        description: "HIPAA-compliant communication for sensitive consultations and professional client relationships.",
        features: [
          "HIPAA-compliant video consultations - secure by design",
          "Appointment scheduling integration - seamless booking flow",
          "Document sharing with encryption - safe file exchange",
          "Recording and transcript capabilities - for compliance and notes"
        ],
        metrics: {
          stat1: "HIPAA compliant",
          stat2: "256-bit encryption",
          stat3: "24/7 support"
        },
      }
    };
  
    const tabKeys = Object.keys(useCases) as Array<keyof typeof useCases>;
  
    return (
      <div>
        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabKeys.map((key: keyof typeof useCases) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === key
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {useCases[key].icon}
              <span className="hidden sm:inline">{useCases[key].title.split(' & ')[0]}</span>
              <span className="sm:hidden">{useCases[key].title.split(' ')[0]}</span>
            </button>
          ))}
        </div>
  
        <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                {useCases[activeTab].icon}
                <h3 className="text-2xl font-bold text-gray-900">{useCases[activeTab].title}</h3>
              </div>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {useCases[activeTab].description}
              </p>
              <div className="space-y-4 mb-8">
                {useCases[activeTab].features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <div className="text-xl font-bold text-blue-600 mb-1">{useCases[activeTab].metrics.stat1}</div>
                  <div className="text-xs text-gray-500">improvement</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-xl">
                  <div className="text-xl font-bold text-purple-600 mb-1">{useCases[activeTab].metrics.stat2}</div>
                  <div className="text-xs text-gray-500">performance</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-xl">
                  <div className="text-xl font-bold text-green-600 mb-1">{useCases[activeTab].metrics.stat3}</div>
                  <div className="text-xs text-gray-500">reliability</div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200 mb-6">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-blue-300 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                    {useCases[activeTab].icon}
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-4">See It In Action</h4>
                  <p className="text-gray-600 mb-6">
                    Interactive demo tailored for {useCases[activeTab].title.toLowerCase()}
                  </p>
                  <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                    Coming Soon
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default UseCaseTabs;