
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
    
    // Если у нас есть URL для прямого скачивания, используем его
    if (downloadUrl) {
      try {
        // Создаем элемент ссылки и инициируем скачивание
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Симулируем завершение скачивания
        setTimeout(() => {
          setIsDownloading(false);
          setIsDownloaded(true);
          
          toast({
            title: 'Скачивание начато',
            description: `MSNOS ${label || `v${version}`} скачивается. Спасибо!`,
          });
          
          // Сбрасываем состояние кнопки через некоторое время
          setTimeout(() => {
            setIsDownloaded(false);
          }, 3000);
        }, 1500);
      } catch (error) {
        console.error('Ошибка при скачивании:', error);
        setIsDownloading(false);
        
        toast({
          title: 'Ошибка скачивания',
          description: 'Произошла ошибка при попытке скачать файл.',
          variant: 'destructive',
        });
      }
    } else {
      // Запасной вариант, если URL не предоставлен
      setTimeout(() => {
        setIsDownloading(false);
        setIsDownloaded(true);
        
        toast({
          title: 'Скачивание начато',
          description: `MSNOS v${version} скачивается. Спасибо!`,
        });
        
        // Сбрасываем состояние кнопки через некоторое время
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
          Скачивание...
        </>
      ) : isDownloaded ? (
        <>
          <Check className="mr-2 h-5 w-5" />
          Скачано
        </>
      ) : (
        <>
          <Download className="mr-2 h-5 w-5" />
          {label || `Скачать MSNOS v${version} (${size})`}
        </>
      )}
    </Button>
  );
};

export default DownloadButton;
