import React, {useState} from "react";
import {Button} from "reactstrap"
import { Route } from "react-router-dom";
import './reg.css'

const RegistrationForm = () => {

    const [user,setUser]= useState({username:"",fullName:"",password:"",phoneNumber:""})
    const handleChanges= (event)=>{
        setUser({...user,[event.target.name]:event.target.value})
        console.log(user)
    }
    const submitForm = (event)=>{
        event.preventDefault();
        const newUser ={
            id: Date.now(),
            username:user.username,
            fullName:user.fullName,
            password:user.password,
            phoneNumber:user.phoneNumber,
          }
          setUser(newUser)
          console.log(newUser)

    }


return(
    <div name="registration" id="registration">
    <form onSubmit={submitForm}>
        <label htmlFor="username">Username</label>
        <input
        id="username"
        name="username"
        type="text"
        onChange={handleChanges}
        value={user.username}
        />
        <label htmlFor="fullName">Full Name</label>
         <input
        id="fullName"
        name="fullName"
        type="text"
        onChange={handleChanges}
        value={user.fullName}
        />
        <label htmlFor="password">Password</label>
        <input 
        id="password"
        name="password"
        type="text"
        onChange={handleChanges}
        value={user.password}
        />
        <label htmlFor="phoneNumber">Phone Number</label>
        <input 
        id="phoneNumber"
        name="phoneNumber"
        type="tel"
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        onChange={handleChanges}
        value={user.phoneNumber}
        required
        />
        <Button type='submit'>Submit</Button>
    </form>
    </div>
    
)
}
export default RegistrationForm