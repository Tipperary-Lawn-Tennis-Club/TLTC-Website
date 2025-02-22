import ball from "../assets/ball-water.jpg";
import court from "../assets/red-clay-court.jpg";

const Content = () => {
	return (
		<div
			id="content"
			className="bg-gray-200 flex flex-col items-center text-base-content py-80"
		>
			<div className="container mx-auto">
				<div className="flex flex-col gap-16">
					<div className="flex flex-row items-center justify-between bg-gray-100 p-6 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl">
						<div className="flex-1 max-w-xl">
							<h2 className="text-4xl font-bold mb-5">
								Rich Tennis Heritage
							</h2>
							<p className="mb-5 text-lg text-gray-700 leading-relaxed">
								TLTC is steeped in history and is strongly affiliated to Tennis
								Ireland. It hosts many significant competitions throughout the
								year including the Senior Clay Court Championships of Munster.
							</p>
						</div>
						<img
							className="w-2/5 rounded-2xl drop-shadow-2xl transform transition-all duration-300 hover:scale-105"
							src={ball.src}
							alt="Tennis ball spinning in the air with water droplets flying off"
						/>
					</div>

					<div className="flex flex-row items-center justify-between bg-gray-100 p-6 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl">
						<img
							className="w-2/5 rounded-2xl drop-shadow-2xl transform transition-all duration-300 hover:scale-105"
							src={court.src}
							alt="Clay tennis court with white lines"
						/>
						<div className="flex-1 max-w-xl text-left">
							<h2 className="text-4xl font-bold mb-5">
								A Rare Clay Court Experience
							</h2>
							<p className="mb-5 text-lg text-gray-700 leading-relaxed">
								TLTC has 3 red clay courts and is one of only 3 such facilities
								in Ireland. There are internal club events each week, and club
								members participate in many external events throughout the year.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Content;
