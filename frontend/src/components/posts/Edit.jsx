import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import FormBody from '../commons/Form';
// redux
import { useSelector, useDispatch } from 'react-redux';
import postActions from '../../redux/actions/postActions';

const Edit = () => {
  const dispatch = useDispatch();
  const asyncData = useSelector((state) => state.asyncDetailData).payload;
  const [value, setValue] = useState({
    name: '',
    nekoType: '',
    favoriteFood: '',
    favoriteToy: '',
  });

  const query = useParams();

  const history = useHistory();

  useEffect(() => {
    const id = query.id;
    dispatch(postActions.getAsyncDetailData(id));
  }, []);

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const params = generateParams();
    const id = query.id;
    dispatch(postActions.patchAsyncData(id, params));
    history.push('/');
  };

  const generateParams = () => {
    const params = {
      name: value.name || asyncData.name,
      nekoType: value.nekoType || asyncData.nekoType,
      detailInfo: {
        favoriteFood: value.favoriteFood || asyncData.detailInfo.favoriteFood,
        favoriteToy: value.favoriteToy || asyncData.detailInfo.favoriteToy,
      },
    };
    return params;
  };

  return (
    <>
      <h1>Edit</h1>
      <FormBody
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        name={value.name ? value.name : asyncData?.name}
        nekoType={value.nekoType ? value.nekoType : asyncData?.nekoType}
        favoriteFood={
          value.favoriteFood
            ? value.favoriteFood
            : asyncData?.detailInfo.favoriteFood
        }
        favoriteToy={
          value.favoriteToy
            ? value.favoriteToy
            : asyncData?.detailInfo.favoriteToy
        }
        buttonType='更新'
      />
    </>
  );
};
export default Edit;
