import React from 'react';
import ProjectData from '../api/ProjectData.json';
import LinkIcon from '../images/link.svg';
import '../sass/main.scss';

const Project = () => {
  return (
    <div className="project__ms__container">
      <div className="project__container">
        <h1>Projects</h1>
        {ProjectData.map((item, id) => {
          if (id % 2 == 1) {
            return (
              <div className="project__item">
                <img
                  className="project__item__thumb"
                  src={item.img}
                  alt={item.name}
                />
                <div className="project__item__right">
                  <p className="project__title">{item.name}</p>
                  <p className="project__desc">{item.desc}</p>

                  <div className="project__button">
                    <img src={LinkIcon} alt="link icon" />
                    <a href={item.link}>VISIT WEBSITE</a>
                  </div>
                </div>
              </div>
            );
          } else if (id % 2 == 0) {
            return (
              <div className="project__item__ganjil">
                <img
                  className="project__item__thumb__ganjil"
                  src={item.img}
                  alt={item.name}
                />
                <div className="project__item__right__ganjil">
                  <p className="project__title__ganjil">{item.name}</p>
                  <p className="project__desc__ganjil">{item.desc}</p>

                  <div className="project__button__ganjil">
                    <img src={LinkIcon} alt="link icon" />
                    <a href={item.link}>VISIT WEBSITE</a>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Project;
