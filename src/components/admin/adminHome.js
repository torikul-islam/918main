import React, { Component } from 'react';
import Sidemenu from './sidemenu/sidemenu';
import NavbarAdmin from './adminnav/adminnav';


class Adminhome extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-2">
                        <Sidemenu />
                    </div>
                    <div className="col-sm-10">
                        <NavbarAdmin />
                    </div>
                </div>
            </div>
        );
    }
}

export default Adminhome;