import { Inter } from 'next/font/google';
import './globals.css';
import { CrystalProvider } from '@/utils/crystalContext';
import Navbar           from '@/components/Navbar';
import StarsBackground  from '@/components/StarsBackground';
import CrystalChatbot   from '@/components/CrystalChatbot';
import AppShell         from '@/components/AppShell';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Mystic Crystal Fortune — ดูดวงออนไลน์ระดับพรีเมียม',
  description:
    'ดูดวงออนไลน์ด้วยโหราศาสตร์ตะวันตก ไพ่ยิปซี เลขศาสตร์ และฤกษ์มงคลไทย พร้อม AI วิเคราะห์แบบเจาะลึก',
  keywords: ['ดูดวง', 'โหราศาสตร์', 'ไพ่ยิปซี', 'เลขศาสตร์', 'ฤกษ์มงคล', 'Mystic Crystal'],
  openGraph: {
    title:       'Mystic Crystal Fortune',
    description: 'ดูดวงออนไลน์ระดับพรีเมียม',
    type:        'website',
  },
  manifest: '/manifest.json',
};

export const viewport = {
  themeColor: '#030118',
};

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700;900&family=Cinzel+Decorative:wght@400;700;900&family=Sarabun:wght@200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.className} bg-midnight-950 text-midnight-100 overflow-x-hidden`}>
        <CrystalProvider>
          <StarsBackground />
          <Navbar />
          {/* AppShell: DailyRewardModal + other global client-only UI */}
          <AppShell />
          <main className="relative z-10 min-h-screen">
            {children}
          </main>
          <CrystalChatbot />
        </CrystalProvider>
      </body>
    </html>
  );
}
