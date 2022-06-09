import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface filterMenuState{
    fiscalYear: string,
    region: string,
    council: string,
    empty: boolean
}

const initialState: filterMenuState = {
    fiscalYear: '',
    region: '',
    council: '',
    empty: true
}

export const filterMenuSlice = createSlice({
    name: 'filterMenu',
    initialState,
    reducers: {
        setFiscalYear: (state: filterMenuState, action: PayloadAction<string>) => {
            state.fiscalYear = action.payload;
        },
        setRegion: (state: filterMenuState, action: PayloadAction<string>) => {
            state.region = action.payload;
        },
        setCouncil: (state: filterMenuState, action: PayloadAction<string>) => {
            state.council = action.payload;
        },
        setEmpty: (state: filterMenuState) => {
            state.empty? state.empty = false : state.empty = true;
        }
    }
});

export const { setFiscalYear, setRegion, setCouncil, setEmpty } = filterMenuSlice.actions;
export default filterMenuSlice.reducer;