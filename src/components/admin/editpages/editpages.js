import React from 'react';
import Sidemenu from '../sidemenu/sidemenu';
import NavbarAdmin from '../adminnav/adminnav';
import './editpage.css'

const Editpages = () => {
    return (
        <div className="container-fluid">
				<div className="row">
					<div className="col-sm-2">
						<Sidemenu />
					</div>
					<div className="col-sm-10">
					<NavbarAdmin />
						<div className="col">
                        <div className="form-product">
                        <h4>Edit Home Page</h4>
							<form action="/action_page.php">
								<div className="form-group">
									<input type="text" className="form-control" placeholder="Banner Title" value="" id="usr" name="username" />
                                    <input type="text" className="form-control" placeholder="Banner Text" value="" id="usr" name="username" />

								</div>
								<button type="submit" className="btn btn-primary">Submit</button>
							</form>
						</div>
                        <div className="form-product">
                        <h4>Edit Learn Page</h4>
							<form action="/action_page.php">
								<div className="form-group">
									<input type="text" className="form-control" placeholder="Banner Title" value="" id="usr" name="username" />
                                    <input type="text" className="form-control" placeholder="Banner Text" value="" id="usr" name="username" />
								</div>
								<button type="submit" className="btn btn-primary">Submit</button>
							</form>
						</div>
                        <div className="form-product">
                        <h4>Edit Inspire Page</h4>
							<form action="/action_page.php">
								<div className="form-group">
									<input type="text" className="form-control" placeholder="Banner Title" value="" id="usr" name="username" />
                                    <input type="text" className="form-control" placeholder="Banner Text" value="" id="usr" name="username" />
								</div>
								<button type="submit" className="btn btn-primary">Submit</button>
							</form>
						</div>
                        <div className="form-product">
                        <h4>Edit Shop Page</h4>
							<form action="/action_page.php">
								<div className="form-group">
									<input type="text" className="form-control" placeholder="Banner Title" value="" id="usr" name="username" />
                                    <input type="text" className="form-control" placeholder="Banner Text" value="" id="usr" name="username" />
								</div>
								<button type="submit" className="btn btn-primary">Submit</button>
							</form>
						</div>
                        <div className="form-product">
                        <h4>Edit About Page</h4>
							<form action="/action_page.php">
								<div className="form-group">
									<input type="text" className="form-control" placeholder="Mission" value="" id="usr" name="username" />
                                    <input type="text" className="form-control" placeholder="Our Story" value="" id="usr" name="username" />
                                    <input type="text" className="form-control" placeholder="Title Question" value="" id="usr" name="username" />
                                    <input type="text" className="form-control" placeholder="Tilte Text" value="" id="usr" name="username" />
                                    <input type="text" className="form-control" placeholder="Inspire Text" value="" id="usr" name="username" />
                                    <input type="text" className="form-control" placeholder="Learn Text" value="" id="usr" name="username" />
                                    <input type="text" className="form-control" placeholder="Shop Text" value="" id="usr" name="username" />
                                    <input type="text" className="form-control" placeholder="Design Text" value="" id="usr" name="username" />
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

export default Editpages;