import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { UserResponse } from "../../apiSlice/apiSlice";
import { Instrument } from "../cartSlice";

export interface SessionState {
  user: UserResponse | undefined;
  orders: Order[];
}

export interface Order {
  id: number;
  address: string;
  status: boolean;
  instruments: Instrument[];
}

const initialState: SessionState = {
  user: undefined,
  orders: [
    {
      id: 1,
      address: "Domingo Faustino 500, Ñuñoa, Santiago",
      status: false,
      instruments: [
        {
          id: 1,
          brand: "Yamaha",
          category: "Piano",
          name: " Yamaha Psrf52",
          price: 135900,
          quantity: 20,
        },
        {
          id: 2,
          brand: "Roland",
          category: "Piano",
          name: "Roland GO KEYS - 61 teclas C/ Bluetooth",
          price: 499000,
          quantity: 30,
        },
        {
          id: 3,
          brand: "Roland",
          category: "Piano",
          name: "Roland GO KEYS - 61 teclas C/ Bluetooth",
          price: 499000,
          quantity: 11,
        },
      ],
    },
    {
      id: 2,
      address: "Av Providencia 1208, Providencia, Santiago",
      status: false,
      instruments: [
        {
          id: 4,
          brand: "Casio",
          category: "Piano",
          name: "Casio CT-S1 color rojo",
          price: 299900,
          quantity: 28,
        },
        {
          id: 5,
          brand: "Kawai",
          category: "Piano",
          name: "Piano digital Kawai KDP 120",
          price: 1559900,
          quantity: 7,
        },
      ],
    },
    {
      id: 3,
      address: "Av Antonio Varas 666, Providencia, Santiago",
      status: false,
      instruments: [
        {
          id: 6,
          brand: "Kurzweil",
          category: "Piano",
          name: "Piano digital Kurzweil KAG100 White Polish",
          price: 2479000,
          quantity: 3,
        },
        {
          id: 7,
          brand: "Ibanez",
          category: "Guitarra",
          name: "Guitarra electroacústica AEG50 Ibanez Dark Honey Burst",
          price: 289900,
          quantity: 50,
        },
        {
          id: 8,
          brand: "Takamine",
          category: "Guitarra",
          name: "Guitarra acústica Takamine GC2 - Black",
          price: 229900,
          quantity: 42,
        },
        {
          id: 9,
          brand: "Vizcaya",
          category: "Guitarra",
          name: "Guitarra acústica Vizcaya ARCG44 - Black",
          price: 64990,
          quantity: 60,
        },
      ],
    },
  ],
};

export const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    loadUser: (state, action: PayloadAction<UserResponse>) => {
      state.user = action.payload;
    },
    changeStatusById: (state, action: PayloadAction<{ id: number; status: boolean }>) => {
      const { id, status } = action.payload;
      state.orders = state.orders.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            status,
          };
        }
        return item;
      });
    },
    cleanUser: () => {
      return initialState;
    },
  },
});
