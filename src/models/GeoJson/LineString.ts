import { Position } from "./Position";

export interface LineString {
    type: "LineString",
    coordinates: Position[],
}