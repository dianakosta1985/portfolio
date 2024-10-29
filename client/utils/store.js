// store.js
import create from "zustand";

const useStore = create((set) => ({
  pages: [], // Initial state
  setPages: (newPages) => set({ pages: newPages }), // Function to update user state
  clearPages: () => set({ pages: [] }), // Function to clear user state
}));

export default useStore;
