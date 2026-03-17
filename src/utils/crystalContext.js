'use client';
import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

const CrystalContext = createContext(null);

const STORAGE_KEY    = 'mystic_crystal_data';
const DAILY_KEY      = 'mystic_daily_checkin';
const DAILY_REWARD   = 20;

const DEFAULT_STATE = {
  balance:          100,
  unlockedFeatures: [],
  userProfile:      null,
  totalSpent:       0,
  totalEarned:      100,
};

export function CrystalProvider({ children }) {
  const [data, setData]               = useState(DEFAULT_STATE);
  const [loaded, setLoaded]           = useState(false);
  const [dailyReward, setDailyReward] = useState(null); // { crystals } when modal should show

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setData({ ...DEFAULT_STATE, ...JSON.parse(saved) });
    } catch (e) {
      console.warn('Crystal: Failed to load state', e);
    }
    setLoaded(true);
  }, []);

  // Daily check-in: give reward once per calendar day
  useEffect(() => {
    if (!loaded) return;
    try {
      const today     = new Date().toISOString().slice(0, 10); // YYYY-MM-DD
      const lastCheck = localStorage.getItem(DAILY_KEY);
      if (lastCheck !== today) {
        // Give reward
        setData(prev => ({
          ...prev,
          balance:     prev.balance + DAILY_REWARD,
          totalEarned: prev.totalEarned + DAILY_REWARD,
        }));
        localStorage.setItem(DAILY_KEY, today);
        // Show modal after short delay
        setTimeout(() => setDailyReward({ crystals: DAILY_REWARD }), 1200);
      }
    } catch (e) { /* ignore */ }
  }, [loaded]);

  // Persist state
  useEffect(() => {
    if (!loaded) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      console.warn('Crystal: Failed to save state', e);
    }
  }, [data, loaded]);

  // ── Actions ──────────────────────────────────────────────────────────
  const addCrystals = useCallback((amount) => {
    setData(prev => ({
      ...prev,
      balance:     prev.balance + amount,
      totalEarned: prev.totalEarned + amount,
    }));
  }, []);

  const spendCrystals = useCallback((amount) => {
    setData(prev => {
      if (prev.balance < amount) return prev;
      return { ...prev, balance: prev.balance - amount, totalSpent: prev.totalSpent + amount };
    });
    return true;
  }, []);

  const canSpend = useCallback((amount) => data.balance >= amount, [data.balance]);

  const unlockFeature = useCallback((featureKey, cost) => {
    if (data.unlockedFeatures.includes(featureKey)) return true;
    if (data.balance < cost) return false;
    setData(prev => ({
      ...prev,
      balance:          prev.balance - cost,
      totalSpent:       prev.totalSpent + cost,
      unlockedFeatures: [...prev.unlockedFeatures, featureKey],
    }));
    return true;
  }, [data.balance, data.unlockedFeatures]);

  const isUnlocked  = useCallback((k) => data.unlockedFeatures.includes(k), [data.unlockedFeatures]);
  const saveProfile = useCallback((p) => setData(prev => ({ ...prev, userProfile: p })), []);
  const resetAll    = useCallback(() => {
    setData(DEFAULT_STATE);
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  const dismissDailyReward = useCallback(() => setDailyReward(null), []);

  return (
    <CrystalContext.Provider value={{
      balance: data.balance, userProfile: data.userProfile,
      unlockedFeatures: data.unlockedFeatures,
      totalSpent: data.totalSpent, totalEarned: data.totalEarned,
      loaded, dailyReward,
      addCrystals, spendCrystals, canSpend,
      unlockFeature, isUnlocked,
      saveProfile, resetAll, dismissDailyReward,
    }}>
      {children}
    </CrystalContext.Provider>
  );
}

export function useCrystal() {
  const ctx = useContext(CrystalContext);
  if (!ctx) throw new Error('useCrystal must be inside <CrystalProvider>');
  return ctx;
}
