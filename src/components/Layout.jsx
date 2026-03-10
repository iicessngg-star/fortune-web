import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1 relative overflow-hidden flex flex-col items-center justify-center p-4">
        {/* Background Decorative Elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-mystic-600/20 rounded-full blur-3xl mix-blend-screen animate-float pointer-events-none"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-mystic-500/10 rounded-full blur-3xl mix-blend-screen animate-float pointer-events-none" style={{ animationDelay: '2s' }}></div>
        
        <div className="w-full max-w-4xl mx-auto z-10 relative">
          <Outlet />
        </div>
      </main>

      <Footer />
    </div>
  );
}
