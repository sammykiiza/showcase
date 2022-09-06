import { Position } from "./Position";

export interface MultiPoint {
    type: "MultiPoint",
    coordinates: Position[]
}