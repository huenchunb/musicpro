/* Instruments */
import { counterSlice } from "./slices";
import { cartSlice } from "./slices";
import { storeSlice } from "./slices/storeSlice";
import { apiSlice } from "./apiSlice/apiSlice";
import { sessionSlice } from "./slices/sessionSlice/userSlice";

export const reducer = {
  counter: counterSlice.reducer,
  cart: cartSlice.reducer,
  store: storeSlice.reducer,
  session: sessionSlice.reducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
};
