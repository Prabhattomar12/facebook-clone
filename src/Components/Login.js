import React from 'react';
import './login.css';
import { Button } from '@material-ui/core';
import { auth, provider } from '../firebase.js';
import { useDataLayerValue } from '../DataLayer.js';
import { actionTypes } from '../reducer';

function Login() {
  const [{ user }, dispatch] = useDataLayerValue();

  const signIn = () => {

    auth
      .signInWithPopup(provider)
      .then((result) => {
        // console.log('User ', result.user);
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };


  return (
    <div className='login'>
      <div className='login_logo'>
        <img
          className='login_logo_image'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1365px-Facebook_f_logo_%282019%29.svg.png'
        />
        <img
          className='login_logo_text'
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-xoSZ7FWb15H0zon7OMAHIcjcp22zp-QzsN28JjL-bR4q8O5cOMULcVd7-Yqbo7Jka0s&usqp=CAU'
        />
      </div>
      <Button onClick={signIn}> Sign In With Google </Button>
    </div>
  );
}

export default Login;
