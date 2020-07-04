import React from 'react';
import './checkbox.css';




const Checkbox = ({ name, id, label, ...rest }) => {
    return (
        <>
            <div className="form-check cus-checkbox">
                <input {...rest} type='checkbox' className="form-check-input" id={id} />
                <label className="form-check-label cus-checkbox-label" htmlFor={id}>{label}</label>
            </div>
        </>
    );
}

export default Checkbox;