import { GeoJsonProperties } from "./GeoJsonProperties";
import { Geometry } from "./Geometry";

export interface Feature<G extends Geometry | null = Geometry> {
    type: "Feature",
    geometry: G,
    id?: string | number | undefined,
    properties: GeoJsonProperties
}