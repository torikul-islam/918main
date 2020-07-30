import React, { useEffect, useState } from 'react';
import Joi from 'joi-browser';
import inspirationService from '../../../services/inspiredService';
import Sidemenu from '../sidemenu/sidemenu';
import NavbarAdmin from '../adminnav/adminnav';
import Input from '../input';
import './addinspiration.css';



const AddInspiration = (props) => {
	const [data, setData] = useState({ ref_img: '', ref_url: '', rooms: '', styles: '', designed_by: '', colors: '', pieces: '', direction: '' });
	const [errors, setErrors] = useState({});
	const [message, setMessage] = useState(null);


	const schema = {
		ref_img: Joi.string()
			.required()
			.label("Ref. image"),

		ref_url: Joi.string()
			.required()
			.label("Ref. URL"),

		rooms: Joi.string()
			.required()
			.label("Rooms"),

		styles: Joi.string()
			.required()
			.label("Styles"),

		designed_by: Joi.string()
			.required()
			.label("Designed by"),

		colors: Joi.string()
			.required()
			.label("Colors"),

		pieces: Joi.string()
			.required()
			.label("Pieces"),

		direction: Joi.string()
			.required()
			.label("Direction")
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
			const { data: response } = await inspirationService.createInspiration(data);
			setMessage('Successfully submitted inspiration!')
			setData({ ref_img: '', ref_url: '', rooms: '', styles: '', designed_by: '', colors: '', pieces: '', direction: '' });
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

	const { ref_img, ref_url, rooms, styles, designed_by, colors, pieces, direction } = data;

	return (
		<div>
			<div className="container-fluid">
				<div className="row">
					<div className="col-sm-3">
						<Sidemenu />
					</div>
					<div className="col-sm-9">
						<NavbarAdmin />
						<div className="form-resource">
							<h4>Add Inspiration</h4>
							{message && <p>{message}</p>}
							<form onSubmit={handleSubmit}>
								{errors.response && <p style={{ color: 'red' }}>{errors.response}</p>}
								<div className="row">
									<div className='col-sm-12'>
										<Input name='ref_img' type='text' label='Ref. image' onChange={onChange} value={ref_img || ''} error={errors['ref_img']} />
										<Input name='ref_url' type='text' label='Ref. URL' onChange={onChange} value={ref_url || ''} error={errors['ref_url']} />
										<Input name='rooms' type='text' label='Rooms' onChange={onChange} value={rooms || ''} error={errors['rooms']} />
										<Input name='styles' type='text' label='Styles' onChange={onChange} value={styles || ''} error={errors['styles']} />
										<Input name='designed_by' type='text' label='Designed by' onChange={onChange} value={designed_by || ''} error={errors['designed_by']} />
										<Input name='colors' type='text' label='Colors' onChange={onChange} value={colors || ''} error={errors['colors']} />
										<Input name='pieces' type='text' label='Pieces' onChange={onChange} value={pieces || ''} error={errors['pieces']} />
										<Input name='direction' type='text' label='Direction' onChange={onChange} value={direction || ''} error={errors['direction']} />
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
	);
};


export default AddInspiration;