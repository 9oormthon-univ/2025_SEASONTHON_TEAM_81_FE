import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface useTokenStoreProps {
  token: string;
  setToken: (t: string) => void;
}

const useTokenStore = create(
  persist<useTokenStoreProps>(
    (set) => ({
      token: '',
      setToken: (newToken) => set({ token: newToken }),
    }),
    {
      name: 'userToken',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useTokenStore;
