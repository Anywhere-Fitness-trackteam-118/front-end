import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

const ClassesCard = ({ name, instructor_name, type, intensity, location, date, max_size, duration, signedUp}) => {
    return (
            <Card classname="classes-card">
                <Typography component="li">name: {name}</Typography>
                <Typography component="li">instructor name: {instructor_name}</Typography>
                <Typography component="li">type: {type}</Typography>
                <Typography component="li">intensity: {intensity}</Typography>
                <Typography component="li">location: {location}</Typography>
                <Typography component="li">date: {date}</Typography>
                <Typography component="li">max size: {max_size}</Typography>
                <Typography component="li">duration: {duration}</Typography>
                <Typography component="li">signedUp: {signedUp}</Typography>
            </Card>
    )
};

export default ClassesCard;

