import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { loadInstrumentsAsync } from "./thunks";

const initialState: CartState = {
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
    {
      id: 10,
      brand: "Gibson",
      category: "Guitarra",
      name: "Guitarra eléctrica Gibson ES-339 - Trans Ebony",
      price: 3999900,
      quantity: 2,
    },
    {
      id: 11,
      brand: "Gibson",
      category: "Guitarra",
      name: "Guitarra eléctrica Epiphone Firebird - Vintage Sunburst",
      price: 799900,
      quantity: 12,
    },
    {
      id: 12,
      brand: "Ibanez",
      category: "Guitarra",
      name: "Pack de guitarra eléctrica Ibanez IJRX20U - Black",
      price: 299900,
      quantity: 48,
    },
    {
      id: 13,
      brand: "Tama",
      category: "Bateria",
      name: "Batería acústica Tama Imperialstar IE52KH6W 6 piezas HBK",
      price: 699900,
      quantity: 50,
    },
    {
      id: 14,
      brand: "ADW",
      category: "Bateria",
      name: "Batería acústica ADW JUNO5 color Wine Red",
      price: 499900,
      quantity: 36,
    },
    {
      id: 15,
      brand: "ADW",
      category: "Bateria",
      name: "Batería para niños ADW Junior ADJ5J color negro",
      price: 299900,
      quantity: 40,
    },
    {
      id: 16,
      brand: "Roland",
      category: "Bateria",
      name: "Batería electrónica Roland TD-1DMK-230",
      price: 989900,
      quantity: 25,
    },
    {
      id: 17,
      brand: "Avatar",
      category: "Bateria",
      name: "Batería electrónica Avatar SD201-2",
      price: 809900,
      quantity: 39,
    },
    {
      id: 18,
      brand: "Avatar",
      category: "Bateria",
      name: "Batería electrónica Roland TD-02KV",
      price: 659900,
      quantity: 21,
    },
  ],
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Instrument>) => {
      const { id } = action.payload;
      const existingInstrument = state.items.find((item) => item.id === id);

      if (existingInstrument) {
        existingInstrument.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action: PayloadAction<number>): void => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearCart: () => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadInstrumentsAsync.fulfilled, (state, action) => {
      state.instruments = action.payload;
    });
  },
});

export interface CartState {
  instruments: Instrument[];
  items: Instrument[];
}

export interface Instrument {
  id: number;
  name: string;
  brand: string;
  category: string;
  price: number;
  quantity: number;
}
