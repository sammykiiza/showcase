import { createApi, fetchBaseQuery, FetchBaseQueryError } from '@reduxjs/toolkit/query/react';
import { apiURL } from '../Helpers';
import { FunctionalAssessmentsInterface } from '../Types/Models/Roads/Condition/FunctionalAssessmentsInterface';
import { InventoryDataInterface } from '../Types/Models/Roads/Condition/InventoryDataInterface';
import { MaterialInformationInterface } from '../Types/Models/Roads/Condition/MaterialInformationInterface';
import { RoadSectionsInterface } from '../Types/Models/Roads/ManageRoads/RoadSectionsInterface';

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

            },
        }),

        locations: builder.query<{ id: string, name: string }[], void>({
            query: () => {
                const regionId = localStorage.getItem('region');
                return {
                    url: `road-network/locations?_end=25&_order=DESC&_sort=id&_start=0&regionId=${regionId}`
                }
            }
        }),
        functionalAssessments: builder.query<any, void>({
            async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
                const fiscalYearId = localStorage.getItem('fiscalYear');
                const functionalAssessmentsData = await fetchWithBQ(`road-condition/functional-assessments?_end=10&_order=ASC&_sort=id&_start=0&fiscalYear=${fiscalYearId}`);
                const data = functionalAssessmentsData.data as FunctionalAssessmentsInterface[];

                const roadSection = await fetchWithBQ(`road-network/road-sections`);
                const typedRoadSections = roadSection.data as RoadSectionsInterface[];

                const filtered = data.map( inventory => {
                    const roadSection = typedRoadSections?.find(section => inventory.roadSectionId === section.id);
                    return roadSection !== undefined? {...inventory, roadSection: roadSection.roadName} : { ...inventory, roadSection: '' };
                });

                return filtered
                ?{ data: filtered }
                :{ error: functionalAssessmentsData.error as FetchBaseQueryError }
            },
            
        }),
        materialInformation: builder.query<any, void>({
            async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
                const fiscalYearId = localStorage.getItem('fiscalYear');
                const materialInformationData = await fetchWithBQ(`road-condition/material-information?_end=10&_order=ASC&_sort=id&_start=0&fiscalYear=${fiscalYearId}`);
                const data = materialInformationData.data as MaterialInformationInterface[];

                const roadSection = await fetchWithBQ(`road-network/road-sections`);
                const typedRoadSections = roadSection.data as RoadSectionsInterface[];

                const filtered = data.map( inventory => {
                    const roadSection = typedRoadSections?.find(section => inventory.roadSectionId === section.id);
                    return roadSection !== undefined? {...inventory, roadSection: roadSection.roadName} : { ...inventory, roadSection: '' };
                });

                return filtered
                ?{ data: filtered }
                :{ error: materialInformationData.error as FetchBaseQueryError }
            },
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
            query: () => `road-network/road-sections`
        }),
        roadTypes: builder.query<{id: string, dateCreated: string, name: string, handle: string}[], void>({
            query: () => 'road-network/road-types'
        }),
        inventoryData: builder.query<any, void>({
            async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
                const fiscalYearId = localStorage.getItem('fiscalYear');
                const inventoryData = await fetchWithBQ(`road-inventory/inventory-data?_end=10&_order=ASC&_sort=id&_start=0&fiscalYear=${fiscalYearId}`);
                const data = inventoryData.data as InventoryDataInterface[];

                const roadSection = await fetchWithBQ(`road-network/road-sections`);
                const typedRoadSections = roadSection.data as RoadSectionsInterface[];

                const filtered = data.map( inventory => {
                    const roadSection = typedRoadSections?.find(section => inventory.roadSectionId === section.id);
                    return roadSection !== undefined? {...inventory, roadSection: roadSection.roadName} : { ...inventory, roadSection: '' };
                });

                return filtered
                ?{ data: filtered }
                :{ error: inventoryData.error as FetchBaseQueryError }
            },
        }),
    }),
});

export const { useFiscalYearsQuery, useLazyRegionsQuery , useLazyLocationsQuery} = apiFilterMenu;