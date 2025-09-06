import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface useWalkingStoreProps {
  walkTime: number;
  missions: Array<string>;
  setWalkTime: (t: number) => void;
  setMissions: (m: Array<string>) => void;
}

const useWalkingStore = create(
  persist<useWalkingStoreProps>(
    (set) => ({
      walkTime: 900,
      missions: ['START', '호흡하기', '명상하기', 'FINISH'],
      setWalkTime: (newTime) => set({ walkTime: newTime }),
      setMissions: (newMissions) => set({ missions: newMissions }),
    }),
    {
      name: 'walking',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useWalkingStore;
