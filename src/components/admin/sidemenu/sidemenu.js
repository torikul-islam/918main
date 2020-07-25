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
						<li className="activeadmin">
								<Link to='/admin'><i className="fa fa-th-large"></i> Dashboard</Link>
						</li>
						<li>
							<Link to="/add-product"><i className="fa fa-cubes"></i> Add Products</Link>
						</li>
						<li>
							<Link to="/add-resource"><i className="fa fa-file-text"></i> Add Resources</Link>
						</li>
						<li>
							<Link to="/add-inspiration"><i className="fa fa-lightbulb-o"></i> Add Inspiration</Link>
						</li>
						{/* <li>
							<Link to="/edit-pages"><i className="fa fa-pencil-square-o"></i> Edit Pages</Link>
						</li> */}
					
					</ul>
				</nav>
			</div>
		);
	}
}

export default Sidemenu;