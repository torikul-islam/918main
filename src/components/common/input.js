import React from 'react';
import './input.css';


const Input = ({ name, id, ...rest }) => {
    return (
        <div className="form-group">
            <input {...rest} name={name} id={name} className="form-control" autoComplete="off" />
        </div>
    );
}

export default Input;