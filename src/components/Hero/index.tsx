export const Hero = () => {
  return (
    <div className="relative bg-gradient-to-b from-emerald-50 to-white pt-16 pb-12 sm:pt-24 sm:pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight gradient-text sm:text-6xl lg:text-7xl">
            Excel in Your Academic Journey with Expert Support
          </h1>
          <p className="mt-8 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            Get professional academic assistance from experienced educators. We help students achieve their academic goals with personalized support, timely delivery, and guaranteed quality.
          </p>

          {/* Search Bar */}
          <div className="mt-10 max-w-xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for subjects, topics, or services..."
                className="w-full px-6 py-4 rounded-full border-2 border-emerald-200 focus:border-emerald-500 focus:outline-none shadow-sm text-gray-700 placeholder-gray-400"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-emerald-500 text-white px-6 py-2 rounded-full hover:bg-emerald-600 transition-colors duration-300">
                Search
              </button>
            </div>
          </div>

          <div className="mt-12 flex items-center justify-center gap-x-6">
            <a
              href="#services"
              className="btn btn-primary shadow-custom hover-scale"
            >
              Explore Our Services
            </a>
            <a
              href="#how-it-works"
              className="text-lg font-semibold leading-6 text-emerald-700 hover:text-emerald-500 transition-colors duration-300"
            >
              Learn More <span aria-hidden="true">→</span>
            </a>
          </div>

          {/* Trust Badges */}
          <div className="mt-16 flex justify-center space-x-6 sm:space-x-8">
            <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-custom hover-scale">
              <svg className="h-5 w-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="ml-2 text-sm font-medium text-gray-700">100% Satisfaction</span>
            </div>
            <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-custom hover-scale">
              <svg className="h-5 w-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="ml-2 text-sm font-medium text-gray-700">24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};