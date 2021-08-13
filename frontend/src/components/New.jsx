import React, { useState } from 'react';
import FormBody from './Form';
import { createPost } from '../lib/api/post';
import { useHistory } from 'react-router-dom';

const New = () => {
  const [value, setValue] = useState({})
  const history = useHistory();

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await createPost(value)
      console.log(res)
      history.push('/')
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <>
      <h1>NEW</h1>
      <FormBody
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        value={value}
        buttonType='登録'
      />
    </>
  )
};
export default New;