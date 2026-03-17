'use client';
import { useCrystal } from '@/utils/crystalContext';
import DailyRewardModal from '@/components/DailyRewardModal';
import { playCrystalChime } from '@/utils/soundEffects';

/** Global client-side shell: mounts modals and other non-layout UI */
export default function AppShell() {
  const { dailyReward, dismissDailyReward } = useCrystal();

  function handleDismiss() {
    playCrystalChime();
    dismissDailyReward();
  }

  if (!dailyReward) return null;

  return (
    <DailyRewardModal
      crystals={dailyReward.crystals}
      onClose={handleDismiss}
    />
  );
}
