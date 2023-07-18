import { create } from "zustand";
import { persist } from "zustand/middleware";

const userStore = (set) => ({
  user: {},
  setUser: (newData) => {
    set(() => ({ user: newData }));
  },
});

const jobListStore = (set) => ({
  jobList: [],
  setJobList: (newData) => {
    set(() => ({ jobList: newData }));
  },
});

export const useStore = create(
  persist(
    (...a) => ({
      ...userStore(...a),
      ...jobListStore(...a),
    }),
    { name: "bound-store" }
  )
);
