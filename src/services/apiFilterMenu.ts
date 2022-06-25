import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { apiURL } from '../helpers/variables';

export const apiFilterMenu = createApi({
    reducerPath: 'apiFilterMenu',
    baseQuery: fetchBaseQuery({
        baseUrl: `${apiURL}`
    }),
    endpoints: (builder) => ({
        fiscalYears: builder.query<{id:string, dateCreated: string, name:string}[], void>({
            query: () => "finance/fiscal-years?_end=25&_order=DESC&_sort=id&_start=0"
        }),

        regions: builder.query<{ id: string, name: string }[], void>({
            query: () => {
                const fiscalYearId = localStorage.getItem('fiscalYear');
                return {
                    url: `road-network/regions?_end=25&_order=DESC&_sort=id&_start=0&fiscalYearId=${fiscalYearId}`,
                }

            }
        }),

        locations: builder.query<{ id: string, name: string }[], void>({
            query: () => {
                const regionId = localStorage.getItem('region');
                return {
                    url: `road-network/locations?_end=25&_order=DESC&_sort=id&_start=0&regionId=${regionId}`
                }
            }
        })
    })
});

export const { useFiscalYearsQuery, useLazyRegionsQuery , useLazyLocationsQuery} = apiFilterMenu;