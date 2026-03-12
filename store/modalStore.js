import { create } from 'zustand';

export const useModalStore = create((set) => {
  const closeAll = () =>
    set({
      isHamOpen: false,
      isEnquireOpen: false,
      isVideoOpen: false,
      isThankyouOpen: false,
      isRegionPopOpen: false, 
      isJobFormOpen: false
    });

  return {
    isHamOpen: false,
    isEnquireOpen: false,
    isVideoOpen: false,
    isThankyouOpen: false,
    isRegionPopOpen: false, 
    isJobFormOpen: false,

    openJobForm: () => {
      closeAll();
      set({ isJobFormOpen: true });
    },
    closeJobForm: () => set({ isJobFormOpen: false }),

    openRegionPop: () => {
      closeAll();
      set({ isRegionPopOpen: true });
    },
    closeRegionPop: () => set({ isRegionPopOpen: false }),

    openHam: () => {
      closeAll();
      set({ isHamOpen: true });
    },
    closeHam: () => set({ isHamOpen: false }),

    openEnquire: () => {
      closeAll();
      set({ isEnquireOpen: true });
    },
    closeEnquire: () => set({ isEnquireOpen: false }),

    openVideo: () => {
      closeAll();
      set({ isVideoOpen: true });
    },
    closeVideo: () => set({ isVideoOpen: false }),

    openThankyouPop: () => {
      closeAll();
      set({ isThankyouOpen: true });
    },
    closeThankyouPop: () => set({ isThankyouOpen: false }),

    closeAll,
  };
});
