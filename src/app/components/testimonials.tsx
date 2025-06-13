'use client';

import { useEffect, useState } from 'react';
import { StarIcon } from '@heroicons/react/24/solid';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    name: 'Alice Johnson',
    message: 'The service was truly outstanding. The team responded promptly to all my inquiries, addressed every concern with professionalism, and ensured everything was handled smoothly. I felt supported throughout the entire process. Their attention to detail and client-first approach really stood out. I would highly recommend their services to anyone.',
    rating: 5
  },
  {
    name: 'Rahul Mehta',
    message: 'I had a great experience from start to finish. The team was cooperative, easy to work with, and always available to guide me. They provided regular updates and delivered exactly what I needed, even going beyond expectations. I will definitely recommend them to my peers and collaborate again.',
    rating: 4
  },
  {
    name: 'Sophie Lee',
    message: 'Working with this team was a pleasure. They were quick to respond, had a friendly attitude, and met deadlines without compromising on quality. Every part of the project was handled with care. I really appreciated the communication and professionalism throughout. I’ll definitely come back for future collaborations.',
    rating: 5
  },
  {
    name: 'David Kim',
    message: 'The quality of work delivered was amazing. From the very beginning, they understood my requirements and executed everything flawlessly. I was impressed by their precision and care in every task. Their creativity and dedication to excellence truly exceeded my expectations. I’m extremely satisfied with the final outcome.',
    rating: 5
  },
  {
    name: 'Maria Garcia',
    message: 'From the initial consultation to the final delivery, the experience was excellent. The team listened carefully, incorporated feedback swiftly, and demonstrated great expertise throughout. Their organized workflow and positive attitude made the entire process enjoyable. I would absolutely work with them again and recommend them to others.',
    rating: 4
  },
  {
    name: 'John Doe',
    message: 'Support was beyond amazing. Whenever I had questions or concerns, someone was always available to help. Their dedication to customer satisfaction was evident in every interaction. The final product exceeded expectations. This is the kind of reliable and professional service every client deserves. I’ll definitely be a returning customer.',
    rating: 5
  },
  {
    name: 'Emily Zhang',
    message: 'They provided an incredibly reliable and efficient service. Every milestone was delivered on time, and the communication was clear and consistent throughout. I felt confident in their abilities and trusted their process. The results spoke for themselves—high quality and thoughtfully executed. I would recommend them without hesitation.',
    rating: 4
  },
  {
    name: 'Chris Evans',
    message: 'These professionals really exceeded my expectations. They handled everything with precision and showed great skill in managing even complex tasks. Their commitment to excellence and clear communication made the experience stress-free. I truly appreciated their hard work and look forward to working with them again on future projects.',
    rating: 5
  },
  {
    name: 'Nina Patel',
    message: 'Working with this team was incredibly smooth. They were professional, organized, and fully committed to delivering the best outcome. Every detail was taken into account, and their responsiveness made a big difference. I’m extremely pleased with the service and look forward to recommending them to friends and colleagues.',
    rating: 5
  },
  {
    name: 'Liam Anderson',
    message: 'I was blown away by the attention to detail and the quality of service provided. They understood my vision perfectly and executed it with finesse. The whole process was seamless, and communication was excellent. It’s rare to find such dedication and professionalism in today’s world. Truly impressive work!',
    rating: 5
  }
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

  useEffect(() => {
    const interval = setInterval(() => paginate(1), 6000); // auto-change every 6 seconds
    return () => clearInterval(interval);
  }, [index]);

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
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow"
              >
                <StarRating rating={testimonial.rating} />
                <p className="text-gray-600 mt-2 italic">“{testimonial.message}”</p>
                <motion.p
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  className="mt-4 text-zinc-800 font-semibold text-right"
                >
                  — {testimonial.name}
                </motion.p>
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
