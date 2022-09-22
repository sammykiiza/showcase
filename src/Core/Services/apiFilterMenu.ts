import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { apiURL } from '../Helpers';

export const apiFilterMenu = createApi({
    reducerPath: 'apiFilterMenu',
    baseQuery: fetchBaseQuery({
        baseUrl: `${apiURL}`
    }),
    endpoints: (builder) => ({
        fiscalYears: builder.query<{id:string, dateCreated: string, name:string}[], void>({
            query: () => "finance/fiscal-years?_end=25&_order=DESC&_sort=id&_start=0"
        }),

        regions: builder.query<{ id: string, dateCreated: string, name: string }[], void>({
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
        }),
        functionalAssessments: builder.query<{id: string, dateCreated: string, roadSectionId: string }[], void>({
            query: () => {
                const fiscalYearId = localStorage.getItem('fiscalYear');
                return {
                    url: `road-condition/functional-assessments?_end=10&_order=ASC&_sort=id&_start=0&fiscalYear=${fiscalYearId}`
                }

            }
        }),
        materialInformation: builder.query<{id: string, dateCreated: string, roadSectionId: string}[], void>({
            query: () => {
                const fiscalYearId = localStorage.getItem('fiscalYear');
                return {
                    url: `road-condition/material-information?_end=10&_order=ASC&_sort=id&_start=0&fiscalYear=${fiscalYearId}`
                }
            }
        }),
        surfaceDistresses: builder.query<{id: string, dateCreated: string, roadSectionId: string}[], void>({
            query: () => {
                const fiscalYearId = localStorage.getItem('fiscalYear');
                return {
                    url: `road-condition/surface-distresses?_end=10&_order=ASC&_sort=id&_start=0&fiscalYear=${fiscalYearId}`
                }
            }
        }),
        roadSections: builder.query<{id: string, roadCode: string, roadName: string, roadSectionNumber: number}[], void>({
            query: () => "road-network/road-sections"
        }),
        roadTypes: builder.query<{id: string, dateCreated: string, name: string, handle: string}[], void>({
            query: () => 'road-network/road-types'
        })
    })
});

export const { useFiscalYearsQuery, useLazyRegionsQuery , useLazyLocationsQuery} = apiFilterMenu;