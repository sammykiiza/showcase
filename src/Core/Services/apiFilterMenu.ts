import { createApi, fetchBaseQuery, FetchBaseQueryError } from '@reduxjs/toolkit/query/react';
import { apiURL } from '../Helpers';
import { FunctionalAssessmentsInterface } from '../Types/Models/Roads/Condition/FunctionalAssessmentsInterface';
import { InventoryDataInterface } from '../Types/Models/RoadInventory/InventoryDataInterface';
import { MaterialInformationInterface } from '../Types/Models/Roads/Condition/MaterialInformationInterface';
import { RoadSectionsInterface } from '../Types/Models/Roads/ManageRoads/RoadSectionsInterface';
import { RoadAndSectionInterface } from '../Types/Models/RoadInventory/RoadAndSectionDataInterface';

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

                let sectionsId: string[] = [];

                data.map( (assessment) => {
                    sectionsId.push(assessment.roadSectionId);
                });

                let roadSections: RoadSectionsInterface[] = [];

                for (let index = 0; index < sectionsId.length; index++) {
                    const sections = await fetchWithBQ(`road-network/road-sections?id[]=${sectionsId[index]}`);
                    const sectionsData = sections.data as RoadSectionsInterface[];
                    for (let i = 0; i < sectionsData.length; i++) {
                        roadSections.push(sectionsData[i]);
                    }
                }

                for (let index = 0; index < data.length; index++) {
                    data[index].roadSection = roadSections[index].roadName 
                }
                
                return data
                ?{ data: data }
                :{ error: functionalAssessmentsData.error as FetchBaseQueryError }
            },
            
        }),
        materialInformation: builder.query<any, void>({
            async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
                const fiscalYearId = localStorage.getItem('fiscalYear');
                const materialInformationData = await fetchWithBQ(`road-condition/material-information?_end=10&_order=ASC&_sort=id&_start=0&fiscalYear=${fiscalYearId}`);
                const data = materialInformationData.data as MaterialInformationInterface[];
                let sectionsId: string[] = [];

                data.map( (material) => {
                    sectionsId.push(material.roadSectionId);
                });

                let roadSections: RoadSectionsInterface[] = [];

                for (let index = 0; index < sectionsId.length; index++) {
                    const sections = await fetchWithBQ(`road-network/road-sections?id[]=${sectionsId[index]}`);
                    const sectionsData = sections.data as RoadSectionsInterface[];
                    for (let i = 0; i < sectionsData.length; i++) {
                        roadSections.push(sectionsData[i]);
                    }
                }
                for (let index = 0; index < data.length; index++) {
                    data[index].roadSection = roadSections[index].roadName 
                }
                
                return data
                ?{ data: data }
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
        roadTypes: builder.query<{id: string, dateCreated: string, name: string, handle: string}[], void>({
            query: () => 'road-network/road-types'
        }),
        inventoryData: builder.query<any, void>({
            async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
                const fiscalYearId = localStorage.getItem('fiscalYear');
                const inventoryData = await fetchWithBQ(`road-inventory/inventory-data?_end=10&_order=ASC&_sort=id&_start=0&fiscalYear=${fiscalYearId}`);
                const data = inventoryData.data as InventoryDataInterface[];
                let sectionsId: string[] = [];

                data.map( (inventory) => {
                    sectionsId.push(inventory.roadSectionId);
                });

                let roadSections: RoadSectionsInterface[] = [];

                for (let index = 0; index < sectionsId.length; index++) {
                    const sections = await fetchWithBQ(`road-network/road-sections?id[]=${sectionsId[index]}`);
                    const sectionsData = sections.data as RoadSectionsInterface[];
                    roadSections.push(sectionsData[0]);
                }

                for (let index = 0; index < data.length; index++) {
                    data[index].roadSection = roadSections[index].roadName 
                }

                return data
                ?{ data: data }
                :{ error: inventoryData.error as FetchBaseQueryError }
            },
        }),
        roadAndSectionData: builder.query<any, void>({
            async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
                const fiscalYearId = localStorage.getItem('fiscalYear');
                const roadAndSectionData = await fetchWithBQ(`road-inventory/road-section-details?_end=10&_order=ASC&_sort=id&_start=0&fiscalYear=${fiscalYearId}`);
                const data = roadAndSectionData.data as RoadAndSectionInterface[];
                let sectionsId: string[] = [];

                data.map( (data) => {
                    sectionsId.push(data.roadSectionId);
                });

                let roadSections: RoadSectionsInterface[] = [];

                for (let index = 0; index < sectionsId.length; index++) {
                    const sections = await fetchWithBQ(`road-network/road-sections?id[]=${sectionsId[index]}`);
                    const sectionsData = sections.data as RoadSectionsInterface[];
                    roadSections.push(sectionsData[0]);
                }

                for (let index = 0; index < data.length; index++) {
                    data[index].roadSection = roadSections[index].roadName 
                }

                return data
                ?{ data: data }
                :{ error: roadAndSectionData.error as FetchBaseQueryError }
            },
        })
    }),
});

export const { useFiscalYearsQuery, useLazyRegionsQuery , useLazyLocationsQuery} = apiFilterMenu;