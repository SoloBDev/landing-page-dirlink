import { create } from 'zustand';

interface StoreState {
  companyNumber: number;
  customerSatisfaction: number;
  deliveredItems: number;
  partnerRetentionRate: number;
  incrementCustomerNumber: () => void;
  incrementCompanyScope: () => void;
  incrementDeliveredItems: () => void;
}

const useStore = create<StoreState>((set) => ({
  companyNumber: 250,
  customerSatisfaction: 98,
  deliveredItems: 10,
  partnerRetentionRate: 90,
  incrementCustomerNumber: () =>
    set((state) => ({ companyNumber: state.companyNumber + 1 })),
  incrementCompanyScope: () =>
    set((state) => ({ customerSatisfaction: state.customerSatisfaction + 1 })),
  incrementDeliveredItems: () =>
    set((state) => ({ deliveredItems: state.deliveredItems + 1 })),
}));

export default useStore;
