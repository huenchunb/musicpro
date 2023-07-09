import { createSlice } from "@reduxjs/toolkit";

const initialState: StoreState = {
  stores: [
    {
      id: 1,
      address: "Calle Comercial 123, Santiago",
      phone: "+56 2 23456789",
      email: "tienda.stgo@musicpro.cl",
    },
    {
      id: 2,
      address: "Avenida Principal 456, Maipu",
      phone: "+56 2 98765432",
      email: "tienda.maipu@musicpro.cl",
    },
    {
      id: 3,
      address: "Paseo Comercial 789, Vitacura",
      phone: "+56 2 12345678",
      email: "tienda.vit@musicpro.cl",
    },
  ],
};

export const storeSlice = createSlice({
  name: "store",
  initialState,
  reducers: {
    clearCart: () => {
      return initialState;
    },
  },
});

export interface Store {
  id: number;
  address: string;
  phone: string;
  email: string;
}

export interface StoreState {
  stores: Store[];
}
