
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Download, Check } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

interface DownloadButtonProps {
  version?: string;
  size?: string;
  className?: string;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({
  version = '1.0.0',
  size = '64MB',
  className,
}) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [isDownloaded, setIsDownloaded] = useState(false);
  const { toast } = useToast();

  const handleDownload = () => {
    setIsDownloading(true);
    
    // Simulate download
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
          Download MSNOS v{version} ({size})
        </>
      )}
    </Button>
  );
};

export default DownloadButton;
