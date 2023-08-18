import React, { useEffect, useRef, useState } from 'react';
import { DoubleRightOutlined, DoubleLeftOutlined } from '@ant-design/icons';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

import Style from './style';

const Video = ({ src }) => {
  const videoRef = useRef();
  // const src = 'https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8';

  const initEvent = () => {
    // Initialize the foo plugin after any player is created.
    // player.foo();
  };

  const onSeek = (time) => {
    const { currentTime, duration } = videoRef.current;
    const newTime = currentTime + time;
    videoRef.current.currentTime = newTime < duration ? newTime : duration - 3;
  };

  useEffect(() => {
    const videoJsOptions = {
      aspectRatio: '16:9',
      playsinline: true,
      fluid: true,
      autoplay: true,
      muted: false,
      controls: true,
      playbackRates: [0.75, 1, 1.25, 1.5, 2],

      controlBar: {
        children: {
          playToggle: {},
          volumePanel: { inline: false },
          currentTimeDisplay: {},
          progressControl: {
            keepTooltipsInside: true,
          },
          remainingTimeDisplay: {},
          playbackRateMenuButton: {},
          fullscreenToggle: {},
        },
      },
    };

    // videojs.hook('setup', initEvent);
    const player = videojs(videoRef.current, videoJsOptions);
    player.addClass('vjs-lermo');

    return () => {
      // videojs.removeHook('setup', initEvent);
      player.dispose();
    };
  }, []);

  useEffect(() => {
    if (!videoRef.current) return;
    if (!src) return;

    const player = videojs(videoRef.current);
    player.src({
      src,
      type: '',
    });
  }, [src]);

  let LoadingComponent;
  if (!src) {
    LoadingComponent = (
      <div
        className="loading shimmer"
      />
    );
  }

  return (
    <Style>
      <div data-vjs-player>
        <video ref={videoRef} className="video-js vjs-big-play-centered" />
        {LoadingComponent}
        <div className="forward-btn" onClick={() => onSeek(+15)}>
          +15
          <DoubleRightOutlined />
        </div>
        <div className="backward-btn" onClick={() => onSeek(-15)}>
          -15
          <DoubleLeftOutlined />
        </div>
      </div>
    </Style>
  );
};

export default Video;
