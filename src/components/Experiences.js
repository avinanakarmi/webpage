import { experiences } from "../data";

const Experiences = () => {
	return (
		<div className="min-h-screen bg-background py-16 px-8 flex items-center">
			<div className="max-w-7xl m-auto w-full">
				{/* Header */}
				<div className="mb-16">
					<h1 className="text-5xl lg:text-6xl font-bold tracking-wider text-gray-900 uppercase">
						Experiences
					</h1>
				</div>

				{/* Timeline */}
				<div className="relative">
					{/* Vertical Line */}
					<div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-300"></div>

					{experiences.map((exp, index) => (
						<div key={exp.title} className="relative flex items-start mb-12">
							<div className="absolute left-4 w-4 h-4 bg-accent rounded-full border-4 border-white shadow-lg z-10"></div>
							<div className="ml-16 bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex-1 text-justify">
								<div className="mb-3">
									<p className="text-gray-500 font-semibold text-sm mb-1">{exp.startDate} - {exp.endDate}</p>
									<h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
								</div>
								<p className="text-gray-700 leading-relaxed">
									{exp.description}
								</p>
							</div>
						</div>
					))}

				</div>

			</div>
		</div>
	);
}


export default Experiences;