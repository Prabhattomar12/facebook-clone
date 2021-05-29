import React from 'react';
import './sidebarRow.css';
import { Avatar } from '@material-ui/core';

function SidebarRow({ src, title, Icon }) {
  return (
    <div className='sidebarRow'>
      {src && <Avatar src={src} />}
      {Icon && <Icon className="sidebarIcon" />}
      <h4>{title}</h4>
    </div>
  );
}

export default SidebarRow;
