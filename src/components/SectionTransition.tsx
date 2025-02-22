import type ISectionTransitionProps from "../types";

const SectionTransition = ({ bgColor, scrollId }: ISectionTransitionProps) => {
	return (
		<div className={`w-full h-10 ${bgColor} hidden md:block`}>
			<a
				onClick={(e) => {
					// scroll to content
					if (!scrollId) return;
					document
						.querySelector("#" + scrollId)
						.scrollIntoView({ behavior: "smooth" });
				}}
			>
				<div
					className={`${bgColor} text-base-200 rounded-t-full p-5 w-2 h-2 
            relative top-[-30px] left-1/2 transform -translate-x-1/2`}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="size-6 text-neutral-900 z-50 h-10 relative -top-[20px] left-1/2 transform -translate-x-1/2"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="m19.5 8.25-7.5 7.5-7.5-7.5"
						/>
					</svg>
				</div>
			</a>
		</div>
	);
};

export default SectionTransition;
