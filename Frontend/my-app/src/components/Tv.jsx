// TV.jsx
import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import './Tv.css';
import { Image } from 'react-bootstrap';

const TV = () => {
  const [player, setPlayer] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const opts = {
    height: '360',
    width: '640',
    playerVars: {
   
      autoplay: 1,
    },
  };

  const togglePlayPause = () => {
    if (isPlaying) {
      player.pauseVideo();
    } else {
      player.playVideo();
    }
  };

  const updateTimeDisplay = () => {
    setCurrentTime(player.getCurrentTime());
    setDuration(player.getDuration());
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  };

  const onReady = (event) => {
    setPlayer(event.target);
  };

  return (
    <div className="tv-container">
    

      <YouTube videoId="bNyUyrR0PHo" opts={opts} onReady={onReady} />
      <div className="controls">
        <div className="play-pause-btn" onClick={togglePlayPause}>
          {isPlaying ? '⏸️' : '▶️'}
        </div>
        <div className="time-display">
          {formatTime(currentTime)} / {formatTime(duration)}
          
        </div>
      </div>
    </div>
  );
};

export default TV;
