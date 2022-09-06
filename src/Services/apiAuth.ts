import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RootState } from '../App/store'
import { apiURL, splitString } from '../Helpers'
import { LoginRequest } from '../Types/Models/Auth/loginRequest'
import { UserResponse } from '../Types/Models/Auth/userResponse'
import { Road } from '../Types/Models/Roads/Road'

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
    roads: builder.query<Road[], void>({
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
