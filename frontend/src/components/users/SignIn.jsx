import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Cookies from 'js-cookie';
// component
import SignForm from './SignForm';
// redux
import { useSelector, useDispatch } from 'react-redux';
import userActions from '../../redux/actions/userActions';

const SignIn = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const response = useSelector((state) => state.asyncSignIn);
  if (response != undefined) {
    if (response.status === 200) {
      console.log('start set cookies');
      Cookies.set('_access_token', response.headers['access-token']);
      Cookies.set('_client', response.headers['client']);
      Cookies.set('_uid', response.headers['uid']);
      console.log('finish set cookies');
      history.push('/');
    }
  }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signInHandleSubmit = (e) => {
    e.preventDefault();

    const params = generateParams();
    dispatch(userActions.postAsyncSignIn(params));
  };

  const generateParams = () => {
    const signInParams = {
      email: email,
      password: password,
    };
    return signInParams;
  };

  return (
    <SignForm
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      handleSubmit={signInHandleSubmit}
      signType='signIn'
    />
  );
};
export default SignIn;
