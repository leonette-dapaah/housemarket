import { create } from "zustand";
import { fetchProperties } from "@/api/properties";

interface ModalState {
    activeModal: string | null;
}
interface ModalActions {
    openModal: (modalName: string) => void;
    closeModal: () => void;
}
type ModalStore = ModalState & ModalActions;

export const useModalStore = create<ModalStore>((set) => ({
    activeModal: null,
    openModal: (modalName: string) => set({ activeModal: modalName }),
    closeModal: () => set({ activeModal: null }),
}));

type PropertyType = Record<string, any>;

interface PropertyStoreInterface{
    properties: PropertyType[];
    setProperties: (properties: PropertyType[]) => void;
    fetchAndSetProperties: () => Promise<void>;
}

export const usePropertyStore = create<PropertyStoreInterface>((set) => ({
    properties: [],
    setProperties: (properties) => set({ properties }),
    fetchAndSetProperties: async () => {
        console.log("fetchAndSetProperties called");
        try { 
            const propertiesResponse = await fetchProperties();
            set({ properties: propertiesResponse });
        }
        catch(e) {
            console.log(e);
            throw e;
        }
    }
}))

