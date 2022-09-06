import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RootState } from '../app/store'
import { splitString } from '../Helpers/Functions/splitString'
import { apiURL } from '../Helpers/variables'
import { Road } from '../Models/Roads/Road'

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

const council = localStorage.getItem('council');

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

    // road network endpoints
    roads: builder.query<any, void>({
      query: () => {
        const locationId = splitString(council, 0);
        return {
          url: `road-network/road-sections?_end=10&_order=ASC&_sort=id&_start=0&locationId=${locationId}`,
        }

      }
    }),

    geoJson: builder.query<Road[], void>({
      query: () => {
        const locationId = splitString(council, 0);
        return {
          url: `road-network/road-sections?_end=10&_order=ASC&_sort=id&_start=0&locationId=${locationId}`,
        }
      },
    }),

    protected: builder.mutation<{ message: string }, void>({
      query: () => 'protected',
    }),
  }),
})

export const { useLoginMutation, useProtectedMutation, useRoadsQuery, useGeoJsonQuery } = apiAuth
