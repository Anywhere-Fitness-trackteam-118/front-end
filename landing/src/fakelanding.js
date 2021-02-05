import React, {useState} from "react"
import {Button} from 'reactstrap'
import Login from "./components/login"
import {BrowserRouter as Router, Link } from "react-router-dom"
import Search from "./components/search"
export default function FakeLanding(){
    const [searchQuery, setSearchQuery] = useState(query || '');
    const { search } = window.location;
    const query = new URLSearchParams(search).get('s'); 
    const filterClasses = (classes, query) => {
        if (!query) {
            return classes;
        }
    
        return classes.filter((classes) => {
            const ClassName = classes.name.toLowerCase();
            return ClassName.includes(query);
        });
    };


return (
    <div>
    <h1>Anywhere Fitness Landing Page</h1><br><Search
    searchQuery={searchQuery}
    setSearchQuery={setSearchQuery}/>
    <ul>
                {filterClasses.map((classes) => (
                    <li key={classes.id}>{classes.name}</li>
                ))}
            </ul></br>
    <h3>Please Select A User Type</h3><br></br>
    <Router>
    <Button name="userButton"> Instructor Log In </Button><br></br>
    <Button name="userButton">Client Log In</Button>
    </Router>
    </div>
)
}