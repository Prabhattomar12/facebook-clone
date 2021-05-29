import React from 'react';
import { useDataLayerValue } from '../DataLayer';
import Story from './Story';
import './storyReel.css';

function StoryReel() {
  const [{ user }, dispatch] = useDataLayerValue();
  const { displayName, photoURL } = user;

  return (
    <div className='storyReel'>
      <Story
        profileSrc={photoURL}
        title={displayName}
        image='https://techcrunch.com/wp-content/uploads/2020/07/instagram-reels-india.jpg?w=730&crop=1'
      />
      <Story
        profileSrc={photoURL}
        title={displayName}
        image='https://techcrunch.com/wp-content/uploads/2020/07/instagram-reels-india.jpg?w=730&crop=1'
      />
      <Story
        profileSrc={photoURL}
        title={displayName}
        image='https://techcrunch.com/wp-content/uploads/2020/07/instagram-reels-india.jpg?w=730&crop=1'
      />
      <Story
        profileSrc={photoURL}
        title={displayName}
        image='https://techcrunch.com/wp-content/uploads/2020/07/instagram-reels-india.jpg?w=730&crop=1'
      />
      <Story
        profileSrc={photoURL}
        title={displayName}
        image='https://techcrunch.com/wp-content/uploads/2020/07/instagram-reels-india.jpg?w=730&crop=1'
      />
    </div>
  );
}

export default StoryReel;
