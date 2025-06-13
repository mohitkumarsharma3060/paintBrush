'use client';

import { useState } from 'react';
import { StarIcon } from '@heroicons/react/24/solid';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  { name: 'Alice Johnson', message: 'Excellent service! Prompt replies and very professional.', rating: 5 },
  { name: 'Rahul Mehta', message: 'Great experience. Highly recommended!', rating: 4 },
  { name: 'Sophie Lee', message: 'Friendly team and quick turnaround. Will work again.', rating: 5 },
  { name: 'David Kim', message: 'Amazing quality and attention to detail.', rating: 5 },
  { name: 'Maria Garcia', message: 'Loved the experience from start to finish.', rating: 4 },
  { name: 'John Doe', message: 'Couldn’t have asked for better support.', rating: 5 },
  { name: 'Emily Zhang', message: 'Reliable and efficient service.', rating: 4 },
  { name: 'Chris Evans', message: 'They exceeded my expectations.', rating: 5 },
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex">
    {[...Array(5)].map((_, i) => (
      <StarIcon key={i} className={`h-5 w-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} />
    ))}
  </div>
);

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const visibleCount = 3;

  const paginate = (direction: number) => {
    let newIndex = index + direction * visibleCount;
    if (newIndex < 0) newIndex = testimonials.length - visibleCount;
    else if (newIndex >= testimonials.length) newIndex = 0;
    setIndex(newIndex);
  };

  const visibleTestimonials = testimonials.slice(index, index + visibleCount);

  return (
    <section className="bg-gray-50 py-12 px-6 rounded-xl shadow-inner max-w-6xl mx-auto mt-4 relative overflow-hidden">
      <h2 className="text-2xl font-bold text-zinc-800 text-center mb-10">What Our Customers Say</h2>

      <div className="relative">
        <button
          onClick={() => paginate(-1)}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow hover:bg-zinc-100 transition"
        >
          <ChevronLeftIcon className="h-6 w-6 text-gray-600" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <AnimatePresence initial={false} mode="popLayout">
            {visibleTestimonials.map((testimonial, i) => (
              <motion.div
                key={testimonial.name + i}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.035, delay: i * 0.1 }}
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow"
              >
                <StarRating rating={testimonial.rating} />
                <p className="text-gray-600 mt-2 italic">“{testimonial.message}”</p>
                <p className="mt-4 text-zinc-800 font-semibold">{testimonial.name}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <button
          onClick={() => paginate(1)}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow hover:bg-zinc-100 transition"
        >
          <ChevronRightIcon className="h-6 w-6 text-gray-600" />
        </button>
      </div>
    </section>
  );
}
