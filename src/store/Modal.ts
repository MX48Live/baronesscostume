import { create } from "zustand";

type ModalStoreType = {
  isOpen: boolean;
  setOpen: () => void;
  setClose: () => void;
};

export const useModalStore = create<ModalStoreType>((set) => ({
  isOpen: false,
  setOpen: () => set({ isOpen: true }),
  setClose: () => set({ isOpen: false }),
}));
