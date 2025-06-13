'use client';

const brushes = [
  {
    title: 'Art Pavilion | Fan Paint Brushes Set | No.2,4,6,8,10&12 | Art No. T-503',
    image: '/images/fan-brush.png', // Store in public/images/
    originalPrice: 565,
    discountedPrice: 474,
    discount: '16% off',
  },
  {
    title: "Art Pavilion | Cat's Tongue Brush Set | No.1,2,4,6,8,10 & 12",
    image: '/images/cats-tongue-brush.png',
    originalPrice: 599,
    discountedPrice: 479,
    discount: '20% off',
  },
  {
    title: 'Pidilite | Fine Art | Round Brush Set | Size: No. 0,2,4,6,8,10,12',
    image: '/images/pidilite-brush.png',
    originalPrice: 370,
    discountedPrice: 339,
    discount: '8% off',
  },
  {
    title: 'Arora | Flat Brush Set | No. 1,2,4,6,7,10&12',
    image: '/images/arora-flat-brush.png',
    originalPrice: 550,
    discountedPrice: 469,
    discount: '15% off',
  },
];

export function HeroSection() {
  return (
    <section className="pt-24 bg-gradient-to-br from-blue-100 to-white text-center py-16 px-4">
      <h2 className="text-4xl font-bold text-gray-800 mb-4">Precision in Every Stroke</h2>
      <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
        Premium quality paint brushes now available at discounted prices.
      </p>

    </section>
  );
}
