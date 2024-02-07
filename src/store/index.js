import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAppStore = create(
  persist(
    (set) => ({
      source: null,

      setSource: (source) => set({ source }),

      destination: null,

      setDestination: (destination) => set({ destination }),

      date: null,
      setDate: (date) => set({ date }),

      error: false,
      setError: (error) => set({ error }),

      availableFlights: null,
      setAvailableFlights: (availableFlights) => set({ availableFlights }),
    }),
    {
      name: "appStore",
    }
  )
);
