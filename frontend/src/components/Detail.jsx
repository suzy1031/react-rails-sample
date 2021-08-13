import React, { useEffect, useState } from 'react';
import { getDetail } from '../lib/api/post';
import { useHistory, useParams } from 'react-router-dom';

const Detail = (props) => {
  const [data, setData] = useState({});
  const query = useParams();
  const history = useHistory();

  useEffect(() => {
    handleGetDetail(query);
  }, [query]);

  const handleGetDetail = async (query) => {
    try {
      const res = await getDetail(query.id);
      console.log(res.data);
      setData(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <h1>DETAIL</h1>
      <div>ID：{data.id}</div>
      <div>名前：{data.name}</div>
      <div>猫種：{data.nekoType}</div>
      <button onClick={() => history.push('/')}>戻る</button>
    </>
  );
};
export default Detail;