import React from 'react';
import Iam from '../images/Dribbble Profile 1.png';
import Navbar from './Navbar';
import '../sass/main.scss';
import SocialMediaData from '../api/socialMediaData.json';
import Facebook from '../images/Facebook - Negative.svg';
import Instagram from '../images/Instagram - Negative.svg';
import Dribbble from '../images/Dribbble - Negative.svg';
import Youtube from '../images/YouTube - Negative.svg';
import Tiktok from '../images/TikTok - Negative.svg';
import Mail from '../images/mail.svg';
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <div className="hero__container">
      <Navbar />
      <div className="hero__main">
        <div className="hero__background">
          <img className="sosmed_1" src={Facebook} alt="facebook" />
          <img className="sosmed_2" src={Instagram} alt="instagram" />
          <img className="sosmed_3" src={Dribbble} alt="dribbble" />
          <img className="sosmed_4" src={Youtube} alt="youtube" />
          <img className="sosmed_5" src={Tiktok} alt="tiktok" />
          <img className="sosmed_6" src={Mail} alt="email" />
        </div>
        <div className="hero__detail">
          <div className="hero__detail__top">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString('<h1>Hello <br /> I’m Hans</h1>')
                  .pauseFor(300)
                  .start();
              }}
            />
            {/* <h1>
              Hello
              <br /> I'm Hans
            </h1> */}

            <div className="hero__sosmed">
              {SocialMediaData.map((item, id) => {
                return (
                  <div key={id}>
                    <img src={item.icon} alt={item.name} />
                  </div>
                );
              })}
            </div>
          </div>

          <div className="hero__button">
            <a
              target="_blank"
              href="http://www.mediafire.com/file/47r9yk8zsy093mm/CV_-_Muhammad_Rayhan_2020.pdf/file"
            >
              DOWNLOAD CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
