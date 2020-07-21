import React, { useState, useEffect } from 'react';
import InspirationTitle from './inspirationTitle';
import InspirationDetailsProduct from './inspirationDetailsProduct';
import InspirationAlsoLike from './inspirationAlsoLike';
import inspiredService from '../../services/inspiredService';
import NavbarB from '../nav/navbarB'
import './inspirationDetails.css';



function InspirationDetails(props) {
    const [inspired, setInspired] = useState([])


    useEffect(() => {
        (async function () {
            const { data } = await inspiredService.getAllInspired();
            setInspired(data.results);
        })()
    }, []);


    return (
        <>
            <NavbarB  {...props} />
            <InspirationTitle inspired={inspired.filter(x => x.uuid === props.match.params.id)} />
            <InspirationDetailsProduct {...props} />
            <InspirationAlsoLike {...props} />
        </>
    );
}


export default InspirationDetails;