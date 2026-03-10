import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import DailyHoroscope from './pages/DailyHoroscope';
import BirthChart from './pages/BirthChart';
import LuckyStone from './pages/LuckyStone';
import AIFortune from './pages/AIFortune';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="daily" element={<DailyHoroscope />} />
        <Route path="chart" element={<BirthChart />} />
        <Route path="stone" element={<LuckyStone />} />
        <Route path="fortune" element={<AIFortune />} />
      </Route>
    </Routes>
  );
}

export default App;
