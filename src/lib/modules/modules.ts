import { ModuleData } from "./types";

export const modulesRegistry: Record<string, ModuleData> = {
  videochat: {
    slug: "videochat",
    name: "Video Chat",
    hero: {
      badgeIconName: "VideoIcon",
      badgeText: "Premium Video Chat Source Code",
      titleLine1: "Professional Video Chat App",
      titleLine2: "Ready to Deploy",
      description:
        "Get a complete, production-ready video chat application with beautiful UI, robust features, and clean code. Perfect for developers, agencies, and businesses looking to integrate video calling capabilities.",
    },
    screenshots: [
      {
        id: 1,
        title: "Mobile Video Call Interface",
        category: "Mobile UI",
        image: "/video-chat/video-call.png",
        description:
          "Clean, modern mobile video calling interface with intuitive controls",
        features: ["HD Video Quality", "Touch Controls", "Responsive Design"],
      },
      {
        id: 2,
        title: "Chat Integration",
        category: "Chat UI",
        image: "/video-chat/chat-ui.png",
        description:
          "Seamless text chat alongside video calls with emoji reactions",
        features: ["Real-time Chat", "File Sharing", "Emoji Reactions"],
      },
      {
        id: 3,
        title: "In chat File Sharing",
        category: "File Sharing UI",
        image: "/video-chat/file-sharing.png",
        description:
          "Professional desktop video conferencing with screen sharing capabilities",
        features: ["Multi-participant", "Screen Share", "Chat Integration"],
      },
      {
        id: 4,
        title: "User Profile",
        category: "Profile UI",
        image: "/video-chat/profile-ui.png",
        description:
          "Professional desktop video conferencing with screen sharing capabilities",
        features: ["Multi-participant", "Screen Share", "Chat Integration"],
      },
      {
        id: 5,
        title: "Settings & Customization",
        category: "Customization UI",
        image: "/video-chat/user-customization.png",
        description:
          "Comprehensive settings panel for audio, video, and app preferences",
        features: ["Block User", "Add User", "Privacy Controls"],
      },
    ],
    features: [
      { iconName: "Code", title: "Clean Source Code", desc: "Well-documented, maintainable code" },
      { iconName: "Smartphone", title: "Mobile Responsive", desc: "Works perfectly on all devices" },
      { iconName: "Video", title: "HD Video Calls", desc: "Crystal clear video communication" },
      { iconName: "MessageSquare", title: "Real-time Chat", desc: "Integrated messaging system" },
      { iconName: "Shield", title: "Secure & Private", desc: "End-to-end encrypted calls" },
      { iconName: "Palette", title: "Customizable UI", desc: "Easy to brand and customize" },
    ],
    future: [
      { iconName: "Camera", title: "AR/VR Integration", description: "Immersive chat experiences with spatial audio and 3D avatars", category: "Innovation" },
      { iconName: "Database", title: "Blockchain Verification", description: "Cryptographic message verification and decentralized identity", category: "Security" },
      { iconName: "Bell", title: "Smart Notifications", description: "AI-powered notification filtering and priority management", category: "Intelligence" },
      { iconName: "Workflow", title: "Workflow Automation", description: "Custom bots and automated responses for team productivity", category: "Automation" },
      { iconName: "BarChart3", title: "Advanced Analytics", description: "Deep insights into communication patterns and team performance", category: "Analytics" },
      { iconName: "Globe", title: "Global Translation", description: "Real-time message translation for international teams", category: "Communication" },
    ],
    plan: {
      name: "Pro",
      price: "$399",
      description: "Annual subscription with continuous updates and premium support.",
      features: ["Unlimited Projects", "Regular Updates", "Premium Support", "Access to New Releases"],
      productId: 987654,
      popular: true,
      cadenceLabel: "/year",
    },
    cta: {
      title: "Ready to Launch Your Video Chat App?",
      description:
        "Join hundreds of developers who've already built successful video chat applications with our code",
      bullets: ["Instant download", "30-day money back", "Free updates"],
    },
  },
  aichat: {
    slug: "aichat",
    name: "AI Chat App Template",
    hero: {
      badgeIconName: "Bot",
      badgeText: "AI ChatGPT App Source Code",
      titleLine1: "Fully Functional AI Assistant",
      titleLine2: "React Native & Firebase",
      description:
        "Fully functional mobile and web ChatGPT assistant app coded in React Native. Includes OpenAI integration, Firebase backend, and advanced messaging features.",
    },
    screenshots: [
      {
        id: 1,
        title: "Chat Interface",
        category: "Messaging UI",
        image: "/ai-chat/chat-interface.png",
        description:
          "Clean, modern chat interface optimized for both mobile and web.",
        features: ["Text Messages", "Typing Indicators", "Seen Status"],
      },
      {
        id: 2,
        title: "Rich Media Messaging",
        category: "Media UI",
        image: "/ai-chat/media-messages.png",
        description:
          "Send and receive photos, videos, documents, and audio recordings.",
        features: ["Photo & Video", "Audio Recording", "File Sharing"],
      },
      {
        id: 3,
        title: "AI Responses",
        category: "AI Integration",
        image: "/ai-chat/ai-responses.png",
        description:
          "OpenAI ChatGPT integrated for instant AI-powered responses.",
        features: ["Customizable Prompts", "Auto Replies", "Message Storage"],
      },
      {
        id: 4,
        title: "User Profiles",
        category: "Profile UI",
        image: "/ai-chat/profile.png",
        description:
          "Full profile and account management with privacy controls.",
        features: ["Edit Profile", "Block Users", "Delete Account"],
      },
      {
        id: 5,
        title: "Push Notifications",
        category: "Mobile Infra",
        image: "/ai-chat/notifications.png",
        description:
          "Real-time notifications for messages and AI responses.",
        features: ["Realtime Alerts", "Reminder Notifications", "Cross-device Support"],
      },
    ],
    features: [
      { iconName: "MessageCircle", title: "Chat Messages", desc: "Unlimited text, photo, video, audio, and document messages" },
      { iconName: "Bot", title: "OpenAI Integration", desc: "Built-in GPT API assistant with customizable prompts" },
      { iconName: "Bell", title: "Push Notifications", desc: "Realtime updates for chat messages and AI replies" },
      { iconName: "Smile", title: "Interactive Chat", desc: "Emojis, in-reply to, seen status, typing indicators" },
      { iconName: "Globe", title: "Cross-platform", desc: "Optimized for iOS, Android, and Web" },
      { iconName: "Database", title: "Firebase Backend", desc: "Auth, Firestore, Storage, Functions fully integrated" },
    ],
    future: [
      { iconName: "Mic", title: "Voice Assistant Mode", description: "Full conversational voice-based AI assistant", category: "Innovation" },
      { iconName: "Translate", title: "Real-time Translation", description: "Instant translation of AI responses and chats", category: "Communication" },
      { iconName: "Zap", title: "Custom AI Agents", description: "Specialized GPT agents for different use cases", category: "AI Features" },
      { iconName: "Users", title: "Multi-user Groups", description: "Group chats with AI assistant embedded", category: "Collaboration" },
      { iconName: "TrendingUp", title: "Advanced Analytics", description: "Track user engagement and AI performance metrics", category: "Analytics" },
      { iconName: "Lock", title: "Enterprise Security", description: "End-to-end encryption and enterprise-grade compliance", category: "Security" },
    ],
    plan: {
      name: "Basic / Complete / Extended",
      price: "Custom Pricing",
      description: "Annual subscription tiers with ongoing updates and support.",
      features: [
        "Full Source Code",
        "iOS + Android + Web Client",
        "Admin Panel",
        "Firebase Backend",
        "Regular Updates",
        "Documentation",
        "Priority Support",
      ],
      productId: 456789,
      popular: true,
      cadenceLabel: "/year",
    },
    cta: {
      title: "Ready to Launch Your AI Chat App?",
      description:
        "Launch your own AI-powered ChatGPT app instantly with our production-ready codebase for React Native and Firebase.",
      bullets: ["Instant download", "Free updates", "Developer support"],
    },
  },
  booking: {
    slug: "booking",
    name: "React Native Booking App",
    hero: {
      badgeIconName: "Calendar",
      badgeText: "Premium Booking App Source Code",
      titleLine1: "Appointments App",
      titleLine2: "Built with React Native",
      description:
        "Make an appointments app in minutes with our fully customizable React Native Booking App source code. Save years of work and launch instantly with production-ready features.",
    },
    screenshots: [
      {
        id: 1,
        title: "Appointments Dashboard",
        category: "Appointments UI",
        image: "/appointments/appointments-dashboard.png",
        description:
          "Manage appointments seamlessly with a clear, modern dashboard.",
        features: ["Upcoming Appointments", "Reschedule", "Cancel Appointments"],
      },
      {
        id: 2,
        title: "Booking Flow",
        category: "Booking UI",
        image: "/appointments/booking-flow.png",
        description:
          "Smooth booking experience with professional selection, date & time picker.",
        features: ["Choose Professional", "Date & Time Picker", "Confirm Appointments"],
      },
      {
        id: 3,
        title: "Real-time Chat",
        category: "Messaging UI",
        image: "/appointments/chat.png",
        description:
          "Customers and professionals can chat in real time with rich media support.",
        features: ["Photo & Video Messaging", "Typing Indicators", "Unread Messages"],
      },
      {
        id: 4,
        title: "Ratings & Reviews",
        category: "Feedback UI",
        image: "/appointments/ratings-reviews.png",
        description:
          "Rate and review professionals for a trustworthy booking ecosystem.",
        features: ["Star Ratings", "Text Reviews", "Vendor Reputation"],
      },
      {
        id: 5,
        title: "Profile & Settings",
        category: "Profile UI",
        image: "/appointments/profile.png",
        description:
          "Full profile and account management with user settings.",
        features: ["Edit Profile", "Multi-language Support", "Dark Mode"],
      },
    ],
    features: [
      { iconName: "CalendarCheck", title: "Book Appointments", desc: "Seamless booking with date & time picker" },
      { iconName: "ClipboardList", title: "Manage Appointments", desc: "Edit, reschedule, cancel, and add notes" },
      { iconName: "MessageSquare", title: "Real-time Chat", desc: "Chat with professionals via text, photo, or video" },
      { iconName: "Search", title: "Advanced Search", desc: "Browse vendors, categories, and professionals" },
      { iconName: "Star", title: "Ratings & Reviews", desc: "Build trust with customer reviews" },
      { iconName: "Bell", title: "Push Notifications", desc: "Stay updated with reminders and changes" },
    ],
    future: [
      { iconName: "Video", title: "Video Appointments", description: "Support for live online video consultations", category: "Innovation" },
      { iconName: "Mic", title: "Audio Appointments", description: "Offer audio-only appointments for convenience", category: "Flexibility" },
      { iconName: "Globe", title: "Multi-language Support", description: "Expanded localization and RTL support", category: "Global" },
      { iconName: "Cpu", title: "AI Scheduling Assistant", description: "Smart recommendations for appointment slots", category: "Automation" },
      { iconName: "Users", title: "Team Collaboration", description: "Multi-staff management for larger businesses", category: "Scaling" },
      { iconName: "TrendingUp", title: "Analytics & Insights", description: "Detailed usage insights and appointment stats", category: "Analytics" },
    ],
    plan: {
      name: "Pro",
      price: "$399",
      description: "Annual subscription with continuous updates and support.",
      features: ["Full Source Code", "Regular Updates", "Priority Support", "Comprehensive Docs", "Optimized for iOS & Android"],
      productId: 123456,
      popular: true,
      cadenceLabel: "/year",
    },
    cta: {
      title: "Ready to Launch Your Booking App?",
      description:
        "Save years of development and launch your booking app instantly with our production-ready codebase.",
      bullets: ["Instant download", "Money back guarantee", "Free updates"],
    },
  },
  chatapp: {
    slug: "chatapp",
    name: "React Native Chat App Template",
    hero: {
      badgeIconName: "MessageCircle",
      badgeText: "React Native Chat App Source Code",
      titleLine1: "Launch Your Own Chat App",
      titleLine2: "For iOS & Android",
      description:
        "Fun and fully-functional React Native Chat App Template with real-time messaging, Firebase integration, multimedia sharing, push notifications, and 50+ screens.",
    },
    screenshots: [
      {
        id: 1,
        title: "1-on-1 Private Chat",
        category: "Messaging UI",
        image: "/chat/chat-private.png",
        description:
          "Real-time private chat experience with fast and secure delivery.",
        features: ["Realtime Messages", "Typing Indicators", "Seen Status"],
      },
      {
        id: 2,
        title: "Group Messaging",
        category: "Group Chat UI",
        image: "/chat/chat-group.png",
        description:
          "Group chats with multiple participants, reactions, and facepile seen status.",
        features: ["Realtime Group Chat", "Reactions", "Seen Facepile"],
      },
      {
        id: 3,
        title: "Media Messaging",
        category: "Media UI",
        image: "/chat/chat-media.png",
        description:
          "Send and receive photos, videos, and audio messages with full screen media viewer.",
        features: ["Photo & Video", "Audio Recording", "Gallery Viewer"],
      },
      {
        id: 4,
        title: "Profile & Friendships",
        category: "Profile UI",
        image: "/chat/chat-profile.png",
        description:
          "Profile management with friendships, friend requests, and block/report functionality.",
        features: ["Friendship Management", "Edit Profile", "Block/Report"],
      },
      {
        id: 5,
        title: "Push Notifications",
        category: "Mobile Infra",
        image: "/chat/chat-notifications.png",
        description:
          "Stay updated with real-time push notifications for chats and activities.",
        features: ["Realtime Alerts", "Unread Badges", "Cross-device Sync"],
      },
    ],
    features: [
      { iconName: "MessageSquare", title: "Private Messaging", desc: "1-on-1 real-time private chat with typing indicators and seen status" },
      { iconName: "Users", title: "Group Chat", desc: "Realtime group messaging with reactions and facepile seen indicators" },
      { iconName: "Image", title: "Rich Media", desc: "Photo, video, and audio sharing with full gallery viewer" },
      { iconName: "Bell", title: "Push Notifications", desc: "Stay updated with realtime notifications and unread message badges" },
      { iconName: "Smile", title: "Interactive Chat", desc: "Emojis, message reactions, in-reply to, forward messages" },
      { iconName: "User", title: "Profiles & Friendships", desc: "Profile management, friend requests, blocking, reporting" },
      { iconName: "Moon", title: "Dark Mode", desc: "Built-in dark mode support for comfortable viewing" },
      { iconName: "Database", title: "Firebase Backend", desc: "Auth, Firestore, Storage, Functions, and messaging integrated" },
    ],
    future: [
      { iconName: "Mic", title: "Voice & Video Calls", description: "Enable audio and video calling between users", category: "Innovation" },
      { iconName: "Globe", title: "Internationalization", description: "AI-powered translations and global chat support", category: "Communication" },
      { iconName: "Zap", title: "Stories & Status", description: "Add ephemeral stories similar to Instagram and WhatsApp", category: "Engagement" },
      { iconName: "TrendingUp", title: "Analytics", description: "User engagement and message analytics dashboard", category: "Analytics" },
      { iconName: "Lock", title: "Enterprise Security", description: "Advanced encryption and compliance features", category: "Security" },
      { iconName: "Cpu", title: "AI Moderation", description: "Automatic filtering and detection of inappropriate content", category: "AI Features" },
    ],
    plan: {
      name: "Pro",
      price: "$299",
      description: "Annual subscription with ongoing updates and developer support.",
      features: [
        "iOS + Android Apps",
        "Full Source Code",
        "Firebase Backend",
        "50+ Screens",
        "Regular Updates",
        "Documentation",
        "Developer Support",
      ],
      productId: 112233,
      popular: true,
      cadenceLabel: "/year",
    },
    cta: {
      title: "Ready to Launch Your Chat App?",
      description:
        "Launch your own feature-rich chat app instantly with our React Native template and Firebase backend integration.",
      bullets: ["Instant download", "Free updates", "Developer support"],
    },
  },
  dashboard: {
    slug: "dashboard",
    name: "React Native Dashboard Template",
    hero: {
      badgeIconName: "LayoutDashboard",
      badgeText: "Admin & Business Dashboard App",
      titleLine1: "React Native Dashboard App",
      titleLine2: "For iOS & Android",
      description:
        "Monitor real-time business metrics on your mobile phone. This template comes with analytics, charts, sales feeds, customer management, and task tracking – all powered by Firebase Auth and React Native.",
    },
    screenshots: [
      {
        id: 1,
        title: "Analytics & Charts",
        category: "Analytics UI",
        image: "/dashboard/dashboard-analytics.png",
        description: "Track KPIs and performance with real-time charts and analytics.",
        features: ["Charts", "Graphs", "Analytics Insights"],
      },
      {
        id: 2,
        title: "Sales Feed",
        category: "Sales UI",
        image: "/dashboard/dashboard-sales.png",
        description: "Get instant updates on sales activity and business growth.",
        features: ["Sales Tracking", "Revenue Updates", "Orders Feed"],
      },
      {
        id: 3,
        title: "Customer Management",
        category: "CRM UI",
        image: "/dashboard/dashboard-customers.png",
        description: "Manage customers and keep track of engagement and retention.",
        features: ["Customer Profiles", "Activity Feed", "CRM Dashboard"],
      },
      {
        id: 4,
        title: "Task Dashboard",
        category: "Productivity UI",
        image: "/dashboard/dashboard-tasks.png",
        description: "Stay on top of business tasks with a modern task dashboard.",
        features: ["Task Lists", "Status Updates", "Notifications"],
      },
      {
        id: 5,
        title: "Products Dashboard",
        category: "Products UI",
        image: "/dashboard/dashboard-products.png",
        description: "Track product performance, stock, and business metrics.",
        features: ["Product Management", "Orders Feed", "Inventory Updates"],
      },
    ],
    features: [
      { iconName: "BarChart3", title: "Charts & Analytics", desc: "Real-time insights with charts and graphs" },
      { iconName: "ShoppingCart", title: "Sales Feed", desc: "Stay updated on sales and orders" },
      { iconName: "Users", title: "Customer Management", desc: "Full CRM-style customer updates" },
      { iconName: "CheckSquare", title: "Tasks Dashboard", desc: "Track and manage team tasks" },
      { iconName: "Package", title: "Products Dashboard", desc: "Monitor inventory and product performance" },
      { iconName: "Bell", title: "Notifications", desc: "Real-time push notifications and updates" },
    ],
    future: [
      { iconName: "Cpu", title: "AI Analytics", description: "Predictive insights powered by machine learning", category: "Innovation" },
      { iconName: "Globe", title: "Multi-language Support", description: "Expand with localization and RTL support", category: "Global" },
      { iconName: "Cloud", title: "External Integrations", description: "Connect with ERP, CRM, and SaaS APIs", category: "Integration" },
      { iconName: "Zap", title: "Automations", description: "Automate reporting and notifications", category: "Productivity" },
      { iconName: "Smartphone", title: "Wearable Dashboards", description: "Extend business insights to smartwatches", category: "Expansion" },
      { iconName: "TrendingUp", title: "Advanced Reports", description: "Export and visualize advanced data reports", category: "Analytics" },
    ],
    plan: {
      name: "Personal / Developer",
      price: "$99 / $199",
      description: "Annual subscription with regular updates and support.",
      features: [
        "Full Source Code",
        "iOS & Android Optimized",
        "Firebase Auth Integration",
        "Analytics & Charts",
        "Customer & Sales Management",
        "Regular Updates",
        "Documentation",
        "Priority Support",
      ],
      productId: 789101,
      popular: true,
      cadenceLabel: "/year",
    },
    cta: {
      title: "Ready to Manage Your Business On-the-Go?",
      description:
        "Save thousands in design & development costs and launch instantly with our production-ready Dashboard App.",
      bullets: ["Instant download", "Money back guarantee", "Free updates"],
    },
  },

    finance: {
      slug: "finance",
      name: "React Native Finance App",
      hero: {
        badgeIconName: "CreditCard",
        badgeText: "Complete Finance App Template",
        titleLine1: "React Native Finance App",
        titleLine2: "Stocks, Crypto & Banking",
        description:
          "Launch a fully functional fintech app on iOS and Android in minutes. Includes investment portfolio, stocks, crypto, charts, banking, and notifications with a beautiful, modular UI.",
      },
      screenshots: [
        {
          id: 1,
          title: "Main Dashboard",
          category: "Finance UI",
          image: "/finance/dashboard.png",
          description:
            "Overview of net worth, personal capital, investments, and key finance metrics at a glance.",
          features: ["Net Worth Tracking", "Investment Portfolio", "Expense Overview", "Budget Tracker"],
        },
        {
          id: 2,
          title: "Stocks & Crypto",
          category: "Trading UI",
          image: "/finance/stocks.png",
          description:
            "Track, search, and trade stocks and cryptocurrencies with real-time data and charts.",
          features: ["Stocks Trading", "Crypto Trading", "Market Watchlist", "Search & Explore"],
        },
        {
          id: 3,
          title: "Banking & Transactions",
          category: "Banking UI",
          image: "/finance/banking.png",
          description:
            "Manage bank accounts, view transactions, and monitor your finances seamlessly.",
          features: ["Bank Accounts", "Transactions", "Notifications", "Financial Insights"],
        },
        {
          id: 4,
          title: "Profile & Settings",
          category: "Profile UI",
          image: "/finance/profile.png",
          description:
            "Manage your profile, settings, notifications, and personalization options.",
          features: ["Profile Management", "Settings", "Notifications"],
        },
        {
          id: 5,
          title: "Charts & Analytics",
          category: "Analytics UI",
          image: "/finance/charts.png",
          description:
            "Visualize your financial data with line charts, pie charts, and interactive cards.",
          features: ["Line Charts", "Pie Charts", "Investment Cards", "Expense Charts"],
        },
      ],
      features: [
        { iconName: "TrendingUp", title: "Net Worth Tracking", desc: "Track your net worth over time with ease" },
        { iconName: "PieChart", title: "Investment Portfolio", desc: "Manage stocks, crypto, and investments" },
        { iconName: "DollarSign", title: "Banking Features", desc: "Accounts, transactions, and banking insights" },
        { iconName: "Bell", title: "Notifications", desc: "Stay updated on important financial events" },
        { iconName: "Search", title: "Stocks & Crypto Search", desc: "Find financial instruments quickly" },
        { iconName: "CreditCard", title: "Expense Tracker", desc: "Track expenses and manage budgets effectively" },
      ],
      future: [
        { iconName: "Cpu", title: "AI Investment Insights", description: "Get predictive analytics for smarter trading", category: "Innovation" },
        { iconName: "Globe", title: "Multi-currency Support", description: "Track and trade in multiple currencies", category: "Global" },
        { iconName: "Zap", title: "Automated Notifications", description: "Smart alerts for trades, expenses, and investments", category: "Automation" },
        { iconName: "Cloud", title: "External Integrations", description: "Connect with APIs, banks, and fintech platforms", category: "Integration" },
        { iconName: "BarChart3", title: "Advanced Analytics", description: "Deep insights into finance and portfolio performance", category: "Analytics" },
        { iconName: "Shield", title: "Enhanced Security", description: "Protect user data with advanced encryption", category: "Security" },
      ],
      plan: {
        name: "Personal / Developer",
        price: "$99 / $199",
        description: "Annual subscription with ongoing updates and support.",
        features: [
          "Full Source Code",
          "iOS & Android Optimized",
          "Investment & Trading Screens",
          "Banking & Transaction Features",
          "Charts & Analytics UI",
          "Notifications & Alerts",
          "Regular Updates",
          "Comprehensive Documentation",
          "Priority Support",
        ],
        productId: 112233,
        popular: true,
        cadenceLabel: "/year",
      },
      cta: {
        title: "Launch Your Fintech App Today",
        description:
          "Save months of design & development and thousands of dollars. Build your finance app with our production-ready React Native Finance App Template.",
        bullets: ["Instant download", "Money back guarantee", "Free lifetime updates"],
      },
    },
    taxi: {
      slug: "taxi",
      name: "React Native Taxi App",
      hero: {
        badgeIconName: "Car",
        badgeText: "Complete Taxi App Codebase",
        titleLine1: "React Native Taxi App",
        titleLine2: "Passenger & Driver Apps",
        description:
          "Launch your own taxi app in minutes with our fully functional React Native Taxi App template, including passenger and driver apps, Firebase backend, real-time tracking, chat, and payments integration.",
      },
      screenshots: [
        {
          id: 1,
          title: "Passenger App - Booking",
          category: "Passenger UI",
          image: "/taxi/passenger-booking.png",
          description:
            "Passengers can book rides by selecting pickup and destination, track drivers on interactive maps, and see estimated arrival times.",
          features: ["Taxi Booking", "Pickup & Destination Autocomplete", "Driver Tracking", "Map View", "Price Estimation"],
        },
        {
          id: 2,
          title: "Driver App - Ride Management",
          category: "Driver UI",
          image: "/taxi/driver-dashboard.png",
          description:
            "Drivers can go online/offline, accept or reject rides, compute routes, and track trips in real-time with interactive maps.",
          features: ["Go Online/Offline", "Accept/Reject Rides", "Real-time Directions", "Trip History", "Chat with Riders"],
        },
        {
          id: 3,
          title: "Real-time Map & Tracking",
          category: "Map UI",
          image: "/taxi/map-tracking.png",
          description:
            "Interactive maps with real-time geo-tracking, ETA calculation, and driver location updates for seamless ride management.",
          features: ["Real-time Geo Tracking", "Estimated Arrival Time", "Driver Info", "Directions API"],
        },
        {
          id: 4,
          title: "Chat & Messaging",
          category: "Communication UI",
          image: "/taxi/chat.png",
          description:
            "Integrated chat between passengers and drivers with text, photo, video, and audio messages, including typing indicators and message reactions.",
          features: ["Text, Photo & Video Messaging", "Audio Messages", "Typing Indicators", "In-Reply To", "Message Reactions"],
        },
        {
          id: 5,
          title: "Payments & Billing",
          category: "Payment UI",
          image: "/taxi/payments.png",
          description:
            "Multiple payment options including Apple Pay, Google Pay, credit cards, PayPal, Stripe, and cash support.",
          features: ["Apple Pay", "Google Pay", "Credit Cards", "PayPal", "Stripe", "Cash Support"],
        },
      ],
      features: [
        { iconName: "MapPin", title: "Taxi Booking", desc: "Passengers can book rides quickly and easily" },
        { iconName: "Car", title: "Driver Tracking", desc: "Track taxis in real-time on interactive maps" },
        { iconName: "Clock", title: "Directions & ETA", desc: "Automatic route and arrival time calculations" },
        { iconName: "MessageSquare", title: "Chat & Messaging", desc: "Real-time messaging between drivers and passengers" },
        { iconName: "Bell", title: "Push Notifications", desc: "Notifications for ride updates, arrivals, and cancellations" },
        { iconName: "CreditCard", title: "Payments", desc: "Supports multiple payment gateways and methods" },
      ],
      future: [
        { iconName: "Globe", title: "Global Multi-City Support", description: "Expand taxi operations to multiple cities", category: "Expansion" },
        { iconName: "Zap", title: "AI-Driven Dispatch", description: "Optimize dispatch and driver allocation using AI", category: "Automation" },
        { iconName: "Shield", title: "Enhanced Security", description: "Advanced protection for user and payment data", category: "Security" },
        { iconName: "BarChart3", title: "Analytics Dashboard", description: "Insights into rides, revenue, and user activity", category: "Analytics" },
        { iconName: "Cpu", title: "Smart ETA Estimation", description: "Predict travel times more accurately with AI", category: "Innovation" },
        { iconName: "Cloud", title: "External Integrations", description: "Integrate with third-party services for payments and maps", category: "Integration" },
      ],
      plan: {
        name: "Personal / Developer",
        price: "$99 / $199",
        description: "Annual subscription with regular updates and support.",
        features: [
          "Full Source Code",
          "Passenger & Driver Apps",
          "Firebase Backend Integration",
          "Real-time Maps & Tracking",
          "Payments & Billing Features",
          "Chat & Messaging System",
          "Push Notifications",
          "Regular Updates",
          "Comprehensive Documentation",
          "Priority Support",
        ],
        productId: 445566,
        popular: true,
        cadenceLabel: "/year",
      },
      cta: {
        title: "Build Your Own Taxi App Today",
        description:
          "Launch your taxi service with a production-ready React Native Taxi App. Save months of development and reach millions of users quickly.",
        bullets: ["Instant download", "Free updates", "Money back guarantee"],
      },
    },
};

export function getModuleBySlug(slug: string): ModuleData | null {
  return modulesRegistry[slug] ?? null;
}

export function getAllModuleSlugs(): string[] {
  return Object.keys(modulesRegistry);
}


