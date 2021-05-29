import React from 'react';
import './header.css';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleSharpIcon from '@material-ui/icons/SupervisedUserCircleSharp';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { IconButton, Avatar } from '@material-ui/core';
import { useDataLayerValue } from '../DataLayer';

function Header() {
  const [{ user }, dispatch] = useDataLayerValue();
  const { displayName, photoURL } = user;
  return (
    <div className='header'>
      <div className='header_left'>
        <img
          className='header_logo'
          alt='facebook-logo'
          src='https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png'
        />
        <div className='search'>
          <SearchOutlinedIcon fontSize='large' />
          <input placeholder='Search' type='text' />
        </div>
      </div>
      <div classNam='header_middle'>
        <IconButton>
          <HomeIcon fontSize='large' className='active_icon' />
        </IconButton>
        <IconButton>
          <FlagIcon fontSize='large' />
        </IconButton>
        <IconButton>
          <SubscriptionsIcon fontSize='large' />
        </IconButton>
        <IconButton>
          <StorefrontOutlinedIcon fontSize='large' />
        </IconButton>
        <IconButton>
          <SupervisedUserCircleSharpIcon fontSize='large' />
        </IconButton>
      </div>
      <div className='header_right'>
        <div className='user_info'>
          <Avatar src={photoURL} />
          <h4>{displayName}</h4>
        </div>
        <IconButton>
          <AddIcon fontSize='large' />
        </IconButton>
        <IconButton>
          <ForumIcon fontSize='large' />
        </IconButton>
        <IconButton>
          <NotificationsIcon fontSize='large' />
        </IconButton>
        <IconButton>
          <ExpandMoreIcon fontSize='large' />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
