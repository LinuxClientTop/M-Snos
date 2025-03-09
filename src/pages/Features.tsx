
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedTransition from '@/components/AnimatedTransition';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Shield, Zap, Settings, Globe, Layers, RefreshCw,
  Cloud, Smartphone, Code, Lock, Wifi, Database, Eye, Terminal
} from 'lucide-react';

const Features = () => {
  const featuresData = [
    {
      category: "Core System",
      items: [
        {
          icon: Zap,
          title: "Lightning Performance",
          description: "Optimized kernel architecture delivers unprecedented speed and responsiveness, even with resource-intensive applications."
        },
        {
          icon: Layers,
          title: "Multi-layered Architecture",
          description: "Revolutionary design separates system functions into distinct layers for improved stability and security."
        },
        {
          icon: RefreshCw,
          title: "Adaptive Resources",
          description: "Intelligent resource allocation adjusts in real-time based on usage patterns and application demands."
        },
        {
          icon: Terminal,
          title: "Advanced Command Interface",
          description: "Powerful command system for advanced users with natural language processing capabilities."
        }
      ]
    },
    {
      category: "Security",
      items: [
        {
          icon: Shield,
          title: "Comprehensive Protection",
          description: "Multi-layer security system that safeguards your data from external threats and unauthorized access."
        },
        {
          icon: Lock,
          title: "Encryption Everywhere",
          description: "Military-grade AES-256 encryption for all data, both at rest and in transit."
        },
        {
          icon: Eye,
          title: "Privacy Controls",
          description: "Granular privacy settings that give you complete control over your information and how it's used."
        }
      ]
    },
    {
      category: "Connectivity",
      items: [
        {
          icon: Globe,
          title: "Global Network",
          description: "Seamlessly connect to devices and services worldwide with optimized protocols for reliability."
        },
        {
          icon: Wifi,
          title: "Adaptive Networking",
          description: "Intelligent networking that adjusts to available connection types and quality for optimal performance."
        },
        {
          icon: Cloud,
          title: "Cloud Integration",
          description: "Native support for major cloud platforms with transparent syncing and backup capabilities."
        }
      ]
    },
    {
      category: "Development",
      items: [
        {
          icon: Code,
          title: "Open API",
          description: "Comprehensive API that allows developers to extend and enhance MSNOS functionality."
        },
        {
          icon: Database,
          title: "Data Management",
          description: "Advanced database system with high-performance querying and robust data integrity features."
        },
        {
          icon: Smartphone,
          title: "Cross-platform SDK",
          description: "Software development kit supporting multiple languages for creating applications across all platforms."
        }
      ]
    }
  ];

  return (
    <main className="bg-background min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 lg:px-12 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <AnimatedTransition className="text-center">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 text-blue-600 rounded-full mb-4">
              MSNOS Features
            </span>
            <h1 className="heading-xl mb-6">Powerful Capabilities</h1>
            <p className="subheading max-w-2xl mx-auto">
              Discover the innovative features that make MSNOS the future of computing.
            </p>
          </AnimatedTransition>
        </div>
      </section>
      
      {/* Features Content */}
      <section className="py-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {featuresData.map((category, index) => (
            <AnimatedTransition 
              key={category.category} 
              className={index > 0 ? "mt-24" : ""}
              delay={index * 100}
            >
              <h2 className="heading-lg mb-8 border-l-4 border-primary pl-4">{category.category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {category.items.map((feature, featureIndex) => {
                  const Icon = feature.icon;
                  return (
                    <div 
                      key={feature.title}
                      className="bg-white p-6 rounded-2xl shadow-sm border border-border hover:shadow-md transition-shadow"
                    >
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  );
                })}
              </div>
            </AnimatedTransition>
          ))}
        </div>
      </section>
      
      {/* System Requirements */}
      <section className="py-16 px-6 lg:px-12 bg-secondary">
        <div className="max-w-5xl mx-auto">
          <AnimatedTransition className="text-center mb-12">
            <h2 className="heading-lg mb-4">System Requirements</h2>
            <p className="subheading">
              MSNOS is designed to be efficient and compatible with a wide range of hardware.
            </p>
          </AnimatedTransition>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedTransition className="bg-white p-8 rounded-2xl shadow-sm border border-border">
              <h3 className="text-xl font-bold mb-4">Minimum Requirements</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></div>
                  <span className="text-muted-foreground">Processor: 1.0 GHz dual-core</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></div>
                  <span className="text-muted-foreground">Memory: 2 GB RAM</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></div>
                  <span className="text-muted-foreground">Storage: 5 GB available space</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></div>
                  <span className="text-muted-foreground">Graphics: Any DirectX 9 compatible</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></div>
                  <span className="text-muted-foreground">Network: Broadband Internet connection</span>
                </li>
              </ul>
            </AnimatedTransition>
            
            <AnimatedTransition 
              className="bg-white p-8 rounded-2xl shadow-sm border border-border"
              delay={200}
            >
              <h3 className="text-xl font-bold mb-4">Recommended Specifications</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></div>
                  <span className="text-muted-foreground">Processor: 2.0 GHz quad-core</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></div>
                  <span className="text-muted-foreground">Memory: 8 GB RAM</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></div>
                  <span className="text-muted-foreground">Storage: 20 GB SSD</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></div>
                  <span className="text-muted-foreground">Graphics: DirectX 11 compatible</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></div>
                  <span className="text-muted-foreground">Network: High-speed broadband connection</span>
                </li>
              </ul>
            </AnimatedTransition>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-6 lg:px-12 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedTransition>
            <h2 className="heading-lg mb-6">Ready to Experience MSNOS?</h2>
            <p className="subheading mb-8">
              Download now and discover why MSNOS is revolutionizing the way we interact with technology.
            </p>
            <Button asChild size="lg" className="rounded-full button-gradient">
              <Link to="/download">
                Download Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </AnimatedTransition>
        </div>
      </section>
      
      <Footer />
    </main>
  );
};

export default Features;
