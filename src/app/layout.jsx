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
      <body className="bg-mystic-900 text-gray-100 font-sarabun antialiased min-h-screen">
        <Providers>
          <MagicCursor />
          <div className="min-h-screen py-6 relative flex flex-col bg-transparent">
            <CosmicBackground />
            
            {/* Premium Background ambient glows (Portal Effect) */}
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
              <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[60rem] h-[60rem] bg-fuchsia-600/10 rounded-full blur-[180px] z-[-10] mix-blend-screen"></div>
              <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] bg-purple-600/20 rounded-full blur-[150px] z-[-10] mix-blend-screen"></div>
              <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-indigo-600/10 rounded-full blur-[150px] z-[-10]"></div>
              <div className="absolute top-[50%] right-[-10%] w-[35rem] h-[35rem] bg-pink-500/10 rounded-full blur-[150px] z-[-10]"></div>
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
