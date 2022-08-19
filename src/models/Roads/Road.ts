import { GeoJson } from "../GeoJson/GeoJson";

export interface Road {
    "id": string,
    "dateCreated": string,
    "roadCode": string,
    "roadName": string,
    "roadTypeId": string,
    "roadSectionNumber": number,
    "fromChainage": string,
    "toChainage": string,
    "locationId": string,
    "conditionIndex": number,
    "geoJson": GeoJson,
}