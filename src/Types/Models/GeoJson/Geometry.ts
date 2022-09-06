import { LineString } from "./LineString";
import { MultiLineString } from "./MultiLineString";
import { MultiPoint } from "./MultiPoint";
import { Point } from "./Point";
import { Polygon } from "./Polygon";

export type Geometry = Point | MultiPoint | LineString | MultiLineString | Polygon;