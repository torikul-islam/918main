import React, { useState, useEffect } from 'react';
import InspirationTitle from './inspirationTitle';
import InspirationDetailsProduct from './inspirationDetailsProduct';
import InspirationAlsoLike from './inspirationAlsoLike';
import inspiredService from '../../services/inspiredService';
import NavbarB from '../nav/navbarB'
import './inspirationDetails.css';



function InspirationDetails(props) {
    const [inspired, setInspired] = useState([])
    const [inspirationLike, setInspirationLike] = useState([]);


    useEffect(() => {
        (async function () {
            const { data } = await inspiredService.getInspirationByRoomId(props.match.params.roomId);
            if (data) {
                const filter = data.results.filter(x => x.uuid === props.match.params.id);
                setInspired(filter);
            }
        })()
    }, [props.match.params.id]);


    useEffect(() => {
        (async function () {
            const token = localStorage.getItem('token');
            if (token) {
                const { data } = await inspiredService.getUserInspirationLike();
                setInspirationLike(data)
            }
        })()
    }, []);


    async function clickInspirationLike(item) {
        let form = new FormData();
        form.set('inspiration', props.match.params.id);
        const token = localStorage.getItem('token');
        if (token) {
            const { data } = await inspiredService.createInspirationLike(form);
            setInspirationLike([...inspirationLike, { uuid: null, inspiration: item }]);
        }

    }

    return (
        <>
            <NavbarB  {...props} />

            <InspirationTitle
                inspirationLike={inspirationLike}
                clickInspirationLike={clickInspirationLike}
                inspired={inspired}
            />

            <InspirationDetailsProduct {...props} />
            <InspirationAlsoLike {...props} />
        </>
    );
}


export default InspirationDetails;