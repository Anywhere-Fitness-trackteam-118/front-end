import React from 'react'
import { Form, Field, withFormik } from 'formik'
import * as Yup from 'yup'
import {axiosWithAuth} from '../../utils/axiosWithAuth';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { TextField, Select } from 'formik-material-ui';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor:"#f3ebe1",
    opacity:.9,
    borderRadius:15,
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    background: '#111e6c',
    color: 'white',
  },
}));

const Register = ({ errors, touched}) => {
const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
    <CssBaseline />

    <div className = {classes.paper}>
      <Typography component="h1" variant="h5">SignUp!</Typography>

      <Form>
      <Field component={TextField}
        variant="outlined"
        margin="normal"
        fullWidth
          type='text'
          name='name'
          label='name'
          autoComplete='name'
          className='input'
        />
        {touched.name && errors.name && <p className='error'>{errors.name}</p>}
        <Field component={TextField}
        variant="outlined"
        margin="normal"
        fullWidth
          type='text'
          name='email'
          label='email'
          autoComplete='email'
          className='input'
        />
        {touched.email && errors.email && <p className='error'>{errors.email}</p>}
        <Field component={TextField}
        variant="outlined"
        margin="normal"
        fullWidth
          type='text'
          name='username'
          label='Username'
          autoComplete='user-name'
          className='input'
        />
        {touched.username && errors.username && <p className='error'>{errors.username}</p>}
        <Field component={TextField}
        variant="outlined"
        margin="normal"
        fullWidth
          type='password'
          name='password'
          autoComplete='new-password'
          label='Password'
          className='input'
        />
        {touched.password && errors.password && (
          <p className='error'>{errors.password}</p>
        )}
        <FormControl fullWidth>
         <Field component={TextField}
        variant="outlined"
        margin="normal"
        fullWidth
          type='text'
          name='role'
          label='instructor or user'
          className='role'
        />
        {touched.role && errors.role && (
          <p className='error'>{errors.role}</p>
        )}
        </FormControl>

        <Button type='submit' fullWidth variant="contained" className={classes.submit}>
          Submit
        </Button>
      </Form>
      </div>
    </Container>
  )
}


const FormikApp = withFormik({
  mapPropsToValues({ name, email, username, password, role }) {
    return {
      name: name || '',
      email: email || '',
      username: username || '',
      password: password || '',
      role: role || '',
    }
  },
  validationSchema: Yup.object().shape({
    name: Yup.string()
    .required('name Required'),
    email: Yup.string()
    .required('email Required'),
    username: Yup.string()
    .required('username Required'),
    password: Yup.string()
    .min(2, 'Password Too Short')
    .max(28, 'Password Too Long')
    .required(),
    role: Yup.string()
    .oneOf(['instructor', 'users'])
  }),
  
  handleSubmit(values, { setStatus, props }){
    console.log("User submitted");
    axiosWithAuth()
    .post("/auth/register", values)
    .then(res => {
        setStatus(res.data);
        console.log(res);
        console.log("User submitted");
        window.location.assign('/user')
      })
      .catch(error => console.log(error.response));
  }
})
const PopulatedRegisterForm = FormikApp(Register)

export default PopulatedRegisterForm;

