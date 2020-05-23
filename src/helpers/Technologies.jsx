import React from 'react';
import {
  FaReact,
  FaPython,
  FaNodeJs,
  FaPhp,
  FaRocket,
  FaVuejs,
  FaJsSquare,
} from 'react-icons/fa';

const Technologies = {};

Technologies.list = [
  {
    id: 'tech-all',
    icon: <FaRocket />,
    link: '/projects',
    title: 'All Projects',
    subtitle: (
      <span>
        All public <span className={`shadow-text-red`}>GitHub projects</span> by
        gustavocastro78
      </span>
    ),
    color: 'red',
    active: true,
  },
  {
    id: 'tech-react',
    icon: <FaReact />,
    link: '/projects/react',
    title: 'React',
    subtitle: (
      <span>
        User interfaces for web{' '}
        <span className={`shadow-text-blue`}> projects</span>
      </span>
    ),
    color: 'blue',
    active: false,
  },
  {
    id: 'tech-python',
    icon: <FaPython />,
    link: '/projects/python',
    title: 'Python',
    subtitle: (
      <span>
        Data Analysis, machine learn and others{' '}
        <span className={`shadow-text-yellow`}>data science</span> projects{' '}
      </span>
    ),
    color: 'yellow',
    active: false,
  },
  {
    id: 'tech-node',
    icon: <FaNodeJs />,
    link: '/projects/nodejs',
    title: 'NodeJS',
    subtitle: (
      <span>
        Real-time and <span className={`shadow-text-green`}>asynchronous</span>{' '}
        projects
      </span>
    ),
    color: 'green',
    active: false,
  },
  {
    id: 'tech-php',
    icon: <FaPhp />,
    link: '/projects/php',
    title: 'PHP',
    subtitle: (
      <span>
        Web <span className={`shadow-text-purple`}>applications</span>
      </span>
    ),
    color: 'purple',
    active: false,
  },
];

Technologies.getIconByTech = (technology) => {
  switch (technology.toLocaleLowerCase()) {
    case 'php':
      return <FaPhp className='text-purple' title='PHP' />;
    case 'python':
    case 'jupyter notebook':
      return <FaPython className='text-yellow' title='Python' />;
    case 'react':
      return <FaReact className='text-blue' title='React' />;
    case 'nodejs':
      return <FaNodeJs className='text-green' title='NodeJS' />;
    case 'vue':
      return <FaVuejs className='text-light-green' title='Vue' />;
    case 'javascript':
      return <FaJsSquare className='text-light-yellow' title='JavaScript' />;
    default:
      return <FaRocket className='text-red' title='Other' />;
  }
};

Technologies.getInfoByTech = (technology) => {
  if (!technology)
    return Technologies.list.filter((e) => e.id === 'tech-all')[0];

  const x = Technologies.list.filter(
    (e) => e.title.toLocaleLowerCase() === technology
  );

  if (x.length) return x[0];
  else {
    const colors = ['red', 'purple', 'blue', 'green', 'yellow', 'light-green '];

    return {
      title: technology,
      subtitle: '',
      color: colors[Math.floor(Math.random() * colors.length)],
    };
  }
};

export default Technologies;
