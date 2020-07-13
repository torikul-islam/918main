import React, { Component } from 'react';
import '../../admin/adminstyle.css';
import '../fwstyle/font-awesome.min.css';
		
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
					<a href="#" data-toggle="collapse" aria-expanded="false">
						<i className="fa fa-users"></i>
						Products
					</a>
					<ul className="collapse list-unstyled" id="homeSubmenu">
						<li>Add Product</li>
						<li>Product List List</li>
					</ul>
				</li>
				<li>
					<a href="#" data-toggle="collapse" aria-expanded="false">
						<i className="fa fa-users"></i>
						Rooms
					</a>
					<ul className="collapse list-unstyled" id="pageSubmenu1">
						<li>Add Rooms</li>
						<li>Rooms List</li>
					</ul>
				</li>
				<li>
					<a href="#" data-toggle="collapse" aria-expanded="false">
						<i className="fa fa-users"></i>
						Blog Posts
					</a>
					<ul className="collapse list-unstyled" id="pageSubmenu2">
						<li>Add Posts</li>
						<li>Posts List</li>
					</ul>
				</li>
				
				
				
				
				<li>
					<a href="#">
						<i className="fa fa-align-justify"></i>
						Orders
					</a>
					<ul className="collapse list-unstyled" id="pageSubmenu3">
						<li>Order List</li>
					</ul>
				</li>
				<li>
					<a href="#">
						<i className="fa fa-calculator"></i>
						User
					</a>
					<ul className="collapse list-unstyled" id="pageSubmenu8">
						<li>Add User</li>
						<li>Result List</li>
					</ul>
				</li>
				<li>
					<a href="#">
						<i className="fa fa-cogs"></i>
						Account Setting
					</a>
				</li>
				<li>
					<a href="#">
						<i className="fa fa-align-left"></i>
						FAQ
					</a>
				</li>
				<li>
					<a href="#">
						<i className="fa fa-phone"></i>
						Contact
					</a>
				</li>
			</ul>
		</nav>
            </div>
        );
    }
}

export default Sidemenu;