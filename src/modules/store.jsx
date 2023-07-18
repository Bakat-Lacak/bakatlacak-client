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

<<<<<<< HEAD
const jobDetailStore = (set) => ({
  jobDetail: {},
  setJobDetail: (newData) => {
    set(() => ({ jobDetail: newData }));
  },
});

=======
>>>>>>> 6dc5a8a (search query filter but not with styling)
export const useStore = create(
  persist(
    (...a) => ({
      ...userStore(...a),
      ...jobListStore(...a),
<<<<<<< HEAD
      ...jobDetailStore(...a),
=======
>>>>>>> 6dc5a8a (search query filter but not with styling)
    }),
    { name: "bound-store" }
  )
);
