import React, { useState, useEffect } from 'react';
import './projects.css';
import Axios from 'axios';
import Project from '../../components/Project/Project';
import { useParams } from 'react-router-dom';
import Technologies from '../../helpers/Technologies';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const getRepositories = async (filter) => {
  const url = 'https://api.github.com/users/gustavocastro78/repos';

  const repositories = await Axios.get(url, {
    headers: {
      Accept: 'application/vnd.github.mercy-preview+json',
    },
  });

  if (filter) return repositories.data.filter((e) => e.topics.includes(filter));
  else return repositories.data;
};

export default function Projects() {
  const { technology } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [projectsList, setProjectList] = useState([]);

  const info = Technologies.getInfoByTech(technology);

  useEffect(() => {
    const f = async () => {
      const repositories = await getRepositories(technology);
      setProjectList(repositories);

      setIsLoading(false);
    };

    f();
  }, []);

  return (
    <div className='projects-container'>
      <div>
        <div className='projects-detail-container'>
          <div>
            <div>
              <h1 className={`shadow-text-${info.color}`}>{info.title}</h1>
              <p>{info.subtitle}</p>
            </div>
          </div>
        </div>

        <div className={'projects-list-container'}>
          <div className={'projects-list'}>
            {isLoading && (
              <div className='loading-icon'>
                <AiOutlineLoading3Quarters />
                <span>Loading</span>
              </div>
            )}

            {!isLoading &&
              (projectsList.length ? (
                projectsList.map((e, i) => {
                  return <Project key={`project-${i}`} data={e} />;
                })
              ) : (
                <div style={{ textAlign: 'center', lineHeight: '60px' }}>
                  <p>
                    Ops, there are no{' '}
                    <span className={`shadow-text-${info.color}`}>
                      {technology}
                    </span>{' '}
                    projects here yet...{' '}
                  </p>
                  <span>¯\_(ツ)_/¯</span>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
