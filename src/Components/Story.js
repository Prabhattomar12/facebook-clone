import React from 'react';
import './story.css';
import { Avatar } from '@material-ui/core';

function Story({ image, profileSrc, title }) {
  console.log(`prabhat ${title} tomar`);
  return (
    <div
      className='story'
      style={{ backgroundImage: `url(${image})`, border: '2px solid red' }}
    >
      <Avatar src={profileSrc} className='story_avatar' />
      <h4>{title}</h4>
      
    </div>
  );
}

export default Story;
