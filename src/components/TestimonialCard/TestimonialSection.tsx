import { TestimonialCard } from './TestimonialCard';

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
