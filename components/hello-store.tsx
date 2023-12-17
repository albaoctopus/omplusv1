'use client'

import { create } from 'zustand';

interface HelloStore {
  showHello: boolean;
  setShowHello: (show: boolean) => void;
}

export const useHelloStore = create<HelloStore>(set => ({
  showHello: false,
  setShowHello: (show) => set({ showHello: show }) 
}));