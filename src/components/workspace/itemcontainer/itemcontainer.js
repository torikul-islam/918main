import React, { useEffect, useState } from 'react';
import './itemcontainer.css';
import InspireFilter from '../inspirationfilter/inspirationfilter';
import Shopfilter from '../shopfilter/shopfilter';

const Itemcontainer = props => {
    const [inspirefilter, setInspireFilter] = useState(false);
    const [shopFilter, setShopFilter] = useState(false);
    const openInsoireFilter = () => setInspireFilter(true);
    const openShopFilter = () => setShopFilter(true);

    return (
        <div className="row">
            <div className="col">
                <div>
                    Be Inspire
                 </div>
                <div>
                    <button onClick={console.log("filter 1 Open")}> Filter Inspire</button>
                    <InspireFilter />


                </div>

            </div>
            <div className="col">
                <div>
                    Shop
                </div>
                <div>
                    <button onClick={console.log("filter 2 Open")}> Filter Shop</button>
                    <Shopfilter />
                </div>

            </div>


        </div>
    );
};


export default Itemcontainer;