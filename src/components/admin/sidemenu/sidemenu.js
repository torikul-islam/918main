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
						<h3>Admin Dashboard</h3>
						<strong>AD</strong>
					</div>

					<ul className="list-unstyled components">
						<li className="active">
							<a href="dashboard.html">
								<i className="fa fa-th-large"></i>
						Dashboard
					</a>
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