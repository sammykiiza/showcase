import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RoadSectionsStateInterface } from "../../../../Core/Types/Models/Roads/ManageRoads/RoadSectionsStateInterface";
import { Road } from "../../../../Core/Types/Models/Roads/Road";

const initialState: RoadSectionsStateInterface = {
    openDialog: false,
    openMap: false,
    road: undefined
}

export const roadSectionsSlice = createSlice({
    name: 'roadSections',
    initialState,
    reducers: {
        setOpenDialog: (state: RoadSectionsStateInterface) => {
            state.openDialog? state.openDialog = false : state.openDialog = true;
        },
        setOpenMap: (state: RoadSectionsStateInterface) => {
            state.openMap? state.openMap = false : state.openMap = true;
        },
        setRoad: (state: RoadSectionsStateInterface, action: PayloadAction<Road>) => {
            state.road = action.payload;
        },
    }
});

export const { setOpenDialog, setOpenMap, setRoad } = roadSectionsSlice.actions;
export default roadSectionsSlice.reducer;
