import React, { useState, useEffect } from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import ClassesContext from './ClassesContext';

 const ClassesProvider = props => {
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        const getClasses = () => {
            axiosWithAuth()
                .get('/classes')
                .then(res => {
                    console.log('classes: ', res);
                    setClasses(res.data);
                })
                .catch(error => {
                    console.error('Server Error', error);
                });
        }
        getClasses();
    }, []);

    return (
        <ClassesContext.Provider value={[classes, setClasses]}>
            {props.children}
        </ClassesContext.Provider>
    );

}

export default ClassesProvider;