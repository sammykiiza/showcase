import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilterMenuState } from "../../../Types/MenuProps/FilterMenu/filterMenuState";

const initialState: FilterMenuState = {
    fiscalYear: '',
    region: '',
    council: '',
    empty: true
}

export const filterMenuSlice = createSlice({
    name: 'filterMenu',
    initialState,
    reducers: {
        setFiscalYear: (state: FilterMenuState, action: PayloadAction<string>) => {
            state.fiscalYear = action.payload;
        },
        setRegion: (state: FilterMenuState, action: PayloadAction<string>) => {
            state.region = action.payload;
        },
        setCouncil: (state: FilterMenuState, action: PayloadAction<string>) => {
            state.council = action.payload;
        },
        setEmpty: (state: FilterMenuState) => {
            state.empty? state.empty = false : state.empty = true;
        }
    }
});

export const { setFiscalYear, setRegion, setCouncil, setEmpty } = filterMenuSlice.actions;
export default filterMenuSlice.reducer;