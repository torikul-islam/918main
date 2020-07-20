import React, { Component } from 'react';
import Sidemenu from './sidemenu/sidemenu';
import Addproduct from './addproduct/addproduct';


class Adminhome extends Component {
    render() {
        return (
            <div>
                <Sidemenu/>
                {/* <Addproduct/> */}
                <Adminhome/>
            </div>
        );
    }
}

export default Adminhome;