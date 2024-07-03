import React, { useEffect, useState } from 'react';

interface VideoComponentProps {
  videoSrc: string;
  width?: string;
  height?: string;
}

const VideoComponent: React.FC<VideoComponentProps> = ({ videoSrc, width = "500", height = "auto" }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Ou um placeholder
  }

  return (
    <div>
      <video width={width} height={height} controls>
        <source src={videoSrc} type="video/mp4" />
        Seu navegador não suporta a tag de vídeo.
      </video>
    </div>
  );
};

export default VideoComponent;
