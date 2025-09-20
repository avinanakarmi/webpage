import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add your form submission logic here
  };

	return (
		<div className="min-h-screen bg-background py-16 px-8 flex items-center">
			<div className="max-w-7xl m-auto w-full">
				{/* Header */}
				<div className="mb-16">
					<h1 className="text-5xl lg:text-6xl font-bold tracking-wider text-gray-900 uppercase">
						CONTACT ME
					</h1>
				</div>

				{/* Main Content */}
				<div className="flex flex-col lg:flex-row gap-16 items-center justify-center">
					<div className="lg:w-1/2 space-y-12 flex flex-col items-center justify-center text-center">
						{/* Social Media Icons */}
						<div className="flex space-x-6">
							{/* Google Scholar Icon - Blue Circle */}
							<div className="w-16 h-16 bg-red-700 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-800 transition-colors">
								<svg className="w-8 h-8 text-white" viewBox="0 0 48 48" fill="currentColor">
									<g>
										<path d="M24 6C15.163 6 8 13.163 8 22c0 8.837 7.163 16 16 16s16-7.163 16-16c0-8.837-7.163-16-16-16zm0 29c-7.18 0-13-5.82-13-13s5.82-13 13-13 13 5.82 13 13-5.82 13-13 13z"/>
										<path d="M24 13c-4.971 0-9 4.029-9 9h3c0-3.314 2.686-6 6-6s6 2.686 6 6-2.686 6-6 6v3c4.971 0 9-4.029 9-9s-4.029-9-9-9z"/>
									</g>
								</svg>
							</div>
							<div className="w-16 h-16 bg-black rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-800 transition-colors">
								<svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
									<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
								</svg>
							</div>

							{/* LinkedIn Icon - Gray Circle */}
							<div className="w-16 h-16 bg-gray-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-600 transition-colors">
								<svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
									<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
								</svg>
							</div>
						</div>

						{/* Contact Information */}
						<div className="space-y-4">
							<div className="text-lg text-gray-700">
								<p className="font-mono tracking-wider">bum.ghosh@gmail.com</p>
							</div>
							<div className="text-lg text-gray-700">
								<p className="font-mono tracking-wider">+1-(201)-456-4467</p>
							</div>
						</div>
					</div>

					{/* Right Side - Contact Form */}
					<div className="lg:w-1/2">
						<form onSubmit={handleSubmit} className="space-y-6">
							{/* Name Input */}
							<div>
								<input
									type="text"
									name="name"
									value={formData.name}
									onChange={handleChange}
									placeholder="Your Name"
									className="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-lg 
														 focus:outline-none focus:border-gray-500 transition-colors
														 placeholder-gray-500 bg-white"
									required
								/>
							</div>

							{/* Message Textarea */}
							<div>
								<textarea
									name="message"
									value={formData.message}
									onChange={handleChange}
									placeholder="Your Message"
									rows="8"
									className="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-lg 
														 focus:outline-none focus:border-gray-500 transition-colors
														 placeholder-gray-500 bg-white resize-none"
									required
								/>
							</div>

							{/* Submit Button */}
							<div className="flex justify-end">
								<button
									type="submit"
									className="px-8 py-4 bg-black text-white text-lg font-medium rounded-lg
														 hover:bg-gray-800 transition-colors focus:outline-none 
														 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
								>
									Send your message
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;