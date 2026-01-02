'use client';
import React, { useEffect, useState } from 'react';
import './Loader.css';

const Loader = ({ onLoadComplete }) => {
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Wait for all resources to load
    const handleLoad = () => {
      // Small delay to ensure smooth transition
      setTimeout(() => {
        setIsComplete(true);
        // Call the callback after fade out animation
        setTimeout(() => {
          if (onLoadComplete) onLoadComplete();
        }, 600);
      }, 800);
    };

    // Check if document is already loaded
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, [onLoadComplete]);

  return (
    <div className={`loader-container ${isComplete ? 'fade-out' : ''}`}>
      <div className="loader-content">
        {/* Animated Logo/Brand */}
        <div className="loader-logo">
          <div className="logo-circle">
            <div className="logo-inner"></div>
          </div>
          <h1 className="loader-brand">SYKOU</h1>
        </div>

        {/* Looping Progress Bar */}
        <div className="progress-container">
          <div className="progress-bar">
            <div className="progress-fill looping"></div>
          </div>
        </div>

        {/* Loading Text */}
        <div className="loading-text">
          <span className="dot">.</span>
          <span className="dot">.</span>
          <span className="dot">.</span>
        </div>
      </div>

      {/* Animated Background */}
      <div className="loader-bg-animation">
        <div className="bg-circle circle-1"></div>
        <div className="bg-circle circle-2"></div>
        <div className="bg-circle circle-3"></div>
      </div>
    </div>
  );
};

export default Loader;
