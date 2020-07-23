
import React, { Component } from 'react';
import './addproduct.css';
import NavbarAdmin from '../adminnav/adminnav';
import Sidemenu from '../sidemenu/sidemenu';


const Addproduct = props => {
	return (
		<div>
			<div className="container-fluid">
				<div className="row">
					<div className="col-sm-2">
						<Sidemenu />
					</div>
					<div className="col-sm-10">
					<NavbarAdmin />
						<div className="form-product">
							<h4>Add Products</h4>
							<form action="/action_page.php">
								<div className="form-group">
									<input type="text" className="form-control" placeholder="Add product" value="" id="usr" name="username" />
								</div>
								<button type="submit" className="btn btn-primary">Submit</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};


export default Addproduct;