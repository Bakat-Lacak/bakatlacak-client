import { create } from "zustand";
import { persist } from "zustand/middleware";

const userStore = (set) => ({
  user: {},
  setUser: (newData) => {
    set(() => ({ user: newData }));
  },
});

const companyProfileStore = (set) => ({
  companyProfile: {},
  setCompanyProfile: (newData) => {
    set(() => ({ companyProfile: newData }));
  },
});

// Utility function to check if the user has the "recruiter" role
const hasRecruiterRole = (user) => {
  // Implement your role checking logic here
  return user.role === "recruiter";
};

export const useStore = create(
  persist(
    (...a) => ({
      ...userStore(...a),
    }),
    (...a) => ({
      ...companyProfileStore(...a),
    }),
    { name: "bound-store" }
  )
);

export { hasRecruiterRole }; // Export the hasRecruiterRole function
