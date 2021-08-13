import React from 'react';

const Form = (props) => {
  const { handleChange, handleSubmit, value, buttonType } = props
  return (
    <>
      <form>
        <div>
          <label htmlFor="name">猫の名前：</label>
          <input type="text" name="name" id="name" onChange={(e) => handleChange(e)} value={value.name}/>
        </div>
        <div>
          <label htmlFor="nekoType">猫種</label>
          <input type="text" name="nekoType" id="nekoType" onChange={(e) => handleChange(e)} value={value.nekoType}/>
        </div>
        <input type="submit" value={buttonType} onClick={(e) => handleSubmit(e)}/>
      </form>
    </>
  )
};
export default Form;