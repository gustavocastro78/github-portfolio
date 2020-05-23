import React from 'react';
import './project.css';
import { FaPlay } from 'react-icons/fa';
import { GoRepoClone, GoOctoface } from 'react-icons/go';
import Technologies from '../../helpers/Technologies';
import Shield from '../Shield/Shield';

/**
 *
 * @param {string} str
 */
const copyToClipboard = (str) => {
  const input = document.createElement('textarea');
  document.body.appendChild(input);

  input.value = str;
  input.select();

  document.execCommand('copy');
  document.body.removeChild(input);

  toaster('Copied to clipboard!');
};

/**
 *
 * @param {string} str
 */
const clearString = (str) => {
  return str.replace(/[-]/g, ' ');
};

const toaster = (str) => {
  const div = document.createElement('div');
  div.className = 'toaster';
  div.innerText = str;

  document.body.appendChild(div);

  setTimeout(() => {
    div.className += ' toaster-hidden';
    setTimeout(() => {
      document.body.removeChild(div);
    }, 1000);
  }, 1000);
};

export default function Project({ children, data }) {
  return (
    <div className='project-contaier'>
      <div className='project-name-container'>
        <a
          href={data.html_url}
          target='_blank'
          className='project-name'
          title={clearString(data.name)}
          rel='noopener noreferrer'>
          {clearString(data.name)}
        </a>
        <span className='project-name-icon'>
          {Technologies.getIconByTech(data.language)}
        </span>
      </div>

      <div style={{ display: 'flex' }}>
        {data.license && (
          <Shield
            label='License'
            message={data.license.spdx_id}
            color='yellow'
          />
        )}

        {data.topics.includes('unstable') && (
          <Shield label='Status' message='Unstable' color='red' />
        )}

        {data.topics.includes('stable') && (
          <Shield label='Status' message='Stable' color='green' />
        )}
      </div>

      <div className='project-description-container'>
        <p>{data.description || ''}</p>
      </div>
      <div className='project-actions'>
        {data.homepage && (
          <a href={data.homepage} target='_blank' rel='noopener noreferrer'>
            <FaPlay title='Try it!' />
          </a>
        )}
        <span
          onClick={() => {
            copyToClipboard(`git clone ${data.clone_url}`);
          }}>
          <GoRepoClone title='Clone this repositorie' />
        </span>

        <a href={data.html_url} target='_blank' rel='noopener noreferrer'>
          <GoOctoface title='See on GitHub' />
        </a>
      </div>
    </div>
  );
}
