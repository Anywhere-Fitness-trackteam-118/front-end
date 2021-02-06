import React from 'react'
import { Form, Field, withFormik } from 'formik'
import * as Yup from 'yup'
import axiosWithAuth from '../../utils/axiosWithAuth'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import { TextField } from 'formik-material-ui';

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import { makeStyles } from '@material-ui/core/styles';

const jwt = require("jsonwebtoken");

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


const AddClasses = ({ errors, touched, values }) => {
const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className = {classes.paper}>

      <Typography component="h1" variant="h5">Submit your classes!</Typography>


      <Form>
        <Field component={TextField}
        variant="outlined"
        margin="normal"
        fullWidth
          type='text'
          name='classesName'
          autoComplete='new-name'
          className='input'
          label="Recipe Name"
        />
        {touched.classesName && errors.classesName && <p className='error'>{errors.classesName}</p>}

        <Field component={TextField}
        variant="outlined"
        margin="normal"
        fullWidth
          type='text'
          name='classesName'
          autoComplete='new-name'
          className='input'
          label="Recipe Name"
        />
        {touched.classesName && errors.classesName && <p className='error'>{errors.classesName}</p>}
        
        <Field          variant="outlined"
        margin="normal"
        fullWidth
        component={TextField}
          type='text'
          name='ingredientList'
          autoComplete='new-name'
          className='input'
          label="Ingredient List"
        />
        {touched.ingredientList && errors.ingredientList && <p className='error'>{errors.ingredientList}</p>}
        <Field         variant="outlined"
        margin="normal"
        fullWidth
        component={TextField}
          type='text'
          name='directions'
          label='Directions'
          autoComplete='user-name'
          className='input'
        />
        {touched.directions && errors.directions && <p className='error'>{errors.directions}</p>}
        <Field         variant="outlined"
        margin="normal"
        fullWidth
        component={TextField}
          type='text'
          name='source'
          label='Source'
          className='input'
        />
        {touched.source && errors.source && (
          <p className='error'>{errors.source}</p>
        )}
        <Field         variant="outlined"
        margin="normal"
        fullWidth
        component={ TextField }
          type='text'
          name='description'
          label='Description'
          className='input'
        />
        {touched.description && errors.description && (
          <p className='error'>{errors.description}</p>
        )}
        <Button type='submit' fullWidth variant="contained"  className={classes.submit}>
          Submit
        </Button>
      </Form>

      </div>
    </Container>
  )
}

const FormikApp = withFormik({
  mapPropsToValues({ name, instructor_name, type, intensity, location, date, max_size, duration, signedUp}) {
    return {
      classesName: classesName || '',
      ingredientList: ingredientList || '',
      directions: directions || '',
      source: source || '',
      description: description || '',
      category: category || '',
    }
  },
  validationSchema: Yup.object().shape({
    classesName: Yup.string()
      .required('Classes Name Required'),
    ingredientList: Yup.string()
      .required('IngredientList Required'),
    category: Yup.string()
      .oneOf(['appetizer', 'entree', 'dessert', 'beverage']).required('please choose a category'),
  }),
  handleSubmit(values, { setStatus }) {
    console.log("Classes added");
    let token = localStorage.getItem('token');
    token = jwt.decode(token.process.env.JWT_SECRET);
    console.log(token);
    let userid = {"user_id" : token.user_id};
    values.push(userid);
    
    axiosWithAuth()
    .post("", values)
    .then(res => {
        setStatus(res.data);
        console.log(res);
        console.log("Classes submitted");
        window.location.assign('/user')
      })
      .catch(error => console.log(error.response));
  }
})
const SingleClasses = FormikApp(AddClasses)

export default SingleClasses;
