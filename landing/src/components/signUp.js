import react,{useState} from 'react'
import {Button, Form, FormGroup, Label, Input} from 'reactstrap'


const initialValues ={
    credentials:{
        name:"",
        email_address:"",
        user_name:"",
        password:"",
        role:"",
// wondering if role should be boolean
    }
}

const Sign_Up= ()=>{
const[state,setState]=useState(initialValues)

const handleChange = (e) => {
    setState({
      credentials: {
        ...state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };
  
return(
    <>
    <h1>Sign Up</h1>
    <Form inline>
    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
           <Label for="name" className="mr-sm-2">Name</Label>
           <Input type="text" name="name" id="name" value={state.credentials.name} onChange={handleChange}placeholder="First & Last Name" />
         </FormGroup>
         <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
           <Label for="emailAddress" className="mr-sm-2">Email Address</Label>
           <Input type="email address" name="emailAddress" id="emailAddress" value={state.credentials.email_address} onChange={handleChange}placeholder="Email Address" />
         </FormGroup>
         <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
           <Label for="userName" className="mr-sm-2">Username</Label>
           <Input type="text" name="username" id="username" value={state.credentials.username} onChange={handleChange}placeholder="Username" />
         </FormGroup>
         <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
           <Label for="examplePassword" className="mr-sm-2">Password</Label>
           <Input type="password" name="password" id="examplePassword" value={state.credentials.password} onChange={handleChange} placeholder="don't tell!" />
         </FormGroup>
         <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
           <Label for="role" className="mr-sm-2">Role</Label>
           <Input type="text" name="role" id="role" value={state.credentials.role} onChange={handleChange}placeholder="Role" />
         </FormGroup>
    </Form>
    </>
)

}