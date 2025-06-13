// components/Footer.tsx
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-3 text-white">Telco Brush Ware</h2>
          <p className="text-gray-400 mb-4">Precision in Every Stroke.</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-400"><FaFacebookF /></a>
            <a href="#" className="hover:text-pink-400"><FaInstagram /></a>
            <a href="#" className="hover:text-blue-300"><FaLinkedinIn /></a>
            <a href="mailto:info@telcobrushware.com" className="hover:text-yellow-300"><FaEnvelope /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/about" className="hover:text-white">About Us</a></li>
            <li><a href="#products" className="hover:text-white">Products</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">Contact</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Email: info@telcobrushware.com</li>
            <li>Phone: +91 9410495946 , 9528541734</li>
            <li>Location: Bijnor, Uttar Pradesh, India</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 text-center text-gray-500 text-xs border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Telco Brush Ware. All rights reserved.
      </div>
    </footer>
  );
}
