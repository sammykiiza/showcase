import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RoadSectionsStateInterface } from "../../../../Core/Types/Models/Roads/ManageRoads/RoadSectionsStateInterface";
import { Road } from "../../../../Core/Types/Models/Roads/Road";

const initialState: RoadSectionsStateInterface = {
    openDialog: false,
    road: undefined
}

export const roadSectionsSlice = createSlice({
    name: 'roadSections',
    initialState,
    reducers: {
        setOpenDialog: (state: RoadSectionsStateInterface) => {
            state.openDialog? state.openDialog = false : state.openDialog = true;
        },
        setRoad: (state: RoadSectionsStateInterface, action: PayloadAction<Road>) => {
            state.road = action.payload;
        },
    }
});

export const { setOpenDialog, setRoad } = roadSectionsSlice.actions;
export default roadSectionsSlice.reducer;
