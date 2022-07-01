import React from 'react';
import '../App.css';
import Button from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
       <video loop autoPlay controls>
        <source
          src="https://cdn.videvo.net/videvo_files/video/free/2016-05/large_watermarked/506401051_1_preview.mp4"
                  type="video/mp4"
          />
        </video>
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;