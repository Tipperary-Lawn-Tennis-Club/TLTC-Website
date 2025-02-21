import React from "react";
import logo_tr from "../assets/logo_tr.png";

const Navbar = () => {
	return (
		<div className="navbar p-0 min-h-1.5 bg-gray-300 backdrop-blur-3xl text-gray-700 ">
			<div className="navbar-start">
				<img src={logo_tr.src} alt="Club logo" className="w-16 h-16" />
				<a href="/" className="font-semibold px-3 text-base-content text-sm">
					Tipperary Lawn Tennis Club{" "}
				</a>
			</div>
			<div className="navbar-end">
				<div className="dropdown dropdown-end">
					<div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							{" "}
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>{" "}
						</svg>
					</div>
					<ul
						tabIndex={0}
						class="menu menu-md  dropdown-content bg-base-100  rounded-box z-1 mt-3 w-52 p-2 shadow"
					>
						<li>
							<a className="active:bg-primary active:text-primary-content">
								Club
							</a>
						</li>
						<li>
							<a className="active:bg-primary active:text-primary-content">
								News
							</a>
						</li>
						<li>
							<a className="active:bg-primary active:text-primary-content">
								Diary
							</a>
						</li>
						<li>
							<a
								href="/contact"
								className="active:bg-primary active:text-primary-content"
							>
								Contact
							</a>
						</li>
						<li>
							<a
								href="https://www.smartclubcloud.com/"
								target="_blank"
								noreferer
							>
								Members Login
							</a>
						</li>
						<li>
							<a className="active:bg-primary active:text-primary-content">
								Non-Members
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="navbar-end hidden lg:flex lg:items-center ">
				<ul className="menu menu-horizontal gap-1 px-1">
					<li>
						<a className="btn bg- btn-ghost">Club</a>
					</li>
					<li>
						<a className="btn btn-ghost">Diary</a>
					</li>
					<li>
						<a className="btn btn-ghost">News</a>
					</li>
					<li>
						<a className="btn btn-ghost">Contact</a>
					</li>
					<li>
						<a className="btn btn-ghost">Non-Members</a>
					</li>
					<li>
						<a
							className="btn bg-accent/30 hover:bg-accent/60"
							href="https://www.smartclubcloud.com/"
							target="_blank"
							noreferer
						>
							Members Login
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
