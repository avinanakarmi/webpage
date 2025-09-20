import { projects } from '../data';

const Projects = () => {
	return (
		<div className="min-h-screen bg-background py-16 px-8 flex items-center">
			<div className="max-w-7xl m-auto w-full">
				{/* Header */}
				<div className="mb-16">
					<h1 className="text-5xl lg:text-6xl font-bold tracking-wider text-gray-900 uppercase">
						Projects
					</h1>
				</div>

				{
					projects.map((project, index) => (
						< div key={project.title} className="border-2 border-gray-400 rounded-2xl p-8 relative mb-10" >
							< div className="absolute -top-8 left-1/2 transform -translate-x-1/2" >
								<div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
									<span className="text-2xl font-bold text-black">{index + 1}</span>
								</div>
							</div>

							<div className="pt-8" onClick={() => window.open(project.link, '_blank')}>
								<div className="text-center mb-6">
									<h3 className="text-xl font-semibold text-gray-900 inline-flex items-center gap-2">
										{project.title} - {project.date}
										<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
										</svg>
									</h3>
								</div>

								<div className="text-gray-700 leading-relaxed text-justify">
									<p>
										{project.description}
									</p>
								</div>
							</div>
						</div>
					))
				}
			</div >
		</div >
	);
};

export default Projects;