import React, { useEffect, useState } from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth';

import {useHistory} from "react-router-dom";
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { decode } from 'jsonwebtoken';
import ClassesCard from './classes/ClassesCard';
import { Button, TextField} from '@material-ui/core';

const initialClasses = {
    name: "",
    instructor_name: "",
    type: "",
    intensity: "",
    location: "",
    date: "",
    max_size: "",
    duration: "",
    signedUp: "",
};

const ClassesList = () => {
  var [classes, setClassesList] = useState([]); 
  var [userSubject, setUserSubject] = useState(decode(localStorage.getItem('token')).subject);

  useEffect(() => {
    axiosWithAuth()
      .get(`/users/${decode(localStorage.getItem('token')).subject}/classes`)
      .then(res => {
          console.log(res.data);
        setClassesList(res.data);
      })
      .catch(err => console.log(err));
  }, []);
  
  const [editing, setEditing] = useState(false);
  const [classesToEdit, setClassesToEdit] = useState(initialClasses);
  const [classesToAdd, setClassesToAdd] = useState(initialClasses);
  const { go } = useHistory();

  const editClasses = classes => {
    setEditing(true);
    setClassesToEdit(classes);
  };

  const saveEdit = e => {
    e.preventDefault();
    var classesTemp = {...classesToEdit};
    delete classesTemp.classes_id;
    delete classesTemp.user;
    setClassesToEdit(classesTemp);
        axiosWithAuth()
      .put(`/classes/${classesToEdit.classes_id}`, classesTemp)
      .then(res => {
        console.log(res);
        go(0);
      })
      .catch(err => console.log(err));
  };

  const deleteClasses = classes => {
    axiosWithAuth()
      .delete(`/classes/${classes.classes_id}`)
      .then(res => {
        console.log(res);
                go(0);
      })
      .catch(err => console.log(err));
  };

  const addClasses = e => {
    e.preventDefault();
    axiosWithAuth().post(`/auth/instructor/classes`, classesToAdd)
    .then(res => {
      console.log(res);
      go(0);
    })
    .catch(err => console.log(err));
  };

  return (
    <div className="classes-wrap">
      <h1>The Classes</h1>
      <ul>
        {classes.map(classes => (
          <li key={classes.classes_id} onClick={() => editClasses(classes)}>
            <span>
              <Button color="secondary" className="delete" onClick={e => {
                    e.stopPropagation();
                    deleteClasses(classes)
                  }
                }>
                  Delete
              </Button>{" "}
              
                
            </span>
            <ClassesCard
              name={classes.name}
              instructor_name={classes.instructor_name}
              type={classes.type}
              intensity={classes.intensity}
              location={classes.location}
              date={classes.date}
              max_size={classes.max_size}
              duration={classes.duration}
              signedUp={classes.signedUp}
              />

          </li>
        ))}
      </ul>
      {editing && (
        <form onSubmit={saveEdit}>
          <h2>Edit Classes</h2>

          <TextField label="Name: " onChange={e =>
                setClassesToEdit({ ...classesToEdit, name: e.target.value })
              }
              value={classesToEdit.name}/>

          <TextField label="Instructor Name: " onChange={e =>
                setClassesToEdit({ ...classesToEdit, instructor_name: e.target.value })
              }
              value={classesToEdit.instructor_name}/>
          <TextField label="Type: " onChange={e =>
                setClassesToEdit({ ...classesToEdit, type: e.target.value })
              }
              value={classesToEdit.type}/>
          <TextField label="Intensity: " onChange={e =>
                setClassesToEdit({ ...classesToEdit, intensity: e.target.value })
              }
              value={classesToEdit.intensity}/>
            <TextField label="Location: " onChange={e =>
                setClassesToEdit({ ...classesToEdit, location: e.target.value })
              }
              value={classesToEdit.location}/>
            <TextField label="Date: " onChange={e =>
                setClassesToEdit({ ...classesToEdit, date: e.target.value })
              }
              value={classesToEdit.date}/>
            <TextField label="Max size: " onChange={e =>
                setClassesToEdit({ ...classesToEdit, max_size: e.target.value })
              }
              value={classesToEdit.max_size}/>
            <TextField label="Duration: " onChange={e =>
                setClassesToEdit({ ...classesToEdit, duration: e.target.value })
              }
              value={classesToEdit.duration}/>
            <TextField label="Signed Up: " onChange={e =>
                setClassesToEdit({ ...classesToEdit, signedUp: e.target.value })
              }
              value={classesToEdit.signedUp}/>
          <div className="button-row">
            <Button type="submit">save</Button>
            <Button onClick={() => setEditing(false)}>cancel</Button>
          </div>
        </form>
      )}
      <div className="spacer" />
       <form onSubmit={addClasses}>
          <h2>Add Classes</h2>
         <TextField label="Name: " onChange={e =>
                setClassesToAdd({ ...classesToAdd, name: e.target.value })
              }
              value={classesToAdd.name}/>
           <TextField label="Instructor Name: " onChange={e =>
                setClassesToAdd({ ...classesToAdd, instructor_name: e.target.value })
              }
              value={classesToAdd.instructor_name}/>
          <TextField label="Type: " onChange={e =>
                setClassesToAdd({ ...classesToAdd, type: e.target.value })
              }
              value={classesToAdd.type}/>
          <TextField label="Intensity: " onChange={e =>
                setClassesToAdd({ ...classesToAdd, intensity: e.target.value })
              }
              value={classesToAdd.intensity}/>
            <TextField label="Location: " onChange={e =>
                setClassesToAdd({ ...classesToAdd, location: e.target.value })
              }
              value={classesToAdd.location}/>
            <TextField label="Date: " onChange={e =>
                setClassesToAdd({ ...classesToAdd, date: e.target.value })
              }
              value={classesToAdd.date}/>
            <TextField label="Max Size: " onChange={e =>
                setClassesToAdd({ ...classesToAdd, max_size: e.target.value })
              }
              value={classesToAdd.max_size}/>
            <TextField label="Duration: " onChange={e =>
                setClassesToAdd({ ...classesToAdd, duration: e.target.value })
              }
              value={classesToAdd.duration}/>
            {/* <TextField label="Signed Up: " onChange={e =>
                setClassesToAdd({ ...classesToAdd, signedUp: e.target.value })
              }
              value={classesToAdd.signedUp}/> */}
          <div className="button-row">
            <Button type="submit">Save</Button>
          </div>
        </form>
    </div>
  );
};

export default ClassesList;









// import {axiosWithAuth} from '../utils/axiosWithAuth';

// export const ClassesList = () => {
//     return axiosWithAuth()
//         .get('/api/auth/users/classes')
//         .then((res) => {
//             return res;
//         })
//         .catch((err) => {
//             console.log(err);
//         });
// };
