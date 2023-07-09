import type { ReduxState } from "@/lib/redux";
import { Store } from "./storeSlice";

export const selectStores = (state: ReduxState): Store[] => state.store.stores;
