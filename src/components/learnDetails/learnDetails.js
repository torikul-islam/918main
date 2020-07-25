import React, { useState, useEffect } from 'react';
import NavbarB from '../nav/navbarB';
import LearnDetailsTitle from './learnDetailsTitle';
import resourceService from '../../services/resourceService';
import InspirationDetailsProduct from '../InspirationDetails/inspirationDetailsProduct';
import InspirationDetails from '../InspirationDetails/inspirationDetails';
import InspirationAlsoLike from '../InspirationDetails/inspirationAlsoLike';





function LearnDetails(props) {
    const [resource, setResource] = useState({});
    const [resourceLike, setResourceLike] = useState([]);


    useEffect(() => {
        (async function () {
            const { data } = await resourceService.getResourcesByRoomStyle(`?room_ids=${props.match.params.roomId}`);
            if (data) {
                const filter = data.results.filter(x => x.uuid === props.match.params.id);
                setResource(filter[0]);
            }
        })()
    }, [props.match.params.id]);


    useEffect(() => {
        (async function () {
            const token = localStorage.getItem('token');
            if (token) {
                const { data } = await resourceService.getUserResourceLike();
                if (data) {
                    setResourceLike(data);
                }
            }
        })()
    }, []);

    async function clickResourceLike(item) {
        let form = new FormData();
        form.set('resource', props.match.params.id);
        const token = localStorage.getItem('token');
        if (token) {
            const { data } = await resourceService.createResourceLike(form);
            setResourceLike([...resourceLike, { uuid: null, resource: item }]);
        }
    }

    return (
        <div>
            <NavbarB {...props} />
            <LearnDetailsTitle resource={resource} resourceLike={resourceLike} clickResourceLike={clickResourceLike} />

            <InspirationDetailsProduct />

            <InspirationAlsoLike />
        </div>
    );
}

export default LearnDetails;