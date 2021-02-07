import React from 'react'
import { Form, Field, withFormik } from 'formik'
import * as Yup from 'yup'
import {axiosWithAuth} from '../../utils/axiosWithAuth'

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { TextField } from 'formik-material-ui';

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    background: '#49fcd4',
    color: 'white',
  },
}));


const Login = ({ errors, touched }) => {
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className = {classes.paper}>

<Typography component="h1" variant="h5">Login</Typography>
      <Form>
        <Field component={TextField}
        variant="outlined"
        margin="normal"
        fullWidth
          type='text'
          name='username'
          placeholder='Username'
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
          placeholder='Password'
          className='input'
        />
        {touched.password && errors.password && (
          <p className='error'>{errors.password}</p>
        )}
        <Button type='submit' fullWidth variant="contained" className={classes.submit}>
          Submit
        </Button>
      </Form>
      </div>
    </Container>
  )
}

const FormikApp = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || '',
      password: password || '',
    }
  },
  validationSchema: Yup.object().shape({
    username: Yup.string()
      .required('Username Required'),
    password: Yup.string()
      .min(2, 'Password Too Short')
      .max(28, 'Password Too Long')
      .required(),
  }),
  handleSubmit(values, { setStatus }) {

    axiosWithAuth()
      .post("/auth/login", values)
      .then(res => {
        setStatus(res.data);
        localStorage.setItem('token', res.data.token)
        console.log("Login successful", res);
        window.location.assign('/user');
      })
      .catch(error => console.log(error.response));
  }
})
const PopulatedLoginForm = FormikApp(Login)

export default PopulatedLoginForm;


// add post address