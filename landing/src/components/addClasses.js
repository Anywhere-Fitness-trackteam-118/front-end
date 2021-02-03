import React, {useState} from 'react'
import {Button, Form, FormGroup, Label, Input} from 'reactstrap'


const initialClasses ={
    newClass:{
        className:'',
        duration:'',
        instructorName:'',
        location:''
    }

}

const AddClass = () =>{
const [state, setState] = useState(initialClasses)


return (
    <Form>
        <FormGroup className="Class Form">
            <Label for="className"> Class Name </Label>
            <Input onChange ={handleChange} value={state.newClass.className} type="text" name="className" id="className" placeholder="Class Name"/>
            <Label for="duration">Class Length</Label>
            <Input onChange={handleChange} value={state.newClass.duration} type="text" name="duration" id="duration"/>
            <Label for="instructorName">Instructor</Label>
            <Input onChange={handleChange} value={state.newClass.instructorName} type="text" name="instructorName" id="instructorName"/>
            <Label for="location">Location</Label>
            <Input onChange={handleChange} value={state.newClass.location} type="text" name="location" id="location"/>
        </FormGroup>
        <Button onClick={AddClass}>Add Class</Button>
    </Form>
)
}
export default AddClass