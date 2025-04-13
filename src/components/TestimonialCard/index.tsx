interface TestimonialCardProps {
  name: string;
  role: string;
  image: string;
  quote: string;
  rating: number;
}

export const TestimonialCard = ({ name, role, image, quote, rating }: TestimonialCardProps) => {
  return (
    <div className="card hover-scale p-6 rounded-2xl shadow-custom">
      <div className="flex items-center mb-4">
        <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
          {image ? (
            <img src={image} alt={name} className="h-full w-full object-cover" />
          ) : (
            <svg className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          )}
        </div>
        <div className="ml-4">
          <h4 className="text-lg font-semibold text-gray-900">{name}</h4>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
      </div>
      <div className="flex mb-4">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            className={`h-5 w-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <p className="text-gray-600 italic">{quote}</p>
    </div>
  );
};

export const TestimonialSection = () => {
  const testimonials = [
    {
      name: 'Emily Rodriguez',
      role: 'Graduate Student',
      image: '',
      quote: 'GradeSpark Academy helped me complete my thesis with exceptional quality. Their research assistance and writing support were invaluable.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Undergraduate Student',
      image: '',
      quote: 'The technical assignment help I received was outstanding. The experts explained complex concepts clearly and helped me improve my understanding.',
      rating: 5,
    },
    {
      name: 'Sarah Thompson',
      role: 'PhD Candidate',
      image: '',
      quote: 'Their editing services transformed my research paper. The attention to detail and academic writing expertise made a significant difference.',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Student Success Stories</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            See what our students say about their experience with GradeSpark Academy
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};
