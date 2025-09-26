export type ModuleScreenshot = {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  features: string[];
};

export type ModuleFeature = {
  iconName: string;
  title: string;
  desc: string;
};

export type ModuleFutureItem = {
  iconName: string;
  title: string;
  description: string;
  category: string;
};

export type ModulePlan = {
  name: string;
  price: string;
  description: string;
  features: string[];
  productId: number;
  popular?: boolean;
  cadenceLabel?: string; 
};

export type ModuleHero = {
  badgeIconName: string;
  badgeText: string;
  titleLine1: string;
  titleLine2: string;
  description: string;
};

export type ModuleCTA = {
  title: string;
  description: string;
  bullets: string[];
};

export type ModuleData = {
  slug: string;
  name: string;
  hero: ModuleHero;
  screenshots: ModuleScreenshot[];
  features: ModuleFeature[];
  future: ModuleFutureItem[];
  plan: ModulePlan;
  cta: ModuleCTA;
};


