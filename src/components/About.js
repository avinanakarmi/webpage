import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-8">
      <div className="max-w-6xl w-full bg-white overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          {/* Text Content */}
          <div className="lg:w-1/2 p-12 flex flex-col justify-center text-justify">
            <div className="space-y-6">
              <div>
                <p className="text-2xl font-semibold text-gray-600 mb-2">Hi! I am</p>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Subhodeep Ghosh.
                </h1>
              </div>
              
              <div className="text-gray-700 text-base leading-relaxed space-y-4">
                <p>
                  I am Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis 
                  posuere dignissim metus in ultricies. Vivamus vestibulum, arcu eget 
                  euismod volutpat, enim nisl ultricies quam, eget pellentesque nisl neque a 
                  justo.
                </p>
                <p>
                  Morbi aliquam nisl rhoncus orci congue, eu facilibus ipsum imperdiet.
                </p>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="lg:w-1/2 relative">
            <div className="h-64 lg:h-full bg-gray-300 flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop&crop=face"
                alt="Subhodeep Ghosh"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;