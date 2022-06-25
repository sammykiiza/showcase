import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RootState } from '../app/store'
import { apiURL } from '../helpers/variables'

export interface User {
  first_name: string
  last_name: string
  email: string
}

export interface UserResponse {
  user: User
  accessToken: string
}

export interface LoginRequest {
  email: string
  password: string
}

export const apiAuth = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `${apiURL}`,
    prepareHeaders: (headers, { getState }) => {
      // By default, if we have a token in the store, let's use that for authenticated requests
      const token = (getState() as RootState).auth.accessToken
      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }
      return headers
    },
  }),
  endpoints: (builder) => ({
    login: builder.mutation<UserResponse, LoginRequest>({
      query: (credentials) => ({
        url: 'authentication/access-tokens',
        method: 'POST',
        body: credentials,
      }),
    }),
    protected: builder.mutation<{ message: string }, void>({
      query: () => 'protected',
    }),
  }),
})

export const { useLoginMutation, useProtectedMutation } = apiAuth
