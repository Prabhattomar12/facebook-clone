import React, { useEffect, useState } from 'react';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';
import { useDataLayerValue } from '../DataLayer';

import './feeds.css';
import db from '../firebase';
import { actionTypes } from '../reducer';

function Feeds() {
  const [{ user, posts }, dispatch] = useDataLayerValue();
  const { displayName, photoURL } = user;
  const [postsState, setPostsState] = useState([]);

  console.log('posts ', posts);
  useEffect(() => {
    db.collection('posts')
      .orderBy('timestamp', 'asc')
      .onSnapshot((snapshot) => {
        dispatch({
          type: actionTypes.SET_POSTS,
          posts: snapshot.docs.map((doc) => doc.data()),
        });
      });
  }, []);

  return (
    <div className='feeds'>
      <StoryReel />
      <MessageSender />

      {posts?.map((post, idx) => (
        <Post
          key={idx}
          profileSrc={photoURL}
          username={displayName}
          timestamp={post?.timestamp}
          message={post?.message}
          image={post?.image}
        />
      ))}
    </div>
  );
}

export default Feeds;
