import { Feature } from "./Feature";
import { Geometry } from "./Geometry";

export interface FeatureCollection<G extends Geometry | null = Geometry> {
    type: "FeatureCollection",
    features: Array<Feature<G>>,
}