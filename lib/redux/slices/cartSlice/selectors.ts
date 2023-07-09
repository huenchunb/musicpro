import type { Instrument, ReduxState } from "@/lib/redux";

export const selectCartItems = (state: ReduxState): Instrument[] => state.cart.items;
export const selectCartInstruments = (state: ReduxState): Instrument[] => state.cart.instruments;
