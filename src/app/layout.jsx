import './globals.css';
import CosmicBackground from '../components/CosmicBackground';
import MagicCursor from '../components/MagicCursor';
import Navbar from '../components/Navbar';
import Providers from './Providers';

export const metadata = {
  title: '🔮 Mystic Crystal Oracle',
  description: 'Discover your destiny, elemental energy, and lucky crystals',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Prompt:wght@300;400;500;600;700&family=Sarabun:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="text-gray-100 font-sarabun antialiased min-h-screen">
        <Providers>
          <MagicCursor />
          <div className="min-h-screen py-6 relative flex flex-col">
            <CosmicBackground />
            
            {/* Purple nebula ambient glows - high visibility portal effect */}
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none" style={{zIndex: -1}}>
              <div className="absolute top-[5%] left-1/2 -translate-x-1/2 w-[70rem] h-[70rem] rounded-full" style={{background: 'radial-gradient(circle, rgba(114,9,183,0.35) 0%, rgba(76,29,149,0.15) 40%, transparent 70%)', filter: 'blur(60px)'}}></div>
              <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[45rem] h-[45rem] rounded-full" style={{background: 'radial-gradient(circle, rgba(168,85,247,0.25) 0%, rgba(124,58,237,0.1) 50%, transparent 70%)', filter: 'blur(40px)'}}></div>
              <div className="absolute top-[-5%] left-[-15%] w-[40rem] h-[40rem] rounded-full" style={{background: 'radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)', filter: 'blur(80px)'}}></div>
              <div className="absolute bottom-[10%] right-[-10%] w-[35rem] h-[35rem] rounded-full" style={{background: 'radial-gradient(circle, rgba(236,72,153,0.12) 0%, transparent 70%)', filter: 'blur(80px)'}}></div>
            </div>

            <Navbar />

            {/* Main Routing Area */}
            <div className="flex-1 w-full max-w-6xl mx-auto px-2 md:px-4">
              {children}
            </div>
            
            {/* Footer */}
            <footer className="mt-20 text-center text-mystic-400 text-sm pb-6 z-10 relative">
              &copy; {new Date().getFullYear()} Mystic Crystal Fortune. วิเคราะห์ดวงและหินมงคล
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
