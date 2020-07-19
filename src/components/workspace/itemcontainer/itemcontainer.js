import React from 'react';
import './itemcontainer.css';
import InspireFilter from '../inspirationfilter/inspirationfilter';
import Shopfilter from '../shopfilter/shopfilter';

const Itemcontainer = props => {
    return (
        <div>
           itemcontainer 
           <InspireFilter/>
           <Shopfilter/>
        </div>
    );
};


export default Itemcontainer;