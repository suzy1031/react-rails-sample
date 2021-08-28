import React from 'react';
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

const App = () => {
  const Private = ({ children }) => {
    if (Cookies.get('_uid')) {
      return children;
    } else {
      return <Redirect to='/signin' />;
    }
  };

  return (
    <>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
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
        </ThemeProvider>
      </StylesProvider>
    </>
  );
};
export default App;
