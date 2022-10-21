import { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';


const initialValues = {
  name: "",
  email: "",
  password: "",
}

// error validation
// const validate = (values) => {
//   let errors = {};
//   if (!values.name) { errors.name = "Please enter a name!" }
//   if (!values.email) { errors.email = "Please enter a email!" }
//   if (!values.password) { errors.password = "Please enter a password!" }
//   return errors
// }

// with yup
const validationSchema = yup.object({
  name: yup.string().required("Please enter a name!"),
  email: yup.string().email().required("Please enter a email!"),
  password: yup.string().required("Please enter a password!")
})
const SignUpForm = () => {

  const onSubmit = (values) => {
    console.log(values);
  }

  const formik = useFormik({
    initialValues,
    onSubmit: onSubmit,
    validationSchema: validationSchema
  })
  // const [userData, setUserData] = useState({
  //   name: '',
  //   email: '',
  //   password: '',
  // });

  // const changeHandler = ({ target }) => {
  //   setUserData({ ...userData, [target.name]: target.value });
  // };

  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   console.log(e);
  // }
  return (
    <>
      <div>
        <div>
          <p className='main-p'>Welcome to PBG form</p>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div className='formControl'>
            <label>Name</label>
            <input
              type='text'
              {...formik.getFieldProps("name")}
              // onBlur={formik.handleBlur}
              // onChange={formik.handleChange}
              // value={formik.values.name}
              name='name'
            />
            {formik.errors.name && formik.touched.name && <div className='error'>{formik.errors.name}</div>}
          </div>
          <div className='formControl'>
            <label>Email</label>
            <input
              type='text'
              {...formik.getFieldProps("email")}
              // onBlur={formik.handleBlur}
              // onChange={formik.handleChange}
              // value={formik.values.name}
              name='email'
            />
            {formik.errors.email && formik.touched.email && <div className='error'>{formik.errors.email}</div>}
          </div>
          <div className='formControl'>
            <label>Password</label>
            <input
              type='text'
              {...formik.getFieldProps("password")}
              // onBlur={formik.handleBlur}
              // onChange={formik.handleChange}
              // value={formik.values.name}
              name='password'
            />
            {formik.errors.password && formik.touched.password && <div className='error'>{formik.errors.password}</div>}
          </div>
          <button type='sumbit'>sumbit</button>
        </form>
      </div>
    </>
  );
};

export default SignUpForm;
