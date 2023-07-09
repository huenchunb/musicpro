import type { ReduxState } from "@/lib/redux";
import { UserResponse } from "../../apiSlice/apiSlice";
import { Order } from "./userSlice";

export const selectUser = (state: ReduxState): UserResponse | undefined => state.session.user;
export const selectCartOrders = (state: ReduxState): Order[] => state.session.orders;
