import React from "react";
import Navbar from "./Navbar";
import hero_image from "../assets/hero.jpg";

const ContactContent = () => {
	return (
		<div className="h-screen flex flex-col">
			<div
				className="flex-1 hero"
				style={{
					backgroundImage: `url(${hero_image.src})`,
				}}
			>
				<div className="hero-overlay"></div>
				<Navbar />

				<fieldset className="fieldset w-2xl bg-base-200 border border-base-300 p-4 rounded-box">
					<legend className="fieldset-legend text-xl">Get in Touch</legend>

					<label className="fieldset-label">Email</label>
					<input type="email" className="input" placeholder="Email" />

					<label className="fieldset-label">Name</label>
					<input type="text" className="input" placeholder="Name" />

					<label className="fieldset-label">Message</label>
					<textarea className="textarea" placeholder="Message"></textarea>

					<button className="btn bg-primary/30 hover:bg-primary/60 mt-4">
						Send
					</button>
				</fieldset>
			</div>
		</div>
	);
};

export default ContactContent;
