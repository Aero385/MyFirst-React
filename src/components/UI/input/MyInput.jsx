import React from 'react';
import classes from './MyINput.module.css';

const MyInput = (props) => {
    return (
        <input {...props} className={classes.myInput} {...props}/>
        
    );
}

export default MyInput;