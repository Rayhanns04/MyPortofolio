import { computeHeadingLevel } from '@testing-library/react';
import React from 'react';
import WorkData from '../api/ProjectData.json';
import '../sass/main.scss';

const Work = () => {
  return (
    <div className="work__ms__container">
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          position: 'relative',
          width: '100%',
          'max-width': '1198px',
          marginTop: '158px',
        }}
      >
        <div className="work__container">
          <h1>Work</h1>
          {WorkData.map((item, id) => {
            return (
              <div key={id} className="work__main">
                <div className="work__detail__left">
                  <p className="work__name">{item.name}</p>

                  {item.date.map((item2, id2) => {
                    return (
                      <p className="work__date" key={id2}>
                        {item2.month} • {item2.year}
                      </p>
                    );
                  })}
                </div>

                <div className="check">
                  <div className="work__detail__right">
                    <p className="work__minidesc">{item.miniDesc}</p>

                    <div className="work__tag__container">
                      {item.tag.map((item3, id3) => {
                        return (
                          <div key={id3} className="work__tag">
                            <p>{item3.name}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Work;
