import { publications } from "../data";

const Publications = () => {
	return (
		<div className="min-h-screen bg-white py-16 px-8 flex items-center">
			<div className="max-w-7xl m-auto w-full">
				<div className="mb-16">
					<h1 className="text-5xl lg:text-6xl font-bold tracking-wider text-gray-900 uppercase">
						Publications
					</h1>
				</div>

				{
					publications.map((pub, index) => (
						<div className="border-2 border-gray-400 rounded-2xl p-8 text-justify mb-4" key={index}>
							< div className="mb-4" >
								<h3 className="text-2xl font-light text-gray-900 uppercase tracking-wide">
									{pub.title}
								</h3>
								<p className="text-lg text-gray-700">
									<span className="font-semibold">{pub.venue} - {pub.date}</span>
								</p>
							</div>

							<p className="text-gray-700 leading-relaxed text-justify">
								{pub.description}
							</p>

							<div>
								<a
									href={pub.link}
									target="_blank"
									rel="noopener noreferrer"
									className="text-secondary hover:text-accent transition-colors cursor-pointer underline"
								>
									Read Paper
								</a>
							</div>
						</div>
					))
				}
			</div >
		</div >
	);
};

export default Publications;