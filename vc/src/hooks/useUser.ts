import { create } from "zustand";

interface User {
  fullName: string;
  setFullName: (name: string) => void;
}

export const useUser = create<User>((set) => ({
  fullName: "",
  setFullName: (name: string) => set({ fullName: name }),
}));

export default useUser;
