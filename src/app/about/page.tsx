'use client';

import { PaintBrushIcon, SparklesIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

export default function AboutPage() {
  return (


       <div className="pt-4">
      {/* Header Section */}
      <div className="bg-blue-600 text-white py-15">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">About Us</h1>
          <p className="text-xl">Learn about our journey and mission</p>
        </div>
      </div>
    <main className="pt-24 pb-16 px-6 bg-white text-gray-800">
      {/* Hero */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">About Telco Brush Ware</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          At Telco Brush Ware, we craft premium quality paint brushes tailored for professionals, artists, and DIY enthusiasts alike.
        </p>
      </section>

      {/* Features */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto mb-16 text-center">
        <div>
          <SparklesIcon className="w-12 h-12 mx-auto text-blue-500 mb-3" />
          <h3 className="text-xl font-semibold">Premium Quality</h3>
          <p className="text-gray-600">Each brush is designed to deliver smooth, precise strokes with lasting durability.</p>
        </div>
        <div>
          <PaintBrushIcon className="w-12 h-12 mx-auto text-blue-500 mb-3" />
          <h3 className="text-xl font-semibold">Wide Variety</h3>
          <p className="text-gray-600">From fan to flat, roller to round – we offer brushes for every need.</p>
        </div>
        <div>
          <ShieldCheckIcon className="w-12 h-12 mx-auto text-blue-500 mb-3" />
          <h3 className="text-xl font-semibold">Trusted Brand</h3>
          <p className="text-gray-600">Backed by years of experience and trusted by thousands of painters and decorators.</p>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="bg-gray-50 py-12 px-6 rounded-xl shadow-inner max-w-5xl mx-auto mb-16">
        <h2 className="text-2xl font-bold text-center mb-6">Our Mission & Vision</h2>
        <p className="text-gray-700 mb-4">
          <strong>Mission:</strong> To revolutionize the painting experience by providing brushes that blend innovation with tradition, designed to make every stroke count.
        </p>
        <p className="text-gray-700">
          <strong>Vision:</strong> To be the go-to brand for high-quality, reliable, and sustainable paint brush solutions across the globe.
        </p>
      </section>

      {/* Team Placeholder */}
      <section className="text-center mb-16">
        <h2 className="text-2xl font-bold mb-4">Meet the Team</h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-6">
          A group of passionate individuals committed to bringing you the best painting tools in the market.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {['Founder', 'Designer', 'Technician'].map((role, i) => (
            <div key={i} className="bg-white rounded-xl shadow p-4">
              <div className="h-24 w-24 rounded-full bg-blue-100 mx-auto mb-4" />
              <h3 className="text-lg font-semibold">John Doe</h3>
              <p className="text-sm text-gray-500">{role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center mt-20">
        <h2 className="text-3xl font-bold mb-4">Join the Telco Movement</h2>
        <p className="text-gray-600 mb-6 max-w-xl mx-auto">
          Whether you're a professional painter or a weekend warrior, our brushes are made to elevate your work.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition">
          Explore Products
        </button>
      </section>
    </main>
    </div>
  );
}
