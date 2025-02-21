import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import hero_image from "../assets/court-bg.jpg";
import ContactForm from "./ContactForm";

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
				<ContactForm />
			</div>
			<Footer />
		</div>
	);
};

export default ContactContent;
