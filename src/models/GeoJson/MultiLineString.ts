import { Position } from "./Position";

export interface MultiLineString {
    type: "MultiLineString",
    coordinates: Position[][],
}