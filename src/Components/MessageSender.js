import { Avatar } from '@material-ui/core';
import React, { useState } from 'react';
import './messageSender.css';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { useDataLayerValue } from '../DataLayer';
import db from '../firebase';
import firebase from 'firebase';

function MessageSender() {
  const [input, setInput] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [{ user }] = useDataLayerValue();
  const { displayName, photoURL } = user;

  const handleSubmit = (e) => {
    e.preventDefault();
    // db stuff
    db.collection('posts').add({
      message: input,
      image: imageURL,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput('');
    setImageURL('');
  };

  return (
    <div className='messageSender'>
      <div className='sender_top'>
        <Avatar src={photoURL} />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className='input_title'
            type='text'
            placeholder='What is in your mind Prabhat tomar ?'
          />
          <input
            value={imageURL}
            onChange={(e) => setImageURL(e.target.value)}
            className='post_image_url'
            type='text'
            placeholder='Enter image URL (Optional)'
          />
          <button onClick={handleSubmit} type='submit'>
            Hidden button
          </button>
        </form>
      </div>

      <div className='sender_bottom'>
        <div className='sender_options'>
          <VideocamIcon style={{ color: 'red' }} />
          <h3>Live Video</h3>
        </div>
        <div className='sender_options'>
          <PhotoLibraryIcon style={{ color: 'green' }} />
          <h3>Photo/Video</h3>
        </div>
        <div className='sender_options'>
          <InsertEmoticonIcon style={{ color: 'yellow' }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
