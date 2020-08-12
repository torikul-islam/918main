
import React from 'react';
import './titleWithBer.css';





const TitleWithBer = ({ text,pagename }) => {
    return (
        <div className="titleBer">
            <div className={pagename=="account"?'ins-title-account':'ins-title'}><span className="trending">{text}</span> 
            <span className={pagename=="account"?'ber-slide-account':"ber-slide"}></span>
            </div>
        </div>
    );
}

export default TitleWithBer;
