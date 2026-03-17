'use client';
import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

const CrystalContext = createContext(null);

const STORAGE_KEY   = 'mystic_crystal_data';
const DEFAULT_STATE = {
  balance:      100,
  unlockedFeatures: [],
  userProfile:  null,   // { name, birthdate, birthtime }
  totalSpent:   0,
  totalEarned:  100,
};

export function CrystalProvider({ children }) {
  const [data, setData] = useState(DEFAULT_STATE);
  const [loaded, setLoaded] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setData({ ...DEFAULT_STATE, ...JSON.parse(saved) });
      }
    } catch (e) {
      console.warn('Crystal: Failed to load state', e);
    }
    setLoaded(true);
  }, []);

  // Persist to localStorage whenever data changes
  useEffect(() => {
    if (!loaded) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      console.warn('Crystal: Failed to save state', e);
    }
  }, [data, loaded]);

  // ── Actions ─────────────────────────────────────────────────────────
  const addCrystals = useCallback((amount, reason = '') => {
    setData(prev => ({
      ...prev,
      balance:     prev.balance + amount,
      totalEarned: prev.totalEarned + amount,
    }));
  }, []);

  const spendCrystals = useCallback((amount) => {
    setData(prev => {
      if (prev.balance < amount) return prev; // not enough
      return {
        ...prev,
        balance:    prev.balance - amount,
        totalSpent: prev.totalSpent + amount,
      };
    });
    return true;
  }, []);

  const canSpend = useCallback((amount) => {
    return data.balance >= amount;
  }, [data.balance]);

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

  const isUnlocked = useCallback((featureKey) => {
    return data.unlockedFeatures.includes(featureKey);
  }, [data.unlockedFeatures]);

  const saveProfile = useCallback((profile) => {
    setData(prev => ({ ...prev, userProfile: profile }));
  }, []);

  const resetAll = useCallback(() => {
    setData(DEFAULT_STATE);
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  return (
    <CrystalContext.Provider value={{
      balance:          data.balance,
      userProfile:      data.userProfile,
      unlockedFeatures: data.unlockedFeatures,
      totalSpent:       data.totalSpent,
      totalEarned:      data.totalEarned,
      loaded,
      addCrystals,
      spendCrystals,
      canSpend,
      unlockFeature,
      isUnlocked,
      saveProfile,
      resetAll,
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
