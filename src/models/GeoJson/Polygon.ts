import { Position } from "./Position";

export interface Polygon {
    type: "Polygon",
    coordinates: Position[][],
}