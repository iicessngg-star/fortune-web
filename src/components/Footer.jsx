import { Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full mt-auto py-8 text-center border-t border-mystic-700/30 bg-mystic-900/50 backdrop-blur-sm z-10 relative">
      <div className="flex items-center justify-center space-x-2 mb-4">
        <Sparkles className="w-5 h-5 text-mystic-500 opacity-60" />
        <span className="font-cinzel font-semibold text-mystic-400 opacity-80">Mystic Fortune</span>
        <Sparkles className="w-5 h-5 text-mystic-500 opacity-60" />
      </div>
      <p className="text-gray-500 text-sm font-poppins">
        &copy; {new Date().getFullYear()} Guided by the Stars. All rights reserved.
      </p>
    </footer>
  );
}
