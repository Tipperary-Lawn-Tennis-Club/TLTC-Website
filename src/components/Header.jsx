import hero_image from "../assets/hero.jpg";
import hero_svg from "../assets/Grand slam-bro.svg";
import Navbar from "./Navbar";

const Header = () => {
	return (
		<div className="h-screen flex flex-col">
			<Navbar />
			<div
				className="flex-1 hero"
				style={{
					backgroundImage: `url(${hero_image.src})`,
				}}
			>
				<div className="hero-overlay"></div>
				<div className="hero-content text-neutral-content gap-44">
					<div className="max-w-md">
						<h1 className="mb-5 text-5xl font-bold">Captivating Header</h1>
						<p className="mb-5">
							Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
							excepturi exercitationem quasi. In deleniti eaque aut repudiandae
							et a id nisi.
						</p>
						<button className="btn btn-primary text-base-content">
							Contact Us
						</button>
					</div>
					<div className="hero-social-links">
						<img
							src={hero_svg.src}
							alt="Cartoon of person playing tennis"
							loading="lazy"
							width="512"
						/>
					</div>
				</div>
			</div>

			{/* Section divider with an arrow or wave shape */}
			<div className="relative w-full h-10 bg-neutral-200">
				<div className="bg-neutral-200 rounded-full w-2 h-2 p-5 absolute top-[-16px] left-1/2 transform -translate-x-1/2">
					<svg
						alt="down arrow"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="size-6 text-base-100"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
						/>
					</svg>
				</div>
			</div>
		</div>
	);
};

export default Header;
