import React, { useReducer } from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import  ClassesContext from './ClassesContext';
import ClassesReducer from './ClassesReducer';
import { GET_CLASSES, ADD_CLASSES, DELETE_CLASSES, UPDATE_CLASSES } from './Types';

const ClassesState = props => {
    const initialState = {
        classes: []
    };

    const [state, dispatch] = useReducer(ClassesReducer, initialState);

    const getClasses = id => {
        axiosWithAuth()
            .get(`/classes/${id}`)
            .then(res =>{
                console.log("classes:", res)
                dispatch({
                    type: GET_CLASSES,
                    payload: res.data
                })
            }
                
            )
            .catch(err => console.log(err));
    };

    const addClasses = classes => {
        axiosWithAuth()
            .post('/classes', classes)
            .then(res =>
                dispatch({
                    type: ADD_CLASSES,
                    payload: res.data
                })
            )
            .catch(err => console.log(err));
    };

    const deleteClasses = id => {
        axiosWithAuth()
            .delete(`/classes/${id}`)
            .then(dispatch({ type: DELETE_CLASSES, payload: id }))
            .catch(err => console.log(err));
    };

    const updateClasses = (id, classes) => {
        axiosWithAuth()
            .put(`/classes/${id}`, classes)
            .then(res => {
                dispatch({ type: UPDATE_CLASSES, payload: res.data });
            })
            .catch(err => console.log(err));
    };

    return (
        <ClassesContext.Provider
            value={{
                classes: state.classes,
                getClasses,
                addClasses,
                deleteClasses,
                updateClasses
            }}
        >
            {props.children}
        </ClassesContext.Provider>
    );
};

export default ClassesState;