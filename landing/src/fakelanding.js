import {Button} from 'reactstrap'
import Login from "./components/login"
import {BrowserRouter as Router, Link } from "react-router-dom"

export default function FakeLanding(){
return (
    <div>
    <h1>Anywhere Fitness Landing Page</h1><br></br>
    <h3>Please Select A User Type</h3><br></br>
    <Router>
    <Link exact path="/" component= {Login}> <Button name="userButton"> Instructor Log In </Button> </Link> <br></br>
    <Button name="userButton">Client Log In</Button>
    </Router>
    </div>
)

}