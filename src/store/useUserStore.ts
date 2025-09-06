import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface useUserStoreProps {
  name: string;
  setName: (t: string) => void;
}

const useUserStore = create(
  persist<useUserStoreProps>(
    (set) => ({
      name: '재욱',
      setName: (newName) => set({ name: newName }),
    }),
    {
      name: 'userName',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useUserStore;
