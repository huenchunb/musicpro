import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface UserResponse {
  name: string;
  email: string;
  password: string;
  address: Address;
  created_at: string;
  update_at: string | null;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  postal_code: string;
  country: string;
}

export interface User {
  name: string;
  email: string;
  password: string;
  address: Address;
}

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://backend-ventas-duoc.azurewebsites.net/api/" }),
  endpoints: (builder) => ({
    createUser: builder.mutation<UserResponse, User>({
      query: (body: User) => ({
        url: "usuarios/clientes",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-server-api-key": "Bj30PYxwArgqL3QJKcQA9faV4mtbeWUOaARt06Ay6sklUSnQncJu1Kwtb8OH=",
        },
        body: body,
      }),
    }),
  }),
});

export const { useCreateUserMutation } = apiSlice;
