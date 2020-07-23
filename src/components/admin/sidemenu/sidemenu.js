import React, { Component } from 'react';
import '../../admin/adminstyle.css';
import '../fwstyle/font-awesome.min.css';
import { Link } from 'react-router-dom';

class Sidemenu extends Component {


	render() {
		return (
			<div>
				<nav id="sidebar">
					<div className="sidebar-header">
						<h3><Link to='/admin'>Admin Dashboard</Link></h3>
					</div>
					<ul className="list-unstyled components">
						<li className="active">
							<i className="fa fa-th-large"></i>
							<Link to='/admin'>Dashboard</Link>Dashboard
						</li>
						<li>
							<Link to="/add-product">Add Products</Link>
						</li>
						<li>
							<Link to="/add-resource">Add Resources</Link>
						</li>
						<li>
							<Link to="/add-inspiration">Add Inspiration</Link>
						</li>
					</ul>
				</nav>
			</div>
		);
	}
}

export default Sidemenu;