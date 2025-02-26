import Navbar from "./Navbar";
import "../styles/global.css";
import hero_image from "../assets/hero.jpg";

const Header = () => {
	return (
		<div className="h-screen flex flex-col">
			<div
				className="flex-1 hero"
				style={{
					backgroundImage: `url(${hero_image.src})`,
				}}
			>
				<Navbar />
				<div className="hero-overlay"></div>
				<div className="hero-content text-neutral-content flex-col">
					<div className="max-w-2xl text-center">
						<h1 className="mb-5 text-6xl font-bold">Welcome to TLTC</h1>
						<p className="mb-5 text-lg">
							The TLTC is a unique tennis club offering a friendly and cosy
							atmosphere together with fully heated, modern and ecological
							facilities which are well maintained.
						</p>
						<a href="/contact" className="btn-cta">
							Become a member
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
