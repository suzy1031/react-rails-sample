import React, { FC, useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import Cookies from 'js-cookie';
// style
import { createStyles, makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
// component
import HeaderDrawer from './HeaderDrawer';
// redux
import { useSelector, useDispatch } from 'react-redux';
import userActions from '../../redux/actions/userActions';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    linkBtn: {
      textTransform: 'none',
    },
  })
);

const drawerItem = [
  { label: '一覧へ戻る', path: '/' },
  { label: '新規作成', path: '/new' },
  { label: '自分の投稿', path: '/user/posts' },
];

const Header = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const asyncCurrentUser = useSelector(
    (state) => state.asyncCurrentUser
  ).payload;
  const signOutRes = useSelector((state) => state.asyncSignOut);
  if (signOutRes !== '') {
    if (signOutRes.status === true) {
      Cookies.remove('_access_token');
      Cookies.remove('_client');
      Cookies.remove('_uid');
      history.go(0);
    } else {
      console.log('failed in sign out');
    }
  }

  useEffect(() => {
    dispatch(userActions.getAsyncCurrentUser());
  }, []);

  const handleSignOut = (e) => {
    dispatch(userActions.postAsyncSignOut());
  };

  const AuthButtons = () => {
    if (asyncCurrentUser?.isLogin) {
      return (
        <Button
          color='inherit'
          className={classes.linkBtn}
          onClick={handleSignOut}
        >
          Sign out
        </Button>
      );
    } else {
      return (
        <>
          <Button
            component={Link}
            to='/signin'
            color='inherit'
            className={classes.linkBtn}
          >
            Sign in
          </Button>
          <Button
            component={Link}
            to='/signup'
            color='inherit'
            className={classes.linkBtn}
          >
            Sign Up
          </Button>
        </>
      );
    }
  };

  const [open, setOpen] = useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className={classes.root}>
        <AppBar position='static'>
          <Toolbar>
            {asyncCurrentUser?.isLogin && (
              <IconButton
                edge='start'
                className={classes.menuButton}
                color='inherit'
                aria-label='menu'
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
            )}
            <Typography variant='h6' className={classes.title}>
              React Rails API Practice
            </Typography>
            <AuthButtons />
          </Toolbar>
        </AppBar>
      </div>
      <HeaderDrawer
        open={open}
        handleDrawerToggle={handleDrawerToggle}
        drawerItem={drawerItem}
      />
    </>
  );
};
export default Header;
