import React from 'react';
import { FaLinkedin, FaMedium, FaGithubAlt } from 'react-icons/fa';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { Link } from 'react-router-dom';

import './default.css';

export default function Default({ children, back }) {
  return (
    <div>
      <header>
        <div className={back && 'header-content'}>
          {back && (
            <nav>
              <Link to={back}>
                <IoMdArrowRoundBack />
              </Link>
            </nav>
          )}
          <nav>
            <a
              href='https://medium.com/@ogustavocastro/'
              title='Medium'
              target='_blank'
              rel='noopener noreferrer'>
              <FaMedium />
            </a>
            <a
              href='https://www.linkedin.com/in/gustavocastro78/'
              title='Linkedin'
              target='_blank'
              rel='noopener noreferrer'>
              <FaLinkedin />
            </a>
            <a
              href='https://github.com/gustavocastro78'
              title='GitHub'
              target='_blank'
              rel='noopener noreferrer'>
              <FaGithubAlt />
            </a>
          </nav>
        </div>
      </header>
      <main>{children}</main>
      <footer>
        <small>Developed by Gustavo Castro</small>
      </footer>
    </div>
  );
}
