// store/cartModal.ts
import {create} from "zustand";

interface CartModalState {
    isOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
}

export const useCartModalStore = create<CartModalState>((set) => ({
    isOpen: false,
    openModal: () => set({ isOpen: true }),
    closeModal: () => set({ isOpen: false }),
}));
