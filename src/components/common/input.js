import React from 'react';
import './input.css';


const Input = ({ name, id, error, ...rest }) => {
    return (
        <div className="form-group">
            <input {...rest} name={name} id={name} className="form-control" autoComplete="off" />
            {error && <div className="invalid-feedback">
                {error}
            </div>}

        </div>
    );
}

export default Input;