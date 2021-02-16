import React from 'react';
import '../sass/main.scss';

const About = () => {
  return (
    <div className="about__ms__container">
      <div className="about__container">
        <h1>About</h1>

        <div className="about__content">
          <p className="about__text">
            I'm from Indonesia and have been working as a UI UX designer for
            more than 3 years. I've been working as a freelance web & mobile
            designer and front-end & back-end developer for 3 years, and now I'm
            looking forward to working with you!
          </p>

          <div className="about__contact">
            <div className="about__card">
              <div className="about__card__text">
                <h3>EMAIL</h3>
                <p>studywithray04@gmail.com</p>
              </div>
              <div className="about__card__text">
                <h3>ROLE</h3>
                <p>Web & Mobile Frontend Developer</p>
                <p>Web & Mobile Backend Developer</p>
              </div>
              <div className="about__card__text">
                <h3>PHONE</h3>
                <p>(+62) 896 2004 4936</p>
              </div>
            </div>
          </div>

          <img
            className="about__signature"
            src="https://i.imgur.com/gNjglQ0.png"
            alt="hans signature"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
