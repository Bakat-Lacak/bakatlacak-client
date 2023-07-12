import { create } from "zustand";
import { persist } from "zustand/middleware";

const userStore = (set) => ({
  user: {},
  setUser: (newData) => {
    set(() => ({ user: newData }));
  },
});
const companyStore = (set) => ({
  company: {},
  setCompany: (newData) => {
    set(() => ({ company: newData }));
  },
})

export const useStore = create(
  persist(
    (...a) => ({
      ...userStore(...a),
    }),
    (...a)=> ({
      ...companyStore(...a),
    }),
    { name: "bound-store" }
  )
);
