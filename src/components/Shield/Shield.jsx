import React from 'react';
import './shield.css';

export default function Shield({ label, message, color }) {
  return (
    <div className='shield-container'>
      <div className='shield' title={`${label}:${message}`}>
        <span>{label}</span>
        <span className={`shield-background-${color}`}>{message}</span>
      </div>
    </div>
  );
}
