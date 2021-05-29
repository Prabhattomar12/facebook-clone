import React from 'react';
import './sidebar.css';
import SidebarRow from './SidebarRow';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import PagesIcon from '@material-ui/icons/Pages';
import GroupIcon from '@material-ui/icons/Group';
import MessageIcon from '@material-ui/icons/Message';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useDataLayerValue } from '../DataLayer';

function Sidebar() {
  const [{ user }] = useDataLayerValue();
  const { displayName, photoURL } = user;
  return (
    <div className='sidebar'>
      <SidebarRow src={photoURL} title={displayName} />
      <SidebarRow title='COVID-19 Informaton Center' Icon={LocalHospitalIcon} />
      <SidebarRow title='Pages' Icon={PagesIcon} />
      <SidebarRow title='Friends' Icon={GroupIcon} />
      <SidebarRow title='Messenger' Icon={MessageIcon} />
      <SidebarRow title='MarketPalace' Icon={StorefrontIcon} />
      <SidebarRow title='Vedios' Icon={VideoLibraryIcon} />
      <SidebarRow title='More' Icon={ExpandMoreIcon} />
    </div>
  );
}

export default Sidebar;
