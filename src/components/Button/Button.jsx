import React from 'react';
import './button.css';

export default function Button({ children, color }) {
  const classes = `btn btn-color-${color}`;

  return <button className={classes}>{children}</button>;
}
