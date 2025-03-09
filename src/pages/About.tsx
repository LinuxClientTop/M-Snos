
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedTransition from '@/components/AnimatedTransition';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <main className="bg-background min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 lg:px-12 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <AnimatedTransition className="text-center">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 text-blue-600 rounded-full mb-4">
              About MSNOS
            </span>
            <h1 className="heading-xl mb-6">Our Vision for Computing</h1>
            <p className="subheading max-w-2xl mx-auto">
              Learn about the revolutionary system that's changing how we interact with technology.
            </p>
          </AnimatedTransition>
        </div>
      </section>
      
      {/* About Content */}
      <section className="py-16 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <AnimatedTransition>
            <h2 className="heading-md mb-6">The Story Behind MSNOS</h2>
            <div className="prose prose-lg">
              <p className="text-muted-foreground mb-6">
                MSNOS (Multi-System Network Operating Software) was born from a vision to create a computing experience that is both powerful and elegantly simple. Our team of visionary engineers and designers set out to rethink what an operating system could be in the modern era.
              </p>
              <p className="text-muted-foreground mb-6">
                The development of MSNOS began with a simple question: What if we could create a system that adapts to how people work, rather than forcing people to adapt to the system? This philosophy guided every decision in the creation process.
              </p>
              <p className="text-muted-foreground mb-6">
                Today, MSNOS represents the culmination of years of research, development, and refinement. It embodies our belief that technology should empower people through intuitive design and powerful capabilities.
              </p>
            </div>
          </AnimatedTransition>
          
          <AnimatedTransition className="mt-16">
            <h2 className="heading-md mb-6">Our Philosophy</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="p-6 bg-white rounded-2xl shadow-sm border border-border">
                <h3 className="text-xl font-bold mb-4">Simplicity</h3>
                <p className="text-muted-foreground">
                  We believe powerful technology doesn't have to be complicated. MSNOS delivers advanced capabilities through a clean, intuitive interface.
                </p>
              </div>
              <div className="p-6 bg-white rounded-2xl shadow-sm border border-border">
                <h3 className="text-xl font-bold mb-4">Performance</h3>
                <p className="text-muted-foreground">
                  Every aspect of MSNOS is optimized for speed and efficiency, ensuring a smooth experience even with demanding tasks.
                </p>
              </div>
              <div className="p-6 bg-white rounded-2xl shadow-sm border border-border">
                <h3 className="text-xl font-bold mb-4">Security</h3>
                <p className="text-muted-foreground">
                  We've built security into the foundation of MSNOS, protecting your data and privacy at every level.
                </p>
              </div>
            </div>
          </AnimatedTransition>
          
          <AnimatedTransition className="mt-16">
            <h2 className="heading-md mb-6">Technical Specifications</h2>
            <div className="overflow-hidden rounded-xl border border-border">
              <table className="min-w-full divide-y divide-border">
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">Architecture</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">64-bit multi-layered</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">Kernel Type</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">Hybrid microkernel</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">Memory Management</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">Advanced dynamic allocation</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">Security</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">AES-256 encryption, real-time monitoring</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">Connectivity</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">Multi-protocol support with adaptive networking</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </AnimatedTransition>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-6 lg:px-12 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedTransition>
            <h2 className="heading-lg mb-6">Experience MSNOS Today</h2>
            <p className="subheading mb-8">
              Join thousands of users who have already transformed their computing experience with MSNOS.
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

export default About;
