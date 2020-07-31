import React, { Component } from 'react';
import Sidemenu from './sidemenu/sidemenu';
import NavbarAdmin from './adminnav/adminnav';
import { Link } from "react-router-dom";


class AdminHome extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row maringZero">
                    <div className="col-sm-3">
                        <Sidemenu />
                    </div>
                    <div className="col-sm-9">
                        <NavbarAdmin />
                        <div className="dashhome">
                            <h3>Content Management System Quick Links</h3>
                            <div className="panel-body">
                                <div className="row">
                                    <div className="col-md-9">
                                        <div className="row">
                                            <div className="col-md-4">
                                                <div className="single-dashboard-menu-wrapper">
                                                    <Link to="/add-product"><span ><i className="fa fa-cubes"></i></span></Link>
                                                    <Link to="/add-product"><span>Add Products</span></Link>

                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="single-dashboard-menu-wrapper">
                                                    <Link to="/add-resource"><span ><i className="fa fa-file-text"></i></span></Link>
                                                    <Link to="/add-resource"><span >Add Resources</span></Link>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="single-dashboard-menu-wrapper">
                                                    <Link to="/add-inspiration"><span ><i className="fa fa-lightbulb-o"></i></span></Link>
                                                    <Link to="/add-inspiration"><span >Add Inspiration</span></Link>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AdminHome;