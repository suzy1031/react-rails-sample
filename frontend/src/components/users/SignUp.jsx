import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Cookies from 'js-cookie';
// component
import SignForm from './SignForm';
// redux
import { useSelector, useDispatch } from 'react-redux';
import userActions from '../../redux/actions/userActions';

const SignUp = () => {
  const history = useHistory();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const dispatch = useDispatch();
  const response = useSelector((state) => state.asyncSignUp);
  if (response !== undefined) {
    if (response.status === 200) {
      console.log('start set cookies');
      Cookies.set('_access_token', response.headers['access-token']);
      Cookies.set('_client', response.headers['client']);
      Cookies.set('_uid', response.headers['uid']);
      console.log('finish set cookies');
      history.push('/');
    }
  }

  const signUpHandleSubmit = async (e) => {
    e.preventDefault();

    const params = generateParams();
    dispatch(userActions.postAsyncSignUp(params));
  };

  const generateParams = () => {
    const signUpParams = {
      name: name,
      email: email,
      password: password,
      passwordConfirmation: passwordConfirmation,
    };
    return signUpParams;
  };

  return (
    <SignForm
      name={name}
      setName={setName}
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      passwordConfirmation={passwordConfirmation}
      setPasswordConfirmation={setPasswordConfirmation}
      handleSubmit={signUpHandleSubmit}
      signType='signUp'
    />
  );
};
export default SignUp;
