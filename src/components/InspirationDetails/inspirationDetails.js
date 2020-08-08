import React, { useState, useEffect } from 'react';
import InspirationTitle from './inspirationTitle';
import InspirationDetailsProduct from './inspirationDetailsProduct';
import InspirationAlsoLike from './inspirationAlsoLike';
import inspiredService from '../../services/inspiredService';
import NavbarB from '../nav/navbarB'
import Modal from '../common/modal/modal';
import Signup from '../auth/signup';
import Login from '../auth/login';
import './inspirationDetails.css';



function InspirationDetails(props) {
    const [modal, setModal] = useState({ isOpen: false, name: null });
    const [inspired, setInspired] = useState([])
    const [inspirationLike, setInspirationLike] = useState([]);


    useEffect(() => window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    }), []);

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
    }, [modal]);


    async function clickInspirationLike(item) {
        let form = new FormData();
        form.set('inspiration', props.match.params.id);
        const token = localStorage.getItem('token');
        if (token) {
            const { data } = await inspiredService.createInspirationLike(form);
            if (data) {
                setInspirationLike([...inspirationLike, { uuid: null, inspiration: item }]);
            }
        }
    }

    function openModal(name) {
        setModal({ isOpen: true, name: name })
    };

    function closeModal() {
        setModal({ isOpen: false, name: null })
    };
    function onChangeSearch(item) {

    }

    const { isOpen, name } = modal;

    return (
        <>
            <NavbarB  {...props}
                onChangeSearch={onChangeSearch}
                searchData={[]}
            />

            <InspirationTitle
                {...props}
                inspirationLike={inspirationLike}
                clickInspirationLike={clickInspirationLike}
                inspired={inspired}
                openModal={openModal}
            />

            <InspirationDetailsProduct {...props} />
            <InspirationAlsoLike {...props} />

            {name === 'signup' && <Modal isOpen={isOpen} childComp={<Signup openModal={openModal} closeModal={closeModal} />} />}
            {name === 'login' && <Modal isOpen={isOpen} childComp={<Login openModal={openModal} closeModal={closeModal} />} />}

        </>
    );
}


export default InspirationDetails;