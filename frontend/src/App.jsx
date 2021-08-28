import React, { useState, useEffect, createContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Cookies from 'js-cookie';
// component
import List from './components/posts/List';
import New from './components/posts/New';
import Detail from './components/posts/Detail';
import Edit from './components/posts/Edit';
import Header from './components/commons/Header';
import SignUp from './components/users/SignUp';
import SignIn from './components/users/SignIn';
import MainContainer from './components/layout/MainContainer';
import UserPost from './components/users/UserPost';
// style
import { CssBaseline } from '@material-ui/core';
import { StylesProvider, ThemeProvider } from '@material-ui/styles';
import { theme } from './styles/theme';

import { getCurrentUser } from './lib/api/auth';

export const AuthContext = createContext();

const App = () => {
  const [loading, setLoading] = useState(true);
  const [isSignedIn, setIsSignedIn] = useState(false);

  const handleGetCurrentUser = async () => {
    try {
      const res = await getCurrentUser();

      if (res?.data.isLogin === true) {
        setIsSignedIn(true);
      } else {
        console.log('no current user');
        // token有効期限が切れている場合、古いcookieを全て削除
        Cookies.remove('_access_token');
        Cookies.remove('_client');
        Cookies.remove('_uid');
      }
    } catch (e) {
      console.log(e);
    }

    setLoading(false);
  };

  useEffect(() => {
    handleGetCurrentUser();
  }, []);

  const Private = ({ children }) => {
    if (!loading) {
      if (isSignedIn) {
        return children;
      } else {
        return <Redirect to='/signin' />;
      }
    } else {
      return <></>;
    }
  };

  return (
    <>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <AuthContext.Provider
            value={{
              loading,
              setLoading,
              isSignedIn,
              setIsSignedIn,
            }}
          >
            <CssBaseline />

            <Router>
              <Header />
              <MainContainer>
                <Switch>
                  <Route exact path='/signup' component={SignUp} />
                  <Route exact path='/signin' component={SignIn} />
                  <Private>
                    <Route exact path='/' component={List} />
                    <Route path='/post/:id' component={Detail} />
                    <Route exact path='/new' component={New} />
                    <Route path='/edit/:id' component={Edit} />
                    <Route exact path='/user/posts' component={UserPost} />
                  </Private>
                </Switch>
              </MainContainer>
            </Router>
          </AuthContext.Provider>
        </ThemeProvider>
      </StylesProvider>
    </>
  );
};
export default App;
