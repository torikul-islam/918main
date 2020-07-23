import React from 'react';
import './addinspiration.css';
import Sidemenu from '../sidemenu/sidemenu';
import NavbarAdmin from '../adminnav/adminnav';

const AddInspiration = props => {
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
                        <h4>Add inspiration</h4>
							<form action="/action_page.php">
								<div className="form-group">
									<input type="text" className="form-control" placeholder="Add inspiration" value="" id="usr" name="username" />
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


export default AddInspiration;