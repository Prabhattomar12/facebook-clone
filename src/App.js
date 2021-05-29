import React from 'react';
import Header from './Components/Header';
import './App.css';
import Sidebar from './Components/Sidebar';
import Feeds from './Components/Feeds';
import Widget from './Components/Widget';
import Login from './Components/Login';
import { useDataLayerValue } from './DataLayer';

function App() {
  const [{ user }, dispatch] = useDataLayerValue();
  console.log(user);
  return (
    <div className='App'>
      {user ? (
        <div>
          {' '}
          <Header />
          <div className='app_body'>
            <Sidebar />
            <Feeds />
            <Widget />
          </div>{' '}
        </div>
      ) : (
        <Login dispatch={dispatch} />
      )}
    </div>
  );
}

export default App;
