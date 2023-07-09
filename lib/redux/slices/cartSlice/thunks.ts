import { createAppAsyncThunk } from "../../createAppAsyncThunk";
import { fetchInstruments } from "./fetchInstruments";

export const loadInstrumentsAsync = createAppAsyncThunk("cart/fetchInstruments", async () => {
  const response = await fetchInstruments();
  return response.data;
});
