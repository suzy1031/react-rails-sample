import React, { useEffect } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
// style
import { Button } from '@material-ui/core';
// component
import SpaceRow from '../layout/SpaceRow';
import ListTable from '../commons/ListTable';
// redux
import { useSelector, useDispatch } from 'react-redux';
import userActions from '../../redux/actions/userActions';

const UserPost = () => {
  const dispatch = useDispatch();
  const asyncCurrentUser = useSelector(
    (state) => state.asyncCurrentUser
  ).payload;
  const asyncUserPosts = useSelector(
    (state) => state.asyncUserPostsData
  ).payload;
  const history = useHistory();

  useEffect(() => {
    dispatch(userActions.getAsyncCurrentUser());
    if (asyncCurrentUser?.data.id) {
      dispatch(userActions.getAsyncUserPostsData(asyncCurrentUser?.data.id));
    } else {
      <Redirect to='/signin' />;
    }
  }, []);

  const handleDelete = async (item) => {
    const id = item.id;
    dispatch(userActions.deleteAsyncData(id));
    history.go(0);
  };

  const UserTable = () => {
    if (asyncUserPosts?.length >= 1) {
      return (
        <ListTable
          dataList={asyncUserPosts}
          handleDelete={handleDelete}
          currentUser={asyncCurrentUser?.data}
        />
      );
    } else {
      return <h2>投稿はありません。</h2>;
    }
  };

  return (
    <>
      <h1>{asyncCurrentUser?.data.name}の投稿一覧</h1>
      <Button
        variant='contained'
        color='primary'
        onClick={() => history.push('/')}
      >
        戻る
      </Button>
      <SpaceRow height={20} />
      <UserTable />
    </>
  );
};
export default UserPost;
