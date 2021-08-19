import React, { useState } from 'react';
import FormBody from './Form';
import { useHistory } from 'react-router-dom';
// redux
import { useDispatch } from 'react-redux';
import allActions from '../redux/actions/allActions';

const New = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState({
    name: '',
    nekoType: '',
    favoriteFood: '',
    favoriteToy: '',
  });
  const history = useHistory();

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);

    const params = generateParams();
    dispatch(allActions.postAsyncData(params));
    history.push('/');
  };

  const generateParams = () => {
    const params = {
      name: value.name,
      nekoType: value.nekoType,
      detailInfo: {
        favoriteFood: value.favoriteFood,
        favoriteToy: value.favoriteToy,
      },
    };
    return params;
  };

  return (
    <>
      <h1>NEW</h1>
      <FormBody
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        name={value.name}
        nekoType={value.nekoType}
        favoriteFood={value.favoriteFood}
        favoriteToy={value.favoriteToy}
        buttonType='登録'
      />
    </>
  );
};
export default New;
