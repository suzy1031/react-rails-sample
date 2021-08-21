import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
// style
import { Button } from '@material-ui/core';
// component
import ListTable from '../commons/ListTable';
import SpaceRow from '../layout/SpaceRow';
// redux
import { useSelector, useDispatch } from 'react-redux';
import allActions from '../../redux/actions/allActions';

const List = () => {
  const dispatch = useDispatch();
  const postList = useSelector((state) => state.asyncListData).payload;
  const asyncCurrentUser = useSelector((state) => state.asyncCurrentUser);

  useEffect(() => {
    dispatch(allActions.getAsyncListData());
    dispatch(allActions.getAsyncCurrentUser());
  }, []);

  const history = useHistory();

  const handleDelete = async (item) => {
    const id = item.id;
    dispatch(allActions.deleteAsyncData(id));
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
