
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import FeatureCard from '@/components/FeatureCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Zap, Settings, Globe, Layers, RefreshCw } from 'lucide-react';
import AnimatedTransition from '@/components/AnimatedTransition';

const Index = () => {
  return (
    <main className="bg-background min-h-screen flex flex-col">
      <Navbar />
      
      <HeroSection />
      
      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <AnimatedTransition className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 text-blue-600 rounded-full mb-4">
              Capabilities
            </span>
            <h2 className="heading-lg mb-4">Revolutionary Features</h2>
            <p className="subheading max-w-2xl mx-auto">
              MSNOS is packed with innovative features designed to enhance your computing experience.
            </p>
          </AnimatedTransition>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              title="Lightning Fast"
              description="Experience unprecedented speed with our optimized system architecture."
              icon={Zap}
              delay={100}
            />
            <FeatureCard
              title="Advanced Security"
              description="Rest easy with military-grade encryption and real-time threat detection."
              icon={Shield}
              delay={200}
            />
            <FeatureCard
              title="Intuitive Interface"
              description="Enjoy a clean, minimalist interface designed for ease of use."
              icon={Settings}
              delay={300}
            />
            <FeatureCard
              title="Global Connectivity"
              description="Seamlessly connect with devices and services worldwide."
              icon={Globe}
              delay={400}
            />
            <FeatureCard
              title="Multi-layered Architecture"
              description="Benefit from a sophisticated layered approach to system design."
              icon={Layers}
              delay={500}
            />
            <FeatureCard
              title="Continuous Updates"
              description="Stay current with automatic updates and improvements."
              icon={RefreshCw}
              delay={600}
            />
          </div>
          
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <Link to="/features">
                View All Features
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Download CTA Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <AnimatedTransition className="text-center max-w-3xl mx-auto">
            <h2 className="heading-lg mb-6">Ready to Experience MSNOS?</h2>
            <p className="subheading mb-8">
              Download the latest version of MSNOS and transform your computing experience today.
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

export default Index;
