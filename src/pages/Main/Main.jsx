import React, { useState, useEffect } from 'react';
import TechItem from '../../components/TechItem/TechItem';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';
import Technologies from '../../helpers/Technologies';

import './main.css';

export default function Main() {
  const [info, setInfo] = useState({});

  useEffect(() => {
    const activeInfo = Technologies.list.filter((e) => e.active)[0];
    setInfo(activeInfo);
  }, []);

  const [techItems, setTechItems] = useState(Technologies.list);

  return (
    <div className={'main-container'}>
      <div className=''>
        <div id='knowledgement-areas' className='area'>
          <div className='tech-items'>
            {techItems.map((e, i) => {
              return (
                <TechItem
                  key={i}
                  id={e.id}
                  title={e.title}
                  color={e.color}
                  icon={e.icon}
                  active={e.active}
                  onClick={() => {
                    const itemAux = techItems;
                    itemAux.forEach((e2, i2) => {
                      e2.active = i2 === i;
                    });

                    setInfo({
                      title: e.title,
                      color: e.color,
                      subtitle: e.subtitle,
                      link: e.link,
                    });
                    setTechItems(itemAux);
                  }}
                />
              );
            })}
          </div>
        </div>
        <div id='description-area' className='area'>
          <div style={{ width: '460px', lineBreak: 'auto' }}>
            <div
              key={'_' + Math.random().toString(36).substr(2, 9)}
              style={{ padding: '10px' }}
              className={'show-info'}>
              <h1 className={`shadow-text-${info.color}`}>{info.title}</h1>
              <p className={'teste'}>{info.subtitle}</p>
            </div>
            <div>
              <Link to={info.link}>
                <Button color={info.color}>View Projects</Button>
              </Link>
              {/* <Button color={info.color}>Skills</Button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
