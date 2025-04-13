export const Hero = () => {
  return (
    <div className="relative bg-gradient-to-b from-emerald-50 to-white pt-24 pb-16 sm:pt-32 sm:pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight gradient-text sm:text-6xl">
            Excel in Your Academic Journey with Expert Support
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            Get professional academic assistance from experienced educators. We help students achieve their academic goals with personalized support, timely delivery, and guaranteed quality.
          </p>
          
          {/* Search Bar */}
          <div className="mt-8 max-w-xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for subjects, topics, or services..."
                className="w-full px-6 py-4 rounded-full border-2 border-emerald-200 focus:border-emerald-500 focus:outline-none shadow-sm text-gray-700 placeholder-gray-400"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-emerald-500 text-white px-6 py-2 rounded-full hover:bg-emerald-600 transition-colors">
                Search
              </button>
            </div>
          </div>

          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#services"
              className="rounded-full bg-emerald-500 px-8 py-3 text-lg font-semibold text-white shadow-custom hover:bg-emerald-600 hover-scale focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500 transition-all"
            >
              Explore Our Services
            </a>
            <a
              href="#how-it-works"
              className="text-lg font-semibold leading-6 text-emerald-700 hover:text-emerald-500 transition-colors"
            >
              Learn More <span aria-hidden="true">→</span>
            </a>
          </div>
          
          {/* Trust Badges */}
          <div className="mt-16 flex justify-center space-x-8">
            <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-custom hover-scale">
              <svg className="h-6 w-6 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="ml-2 text-sm font-medium text-gray-700">100% Satisfaction</span>
            </div>
            <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-custom hover-scale">
              <svg className="h-6 w-6 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span className="ml-2 text-sm font-medium text-gray-700">Secure Payments</span>
            </div>
            <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-custom hover-scale">
              <svg className="h-6 w-6 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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