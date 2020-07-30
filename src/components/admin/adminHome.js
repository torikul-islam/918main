import React, { Component } from 'react';
import Sidemenu from './sidemenu/sidemenu';
import NavbarAdmin from './adminnav/adminnav';
import {Link} from "react-router-dom";


class Adminhome extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
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
                            <Link to="/add-product"><a ><i className="fa fa-cubes"></i></a></Link>
                            <Link to="/add-product"><a >Add Products</a></Link>
								
							</div>
						</div>
						<div className="col-md-4">
							<div className="single-dashboard-menu-wrapper">
                            <Link to="/add-resource"><a ><i className="fa fa-file-text"></i></a></Link>
                            <Link to="/add-resource"><a >Add Resources</a></Link>
							</div>
						</div>
						<div className="col-md-4">
							<div className="single-dashboard-menu-wrapper">
                            <Link to="/add-inspiration"><a ><i className="fa fa-lightbulb-o"></i></a></Link>
                            <Link to="/add-inspiration"><a >Add Inspiration</a></Link>
								
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

export default Adminhome;