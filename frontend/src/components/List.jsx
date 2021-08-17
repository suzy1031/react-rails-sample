import React, { useEffect, useContext } from 'react';
import { deletePost } from '../lib/api/post';
import { useHistory } from 'react-router-dom';
// style
import { Button } from '@material-ui/core';
// component
import ListTable from './commons/ListTable';
import SpaceRow from './commons/SpaceRow';
// context
import { AuthContext } from '../App';
// redux
import { useSelector, useDispatch } from 'react-redux';
import allActions from '../actions/allActions';

const List = () => {
  const dispatch = useDispatch();
  const postList = useSelector((state) => state.asyncListData).payload;
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    dispatch(allActions.getAsyncListData());
  }, []);

  const history = useHistory();

  const handleDelete = async (item) => {
    console.log('click', item.id);
    try {
      const res = await deletePost(item.id);
      console.log(res.data);
      dispatch(allActions.getAsyncListData());
    } catch (e) {
      console.log(e.response);
    }
  };

  return (
    <>
      <h1>HOME</h1>
      <Button
        variant='contained'
        color='primary'
        onClick={() => history.push('/new')}
      >
        新規作成
      </Button>
      <SpaceRow height={20} />
      <ListTable
        dataList={postList}
        handleDelete={handleDelete}
        currentUser={currentUser}
      />
    </>
  );
};
export default List;
