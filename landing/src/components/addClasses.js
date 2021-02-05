import React, {useState} from 'react'
import {Button, Form, FormGroup, Label, Input} from 'reactstrap'


const initialClasses ={
    newClass:{
        id:Date.now,
        name:'',
        instructor_name:'',
        date:'',
        max_size:'',
        duration:'',
        signedUp: false

    }
}
const AddClass = () =>{
const [state, setState] = useState(initialClasses)
handleChange= (e)=>{
    setState({
        newClass:{
            ...state.newClass,
            [e.target.name]:e.target.value
        }
    })
}
addAClass =(e) =>{
    e.preventDefault()

}

return (
    <Form>
        <FormGroup className="Class Form">
            <Label for="name"> Class Name </Label>
            <Input onChange ={handleChange} value={state.newClass.name} type="text" name="name" id="name" placeholder="Class Name"/>
            <Label for="instructor_name">Instructor</Label>
            <Input onChange={handleChange} value={state.newClass.instructor_name} type="text" name="instructor_name" id="instructor_name" placeholder="Instructor's Name"/>
            <Label for="date">Date</Label>
            <Input onChange={handleChange} value={state.newClass.date} type="text" name="date" id="date" placeholder="Date"/>
            <Label for="max_size">Max Class Size</Label>
            <Input onChange={handleChange} value={state.newClass.max_size} type="text" name="max_size" placeHolder="max_size" id="max_size"/>
            <Label for="duration">Class Duration</Label>
            <Input onChange={handleChange} value={state.newClass.duration} type="text" name="duration" id="duration" placeholder="duration"/>
        </FormGroup>
        <Button onClick={AddAClass}>Add A Class</Button>
    </Form>
)
}
export default AddClass