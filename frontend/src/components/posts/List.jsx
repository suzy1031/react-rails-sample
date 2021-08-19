import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
// style
import { Button } from '@material-ui/core';
// component
import ListTable from '../commons/ListTable';
import SpaceRow from '../layout/SpaceRow';
// context
import { AuthContext } from '../../App';
// redux
import { useSelector, useDispatch } from 'react-redux';
import allActions from '../../redux/actions/allActions';

const List = () => {
  const dispatch = useDispatch();
  const postList = useSelector((state) => state.asyncListData).payload;
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    dispatch(allActions.getAsyncListData());
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
        currentUser={currentUser}
      />
    </>
  );
};
export default List;
