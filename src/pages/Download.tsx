
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedTransition from '@/components/AnimatedTransition';
import DownloadButton from '@/components/DownloadButton';
import { 
  Check, 
  HelpCircle,
  Monitor, 
  Laptop, 
  Smartphone,
  Tablet
} from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Download = () => {
  const platforms = [
    {
      name: "Windows",
      icon: Monitor,
      versions: ["10", "11"],
      architecture: ["x64", "ARM64"],
    },
    {
      name: "macOS",
      icon: Laptop,
      versions: ["Monterey", "Ventura", "Sonoma"],
      architecture: ["x64", "Apple Silicon"],
    },
    {
      name: "Linux",
      icon: Monitor,
      versions: ["Ubuntu", "Debian", "Fedora", "Arch"],
      architecture: ["x64", "ARM64"],
    },
    {
      name: "Mobile",
      icon: Smartphone,
      versions: ["Android", "iOS"],
      architecture: ["ARM", "ARM64"],
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
              Download MSNOS
            </span>
            <h1 className="heading-xl mb-6">Get Started Today</h1>
            <p className="subheading max-w-2xl mx-auto">
              Download the latest version of MSNOS and transform your computing experience.
            </p>
          </AnimatedTransition>
        </div>
      </section>
      
      {/* Latest Version */}
      <section className="py-16 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <AnimatedTransition className="bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-border text-center">
            <div className="inline-block px-3 py-1 text-xs font-medium bg-green-100 text-green-600 rounded-full mb-4">
              Latest Release
            </div>
            <h2 className="heading-lg mb-6">MSNOS v1.2.0</h2>
            <p className="subheading mb-8">
              Our most advanced release yet, with improved performance, enhanced security, and new features.
            </p>
            
            <div className="flex flex-col items-center space-y-8">
              <DownloadButton version="1.2.0" size="64MB" />
              
              <div className="flex flex-wrap justify-center gap-4 mt-6 text-sm text-muted-foreground">
                <span className="flex items-center">
                  <Check className="w-4 h-4 mr-1 text-green-500" />
                  SHA-256 Verified
                </span>
                <span className="flex items-center">
                  <Check className="w-4 h-4 mr-1 text-green-500" />
                  Virus Scanned
                </span>
                <span className="flex items-center">
                  <Check className="w-4 h-4 mr-1 text-green-500" />
                  Released: June 15, 2023
                </span>
              </div>
            </div>
          </AnimatedTransition>
        </div>
      </section>
      
      {/* Platform Support */}
      <section className="py-16 px-6 lg:px-12 bg-secondary">
        <div className="max-w-5xl mx-auto">
          <AnimatedTransition className="text-center mb-12">
            <h2 className="heading-lg mb-4">Available Platforms</h2>
            <p className="subheading">
              MSNOS is designed to work seamlessly across all major operating systems and devices.
            </p>
          </AnimatedTransition>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {platforms.map((platform, index) => {
              const Icon = platform.icon;
              return (
                <AnimatedTransition 
                  key={platform.name}
                  className="bg-white p-8 rounded-2xl shadow-sm border border-border text-center"
                  delay={index * 100}
                >
                  <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{platform.name}</h3>
                  
                  <div className="space-y-2 mb-4">
                    <p className="text-sm font-medium">Supported Versions:</p>
                    <div className="flex flex-wrap justify-center gap-2">
                      {platform.versions.map(version => (
                        <span key={version} className="text-xs bg-secondary px-2 py-1 rounded-full">
                          {version}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Architecture:</p>
                    <div className="flex flex-wrap justify-center gap-2">
                      {platform.architecture.map(arch => (
                        <span key={arch} className="text-xs bg-secondary px-2 py-1 rounded-full">
                          {arch}
                        </span>
                      ))}
                    </div>
                  </div>
                </AnimatedTransition>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* Installation Guide */}
      <section className="py-16 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <AnimatedTransition className="text-center mb-12">
            <h2 className="heading-lg mb-4">Installation Guide</h2>
            <p className="subheading">
              Follow these simple steps to install MSNOS on your device.
            </p>
          </AnimatedTransition>
          
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-border">
            <div className="space-y-8">
              <AnimatedTransition className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0 flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Download the Installer</h3>
                  <p className="text-muted-foreground mb-4">
                    Click the download button above to get the latest version of MSNOS compatible with your system.
                  </p>
                </div>
              </AnimatedTransition>
              
              <AnimatedTransition className="flex flex-col md:flex-row gap-6" delay={100}>
                <div className="flex-shrink-0 flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                    2
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Run the Installer</h3>
                  <p className="text-muted-foreground mb-4">
                    Double-click the downloaded file to start the installation process. Follow the on-screen instructions.
                  </p>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="inline-flex items-center text-sm text-primary">
                          <HelpCircle className="w-4 h-4 mr-1" />
                          Need help with permissions?
                        </div>
                      </TooltipTrigger>
                      <TooltipContent className="max-w-sm">
                        <p>On Windows, right-click and select "Run as administrator". On macOS, you may need to go to System Preferences > Security & Privacy to allow the installation.</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </AnimatedTransition>
              
              <AnimatedTransition className="flex flex-col md:flex-row gap-6" delay={200}>
                <div className="flex-shrink-0 flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                    3
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Configuration</h3>
                  <p className="text-muted-foreground mb-4">
                    After installation, MSNOS will guide you through a simple setup process to customize your experience.
                  </p>
                </div>
              </AnimatedTransition>
              
              <AnimatedTransition className="flex flex-col md:flex-row gap-6" delay={300}>
                <div className="flex-shrink-0 flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                    4
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Ready to Use</h3>
                  <p className="text-muted-foreground">
                    Once setup is complete, you can start exploring the powerful features of MSNOS immediately.
                  </p>
                </div>
              </AnimatedTransition>
            </div>
          </div>
        </div>
      </section>
      
      {/* Previous Versions */}
      <section className="py-16 px-6 lg:px-12 bg-secondary">
        <div className="max-w-5xl mx-auto">
          <AnimatedTransition className="text-center mb-12">
            <h2 className="heading-lg mb-4">Previous Versions</h2>
            <p className="subheading">
              Need an earlier release? Access our archive of previous MSNOS versions.
            </p>
          </AnimatedTransition>
          
          <div className="bg-white rounded-2xl shadow-sm border border-border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-border">
                <thead className="bg-muted">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Version
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Release Date
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Size
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Download
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-border">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      v1.1.5
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">
                      May 2, 2023
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">
                      60 MB
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                      <button className="text-primary hover:text-primary/80 font-medium">
                        Download
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      v1.1.0
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">
                      March 15, 2023
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">
                      58 MB
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                      <button className="text-primary hover:text-primary/80 font-medium">
                        Download
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      v1.0.0
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">
                      January 10, 2023
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">
                      55 MB
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                      <button className="text-primary hover:text-primary/80 font-medium">
                        Download
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
};

export default Download;
