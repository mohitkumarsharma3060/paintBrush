// app/layout.tsx
import './globals.css';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Testimonials } from './components/testimonials';

export const metadata = {
  title: 'Telco Brush Ware',
  description: 'Precision in Every Stroke',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-grow">{children}</main>
        <Testimonials/>
        <Footer />
      </body>
    </html>
  );
}
