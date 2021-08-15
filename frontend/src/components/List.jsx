import React, { useEffect, useState } from 'react';
import { getList, deletePost } from '../lib/api/post';
import { useHistory } from 'react-router-dom';
// style
import { Button } from '@material-ui/core';
// component
import ListTable from './commons/ListTable';
import SpaceRow from './commons/SpaceRow';

const List = () => {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    handleGetList();
  }, []);

  const handleGetList = async () => {
    try {
      const res = await getList();
      console.log(res.data);
      setDataList(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  const history = useHistory();

  const handleDelete = async (item) => {
    console.log('click', item.id);
    try {
      const res = await deletePost(item.id);
      console.log(res.data);
      handleGetList();
    } catch (e) {
      console.log(e);
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
      <ListTable dataList={dataList} handleDelete={handleDelete} />
    </>
  );
};
export default List;