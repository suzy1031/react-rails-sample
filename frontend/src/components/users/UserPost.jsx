import React, { useContext, useState, useEffect } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
// style
import { Button } from '@material-ui/core';
// api
import { getUserPosts } from '../../lib/api/user';
import { deletePost } from '../../lib/api/post';
// context
import { AuthContext } from '../../App';
// component
import SpaceRow from '../layout/SpaceRow';
import ListTable from '../commons/ListTable';

const UserPost = () => {
  const { loading, isSignedIn, currentUser } = useContext(AuthContext);
  const [userPosts, setUserPosts] = useState({});
  const history = useHistory();

  useEffect(() => {
    handleGetUserPosts();
  }, [currentUser]);

  const handleGetUserPosts = async () => {
    if (!loading) {
      if (isSignedIn) {
        const res = await getUserPosts(currentUser.id);
        console.table(res.data);
        setUserPosts(res.data);
      } else {
        <Redirect to='/signin' />;
      }
    }
  };

  const handleDelete = async (item) => {
    console.log('click', item.id);
    try {
      const res = await deletePost(item.id);
      console.log(res.data);
      handleGetUserPosts();
    } catch (e) {
      console.log(e);
    }
  };
  const UserTable = () => {
    if (userPosts.length >= 1) {
      return (
        <ListTable
          dataList={userPosts}
          handleDelete={handleDelete}
          currentUser={currentUser}
        />
      );
    } else {
      return <h2>投稿はありません。</h2>;
    }
  };

  return (
    <>
      <h1>{currentUser.name}の投稿一覧</h1>
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
