import { Avatar } from '@material-ui/core';
import React from 'react';
import './post.css';
import CommentIcon from '@material-ui/icons/Comment';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
function Post({ profileSrc, username, timestamp, image, message }) {
  return (
    <div className='post'>
      <div className='post_top'>
        <Avatar src={profileSrc} />
        <div className='user_details'>
          <h3>{username}</h3>
          <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
        </div>
      </div>
      <div className='post_bottom'>
        <p>{message}</p>
      </div>
      <div className='post_image'>{image && <img src={image} />}</div>

      <div className='post_options'>
        <div className='post_option'>
          <ThumbUpAltIcon />
          <p>Like</p>
        </div>
        <div className='post_option'>
          <ShareIcon />
          <p>Share</p>
        </div>
        <div className='post_option'>
          <CommentIcon />
          <p>Comment</p>
        </div>
        <div className='post_option'>
          <ExpandMoreIcon />
          <p>More</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
