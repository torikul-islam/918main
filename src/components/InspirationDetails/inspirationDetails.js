import React from 'react';
import InspirationTitle from './inspirationTitle';
import InspirationDetailsProduct from './inspirationDetailsProduct';
import InspirationAlsoLike from './inspirationAlsoLike';
// import inspiredService from '../../services/inspiredService';
import NavbarB from '../nav/navbarB'
import './inspirationDetails.css';



function InspirationDetails(props) {
    // const [inspired, setInspired] = useState([])


    // useEffect(() => {
    //     (async function () {
    //         const { data } = await inspiredService.getAllInspired();
    //         setInspired(data.results);
    //     })()
    // }, []);

    return (
        <>
            <NavbarB  {...props} />
            <InspirationTitle />
            <InspirationDetailsProduct />
            <InspirationAlsoLike />
        </>
    );
}


export default InspirationDetails;