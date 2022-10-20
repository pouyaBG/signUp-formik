import { useState } from 'react';
import { useFormik } from 'formik';
const SignUpForm = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const changeHandler = ({ target }) => {
    setUserData({ ...userData, [target.name]: target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(e);
  }
  return (
    <>
      <div>
        <div>
          <p className='main-p'>Welcome to PBG form</p>
        </div>
        <form onSubmit={submitHandler}>
          <div className='formControl'>
            <label>Name</label>
            <input
              type='text'
              onChange={changeHandler}
              value={userData.name}
              name='name'
            />
          </div>
          <div className='formControl'>
            <label>Email</label>
            <input
              type='text'
              onChange={changeHandler}
              value={userData.email}
              name='email'
            />
          </div>
          <div className='formControl'>
            <label>Password</label>
            <input
              type='text'
              onChange={changeHandler}
              value={userData.password}
              name='password'
            />
          </div>
          <button>sumbit</button>
        </form>
      </div>
    </>
  );
};

export default SignUpForm;
