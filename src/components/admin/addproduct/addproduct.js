import React, { Component } from 'react';
import '../adminstyle.css';
import '../fwstyle/font-awesome.min.css';

class Addproduct extends Component {
    render() {
        return (
            <div>
                <div>
                <div className="row">
								
								<div className="col-md-6">
									<div className="form-tools-cover">
										<div className="input-group">
											<input type="text" className="first_name" class="" aria-describedby="basic-addon1" required/>
											<label>Product Name</label>
										</div>
									</div>
								</div>
								
								<div className="col-md-6">
									<div className="form-tools-cover">
										<div className="input-group">
											<input type="text" name="first_name" className="" aria-describedby="basic-addon1" required/>
											<label>Model</label>
										</div>
									</div>
								</div>
								<div className="col-md-6">
									<div className="form-tools-cover">
										<div className="input-group">
											<input type="text" name="first_name" className="" aria-describedby="basic-addon1" required/>
											<label>SKU</label>
										</div>
									</div>
								</div>
								
								<div className="col-md-6">
									<div className="form-tools-cover">
										<div className="input-group">
											<input type="text" name="first_name" className="" aria-describedby="basic-addon1" required/>
											<label>Quantity</label>
										</div>
									</div>
								</div>

								<div className="col-md-6">
									<div className="form-tools-cover">
										<div className="input-group">
											<input type="text" name="first_name" className="" aria-describedby="basic-addon1" required/>
											<label>Price</label>
										</div>
									</div>
								</div>
								
								
								
								
								
								<div className="col-md-6">
									<div className="form-tools-cover">
										<div className="input-group">
											<select id="basic" className="selectpicker show-tick form-control" data-live-search="true">
											  <option selected>Select Catagory</option>
											  <option>Catagory 1</option>
											  <option>Catagory 2</option>
											  <option>Catagory 3</option>
											  <option>Catagory 4</option>
											  <option>Catagory 5</option>
											</select>
										</div>
									</div>
								</div>
								
								<div className="col-md-6">
									<div className="form-tools-cover">
										<div className="input-group">
											<input type="text" name="first_name" className="" aria-describedby="basic-addon1" required/>
											<label>Product Detailes</label>
										</div>
									</div>
								</div>
								
								
								
								
								
								
								
								
								
								<div className="col-md-12">
									<div className="file-upload-wrapper">
										<div className="row">
											<div className="col-md-12">
												<div className="left-section">
													<div className="icon-headline-wrapper">
														<h1><i className="fa fa-cloud-upload"></i></h1>
														<p>Drag and Drop Files Here Or</p>
													</div>
													<div className="image-storage-wrapper">
														<img src="images/student.jpg"/>
													</div>
													<div className="input-file-cover">
														<input type="file" className="upload-file"/>
														<input type="button" className="btn btn-info upload-btn" value="Browse Files"/>
													</div>
												</div>
											</div>
											<div className="col-md-6">
												<div className="right-section">
												
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							
							<div className="button-cover">
								<input type="submit" className="btn btn-save" value="submit"/>
							</div>
                </div>
            </div>
        );
    }
}

export default Addproduct;