import React from 'react';
import './techItem.css';

export default function TechItem({
  icon,
  className = '',
  title,
  color,
  active = false,
  onClick,
}) {
  const classes = `${className} icon icon-color-${color} ${
    active ? 'active' : ''
  }`;

  return (
    <div onClick={onClick} className={classes} title={title}>
      {icon}
    </div>
  );
}
