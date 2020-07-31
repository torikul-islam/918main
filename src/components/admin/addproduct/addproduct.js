
import React, { useState } from 'react';
import Joi from "joi-browser";
import NavbarAdmin from '../adminnav/adminnav';
import Sidemenu from '../sidemenu/sidemenu';
import Input from '../input';
import './addproduct.css';
import productService from '../../../services/productService';


const Addproduct = (props) => {
	const [data, setData] = useState({ name: '', ref_url: '', image_one_url: '', price: '', retailer: '', colors: '', tier: '' });
	const [errors, setErrors] = useState({});
	const [message, setMessage] = useState(null);



	const schema = {
		name: Joi.string()
			.required()
			.label("Name"),

		ref_url: Joi.string()
			.required()
			.label("Ref. URL"),

		image_one_url: Joi.string()
			.required()
			.label("Image one URL"),

		price: Joi.number()
			.required()
			.label("Price"),

		retailer: Joi.string()
			.required()
			.label("Retailer"),

		colors: Joi.string()
			.required()
			.label("Colors"),

		tier: Joi.string()
			.required()
			.label("tier")
	}

	function validate() {
		const options = { abortEarly: false };
		const result = Joi.validate(data, schema, options);
		if (!result.error) return null;
		const errors = {};
		for (let item of result.error.details) errors[item.path[0]] = item.message;
		return errors;
	};

	async function handleSubmit(e) {
		e.preventDefault();
		const errors = validate();
		setErrors(errors || {});
		if (errors) return;

		try {
			const { data: response } = await productService.createProduct(data);
			if (response) {
				setMessage('Successfully submitted product!')
				setData({ name: '', ref_url: '', image_one_url: '', price: '', retailer: '', colors: '', tier: '' });
			}
		} catch (ex) {
			if (ex.response && ex.response.status === 403) {
				const errors = {};
				errors['response'] = ex.response.data.detail;
				setErrors(errors);
			}
		}
	};

	function onChange(e) {
		delete errors[e.target.id];
		let d = { ...data };
		d[e.target.id] = e.target.value;
		setData(d);
	}

	const { name, ref_url, image_one_url, price, retailer, colors, tier } = data;

	return (
		<div>
			<div className="container-fluid">
				<div className="row">
					<div className="col-sm-3">
						<Sidemenu />
					</div>
					<div className="col-sm-9">
						<NavbarAdmin />
						<div className="form-product">
							<h4>Add Products</h4>
							<div>
								{message && <h6 style={{ color: 'green' }}>{message}</h6>}
								{errors.response && <h6 style={{ color: 'red' }}>{errors.response}</h6>}
							</div>
							<div className="forminput">
								<form onSubmit={handleSubmit}>
									<div className="row">
										<div className='col-sm-10'>
											<Input name='name' type='text' label='Name' onChange={onChange} value={name || ''} error={errors['name']} />
											<Input name='ref_url' type='text' label='Ref. URL' onChange={onChange} value={ref_url || ''} error={errors['ref_url']} />
											<Input name='image_one_url' type='text' label='Image One URL' onChange={onChange} value={image_one_url || ''} error={errors['image_one_url']} />
											<Input name='price' type='text' label='Price' onChange={onChange} value={price || ''} error={errors['price']} />
											<Input name='retailer' type='text' label='Retailer' onChange={onChange} value={retailer || ''} error={errors['retailer']} />
											<Input name='colors' type='text' label='Colors' onChange={onChange} value={colors || ''} error={errors['colors']} />
											<Input name='tier' type='text' label='Tier' onChange={onChange} value={tier || ''} error={errors['tier']} />
										</div>
										<div className="col-sm-12">
											<button type="submit" className="btn btn-primary">Submit</button>
										</div>
									</div>
								</form>
							</div>

						</div>
					</div>
				</div>
			</div>
		</div>
	);
};


export default Addproduct;