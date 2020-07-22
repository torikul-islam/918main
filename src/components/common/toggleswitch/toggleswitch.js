import React from 'react';
import './toggleswitch.css';

const Toggleswitch = props => {
    return (
        <>
          <input
            className="react-switch-checkbox"
            id={`react-switch-new`}
            type="checkbox"
          />
          <label
            className="react-switch-label"
            htmlFor={`react-switch-new`}
          >
            <span className={`react-switch-button`} />
          </label>
        </>
      );
};


export default Toggleswitch;