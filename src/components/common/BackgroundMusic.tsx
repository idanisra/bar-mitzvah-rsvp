import { useState, useRef, useEffect } from 'react';
import { IconButton, Tooltip } from '@mui/material';
import { VolumeUp, VolumeOff } from '@mui/icons-material';

interface BackgroundMusicProps {
  musicUrl: string;
  volume?: number;
}

const BackgroundMusic = ({ musicUrl, volume = 0.5 }: BackgroundMusicProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Clean up any existing audio before creating new one
    if (audioRef.current) {
      console.log('Cleaning up existing audio before creating new one');
      audioRef.current.pause();
      audioRef.current = null;
    }
    
    // Create audio element
    console.log('Loading audio file:', musicUrl);
    const audio = new Audio(musicUrl);
    audio.loop = true;
    audio.volume = volume;
    audioRef.current = audio;
    
    // Log audio element details
    console.log('Audio element created:', audio);
    console.log('Audio source:', audio.src);
    console.log('Audio duration:', audio.duration);
    console.log('Audio file name from URL:', musicUrl.split('/').pop());

    // Try to auto-start music when component mounts
    const startMusic = () => {
      console.log('Attempting to start audio playback');
      audio.play().then(() => {
        console.log('Audio started successfully');
        setIsPlaying(true);
      }).catch((error) => {
        console.log('Auto-play failed:', error);
        // Auto-play blocked by browser - user will need to click to start
      });
    };

    // Try to start music after a short delay
    const timer = setTimeout(startMusic, 1000);

    // Cleanup on unmount
    return () => {
      clearTimeout(timer);
      if (audioRef.current) {
        console.log('Cleaning up audio element');
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [musicUrl, volume]);

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((error) => {
        console.log('Audio play failed:', error);
      });
    }
  };

  const toggleMusic = () => {
    if (!isPlaying) {
      // Start playing
      handlePlay();
    } else {
      // Toggle mute/unmute
      if (audioRef.current) {
        if (isMuted) {
          // Unmute
          audioRef.current.volume = volume;
          setIsMuted(false);
          
          // Ensure audio is playing after unmute (helps with mobile issues)
          if (audioRef.current.paused) {
            audioRef.current.play().then(() => {
              console.log('Audio resumed after unmute');
            }).catch((error) => {
              console.log('Failed to resume audio after unmute:', error);
            });
          }
        } else {
          // Mute
          audioRef.current.volume = 0;
          setIsMuted(true);
        }
      }
    }
  };

  const getTooltipText = () => {
    if (!isPlaying) return "נגן מוזיקה";
    if (isMuted) return "הפעל קול";
    return "השתק";
  };

  const getIcon = () => {
    if (!isPlaying || isMuted) return <VolumeOff />;
    return <VolumeUp />;
  };

  return (
    <Tooltip title={getTooltipText()}>
      <IconButton
        onClick={toggleMusic}
        sx={{
          color: 'white',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
          }
        }}
      >
        {getIcon()}
      </IconButton>
    </Tooltip>
  );
};

export default BackgroundMusic;
