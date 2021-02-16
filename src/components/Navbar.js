import React from 'react';
import NavbarData from '../api/NavbarData.json';
import '../sass/main.scss';

const Navbar = () => {
  return (
    <div className="navbar__ms__container">
      <div className="navbar__container">
        {NavbarData.map((item, index) => {
          return (
            <a href={item.link} key={index} className="navbar__text__container">
              <p>{item.name}</p>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
