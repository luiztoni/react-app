import { create } from 'zustand'

export const useBearStore = create((set) => ({
  bears: 0,
  increasePopulation: (n) => set((state) => ({ bears: state.bears + n })),
  removeAllBears: () => set({ bears: 0 }),
}))