import { education } from "../data";

const Education = () => {
	return (
		<div className="min-h-screen bg-white py-16 px-8 flex items-center">
			<div className="max-w-7xl m-auto w-full">
				{/* Header */}
				<div className="mb-16">
					<h1 className="text-5xl lg:text-6xl font-bold tracking-wider text-gray-900 uppercase">
						Education
					</h1>
				</div>

				< div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" >
					{
						education.map((edu, index) => (
							<div key={edu.degree} className="border-2 border-r border-gray-400 p-6 h-full text-justify">
								<div className="mb-4">
									<h3 className="text-lg text-gray-900 tracking-wide mb-2">
										<span className="uppercase">{edu.degree}</span> - <span className="font-semibold">{edu.institution}</span>
									</h3>
									<p className="text-gray-500 font-bold mb-2">
										{edu.startDate} - {edu.endDate}
									</p>
								</div>
								<div className="text-gray-500 leading-relaxed">
									<ul className="list-disc list-outside space-y-2">
										{edu.description && edu.description.map((detail, i) => (
											<li key={i} className="leading-tight">{detail}</li>
										))}
									</ul>
								</div>
							</div>
						))
					}
				</div>
			</div>
		</div>
	);
}


export default Education;