import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
// style
import { Button } from '@material-ui/core';
// component
import ListTable from '../commons/ListTable';
import SpaceRow from '../layout/SpaceRow';
// redux
import { useSelector, useDispatch } from 'react-redux';
import postActions from '../../redux/actions/postActions';
import userActions from '../../redux/actions/userActions';

const List = () => {
  const dispatch = useDispatch();
  const postList = useSelector((state) => state.asyncListData).payload;
  const asyncCurrentUser = useSelector((state) => state.asyncCurrentUser);

  useEffect(() => {
    dispatch(postActions.getAsyncListData());
    dispatch(userActions.getAsyncCurrentUser());
  }, []);

  const history = useHistory();

  const handleDelete = async (item) => {
    const id = item.id;
    dispatch(postActions.deleteAsyncData(id));
    history.go(0);
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
        currentUser={asyncCurrentUser?.payload?.data}
      />
    </>
  );
};
export default List;
