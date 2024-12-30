import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function TestimonialSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-secondary-500">
            Testimonials
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What Our Clients Say
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none"
        >
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                content: "Click Core transformed our sales pipeline. The precision-targeted leads led to a 30% increase in conversions!",
                author: "Jane Smith",
                role: "CEO of TechCorp"
              },
              {
                content: "The quality of leads we receive is exceptional. It's clear they understand our target market perfectly.",
                author: "Michael Johnson",
                role: "Sales Director at GrowthCo"
              },
              {
                content: "Their lead generation service has been a game-changer for our business development team.",
                author: "Sarah Williams",
                role: "Head of Marketing at InnovateX"
              }
            ].map((testimonial, index) => (
              <div key={index} className="rounded-2xl bg-gray-50 p-8">
                <blockquote className="text-gray-700">
                  <p>"{testimonial.content}"</p>
                </blockquote>
                <div className="mt-6">
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}