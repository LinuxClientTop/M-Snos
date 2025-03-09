
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Download, Check } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

interface DownloadButtonProps {
  version?: string;
  size?: string;
  className?: string;
  downloadUrl?: string;
  label?: string;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({
  version = '1.0.0',
  size = '64MB',
  className,
  downloadUrl,
  label,
}) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [isDownloaded, setIsDownloaded] = useState(false);
  const { toast } = useToast();

  const handleDownload = () => {
    setIsDownloading(true);
    
    // If we have a direct download URL, use it
    if (downloadUrl) {
      // Create an anchor element and trigger download
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.click();
      
      // Simulate download complete
      setTimeout(() => {
        setIsDownloading(false);
        setIsDownloaded(true);
        
        toast({
          title: 'Download Started',
          description: `MSNOS ${label || `v${version}`} is being downloaded. Thank you!`,
        });
        
        // Reset button after a delay
        setTimeout(() => {
          setIsDownloaded(false);
        }, 3000);
      }, 1500);
    } else {
      // Fallback to simulate download if no URL provided
      setTimeout(() => {
        setIsDownloading(false);
        setIsDownloaded(true);
        
        toast({
          title: 'Download Started',
          description: `MSNOS v${version} is being downloaded. Thank you!`,
        });
        
        // Reset button after a delay
        setTimeout(() => {
          setIsDownloaded(false);
        }, 3000);
      }, 1500);
    }
  };

  return (
    <Button
      onClick={handleDownload}
      disabled={isDownloading}
      size="lg"
      className={`rounded-full button-gradient relative ${className}`}
    >
      {isDownloading ? (
        <>
          <div className="h-5 w-5 animate-spin rounded-full border-2 border-t-transparent border-white mr-2"></div>
          Downloading...
        </>
      ) : isDownloaded ? (
        <>
          <Check className="mr-2 h-5 w-5" />
          Downloaded
        </>
      ) : (
        <>
          <Download className="mr-2 h-5 w-5" />
          {label || `Download MSNOS v${version} (${size})`}
        </>
      )}
    </Button>
  );
};

export default DownloadButton;
