
import React from 'react';
import './titleWithBer.css';





const TitleWithBer = ({ text }) => {
    return (
        <div className="titleBer">
            <div className='ins-title'><span className="trending">{text}</span> <span className="ber-slide"></span></div>
        </div>
    );
}

export default TitleWithBer;
