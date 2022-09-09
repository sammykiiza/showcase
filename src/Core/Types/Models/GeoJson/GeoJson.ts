import { GeoJsonProperties } from "./GeoJsonProperties"
import { GeoJsonTypes } from "./GeoJsonTypes"

export interface GeoJson {
    type: GeoJsonTypes,
    properties: GeoJsonProperties,
    geometry: {
        type: GeoJsonTypes,
        coordinates: [][][] | number[][]
    }
}