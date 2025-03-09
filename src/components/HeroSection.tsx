
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import AnimatedTransition from './AnimatedTransition';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 lg:pt-0">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50 to-white"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-100 mix-blend-multiply filter blur-3xl opacity-70 animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-cyan-100 mix-blend-multiply filter blur-3xl opacity-70 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <AnimatedTransition className="flex-1 text-center lg:text-left">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 text-blue-600 rounded-full mb-6">
              Introducing MSNOS
            </span>
            <h1 className="heading-xl mb-6">
              The Future of <span className="text-gradient">Computing</span>
            </h1>
            <p className="subheading max-w-2xl mx-auto lg:mx-0 mb-8">
              Experience the revolutionary MSNOS program, designed to transform how you interact with technology. Simple, elegant, and powerful.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="rounded-full button-gradient">
                <Link to="/download">
                  Download Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <Link to="/features">Discover Features</Link>
              </Button>
            </div>
          </AnimatedTransition>
          
          <AnimatedTransition 
            className="flex-1 relative" 
            delay={300}
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden glass-effect p-6 w-full h-full flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="mx-auto w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-3xl font-bold text-blue-500">MS</span>
                  </div>
                  <h3 className="text-xl font-bold">MSNOS</h3>
                  <p className="text-sm text-muted-foreground">The next generation of operating system</p>
                </div>
              </div>
            </div>
          </AnimatedTransition>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
