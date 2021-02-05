// here we will need to add, and delete classes for users to sign up for and for instructors to create.
import react from "react"
import {Card, CardText, CardBody, CardTitle, CardSubtitle,Button} from 'reactstrap';

const Classes = () =>{
  state = {
      classList:[]
  }
return(
    <div>
        {state.classList.map( class =>
        <Card key={class.id}>
        <CardBody>
        <CardTitle tag="h5">{class.className}</CardTitle>
        </CardBody>
        </Card>
        )}
    </div>
)
}