// ContactForm.jsx
import React, { useState } from "react";

export default function ContactForm() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Handle form submission logic (e.g., send to an API or service)
		console.log(formData);
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="form-control w-full max-w-lg p-4 space-y-4 bg-base-100 rounded-lg shadow-md"
		>
			<h2 className="text-2xl font-bold">Contact Us</h2>
			<label className="label">
				<span className="label-text">Name</span>
			</label>
			<input
				type="text"
				name="name"
				placeholder="Your Name"
				className="input input-bordered w-full"
				value={formData.name}
				onChange={handleChange}
				required
			/>

			<label className="label">
				<span className="label-text">Email</span>
			</label>
			<input
				type="email"
				name="email"
				placeholder="Your Email"
				className="input input-bordered w-full"
				value={formData.email}
				onChange={handleChange}
				required
			/>

			<label className="label">
				<span className="label-text">Message</span>
			</label>
			<textarea
				name="message"
				placeholder="Your Message"
				className="textarea textarea-bordered w-full max-h-64 h-32"
				value={formData.message}
				onChange={handleChange}
				required
			/>

			<button type="submit" className="btn btn-primary w-full mt-2">
				Send
			</button>
		</form>
	);
}
