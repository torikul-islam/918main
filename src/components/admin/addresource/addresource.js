import React, { useEffect, useState } from 'react';
import Joi from 'joi-browser';
import resourceService from '../../../services/resourceService';
import Sidemenu from '../sidemenu/sidemenu';
import NavbarAdmin from '../adminnav/adminnav';
import Input from '../input';
import './addresource.css';



const AddResource = (props) => {
	const [data, setData] = useState({ name: '', ref_url: '', image_one_url: '', price: '', retailer: '', colors: '', piece: '', tier: '' });
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

		piece: Joi.string()
			.required()
			.label("Piece"),

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
			const { data: response } = await resourceService.createResource(data);
			setMessage('Successfully submitted resource!')
			setData({ name: '', ref_url: '', image_one_url: '', price: '', retailer: '', colors: '', piece: '', tier: '' });
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

	const { name, ref_url, image_one_url, price, retailer, colors, piece, tier } = data;

	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col-sm-3">
					<Sidemenu />
				</div>
				<div className="col-sm-9">
					<NavbarAdmin />
					<div className="form-resource">
						<h4>Add Resource</h4>
						{message && <p>{message}</p>}
						<form onSubmit={handleSubmit}>
							{errors.response && <p style={{ color: 'red' }}>{errors.response}</p>}
							<div className='col-sm-6'>
								<Input name='name' type='text' label='Name' onChange={onChange} value={name || ''} error={errors['name']} />
								<Input name='ref_url' type='text' label='Ref. URL' onChange={onChange} value={ref_url || ''} error={errors['ref_url']} />
								<Input name='image_one_url' type='text' label='Image One URL' onChange={onChange} value={image_one_url || ''} error={errors['image_one_url']} />
								<Input name='price' type='text' label='Price' onChange={onChange} value={price || ''} error={errors['price']} />
								<Input name='retailer' type='text' label='Retailer' onChange={onChange} value={retailer || ''} error={errors['retailer']} />
								<Input name='colors' type='text' label='Colors' onChange={onChange} value={colors || ''} error={errors['colors']} />
								<Input name='piece' type='text' label='Piece' onChange={onChange} value={piece || ''} error={errors['piece']} />
								<Input name='tier' type='text' label='Tier' onChange={onChange} value={tier || ''} error={errors['tier']} />
								<button type="submit" className="btn btn-primary">Sign in</button>
							</div>

						</form>
					</div>
				</div>
			</div>
		</div>
	);
};



export default AddResource;