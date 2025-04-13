export const CallToAction = () => {
  return (
    <section id="contact" className="bg-blue-600 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to Excel in Your Studies?
          </h2>
          <p className="mt-4 text-xl text-blue-100 max-w-2xl mx-auto">
            Get started with GradeSpark Academy today and experience the difference expert academic support can make.
          </p>
          <div className="mt-8 flex justify-center gap-x-4">
            <a
              href="#"
              className="btn btn-primary"
            >
              Get Started Now
            </a>
            <a
              href="#services"
              className="btn btn-outline"
            >
              Learn More
            </a>
          </div>
          
          {/* Contact Information */}
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex items-center justify-center">
              <svg className="h-6 w-6 text-blue-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="ml-3 text-blue-100">support@gradesparkacademy.com</span>
            </div>
            <div className="flex items-center justify-center">
              <svg className="h-6 w-6 text-blue-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="ml-3 text-blue-100">24/7 Support Available</span>
            </div>
            <div className="flex items-center justify-center">
              <svg className="h-6 w-6 text-blue-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="ml-3 text-blue-100">Quick Response Time</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
