import React from 'react';
import './addresource.css';
import Sidemenu from '../sidemenu/sidemenu';
import NavbarAdmin from '../adminnav/adminnav';

const AddResource = props => {
    return (
        <div className="container-fluid">
				<div className="row">
					<div className="col-sm-2">
						<Sidemenu />
					</div>
					<div className="col-sm-10">
					<NavbarAdmin />
						<div className="form-product">
                        <h4>Add resource</h4>
							<form action="/action_page.php">
								<div className="form-group">
									<input type="text" className="form-control" placeholder="Add resource" value="" id="usr" name="username" />
								</div>
								<button type="submit" className="btn btn-primary">Submit</button>
							</form>
						</div>
					</div>
				</div>
			</div>
    );
};



export default AddResource;