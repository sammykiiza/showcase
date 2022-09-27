import { Road } from "../Road";

export interface RoadSectionsStateInterface {
    openDialog: boolean,
    openMap: boolean,
    road: Road | undefined,
}