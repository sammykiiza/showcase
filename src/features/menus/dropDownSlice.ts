import { createSlice } from "@reduxjs/toolkit"

export interface DropDownMenuState{
    open1 : boolean,
    open2: boolean,
    open3: boolean,
    open4: boolean,
    open5: boolean,
    open6: boolean,
    open7: boolean
}

const initialState: DropDownMenuState = {
    open1: false,
    open2: false,
    open3: false,
    open4: false,
    open5: false,
    open6: false,
    open7: false
}

export const dropDownSlice = createSlice({
    name: 'dropDown',
    initialState,
    reducers: {
        toggle1: (state: DropDownMenuState) => {
            state.open1? state.open1 = false : state.open1 = true;
        },

        toggle2: (state: DropDownMenuState) => {
            state.open2? state.open2 = false : state.open2 = true;
        },
        toggle3: (state: DropDownMenuState) => {
            state.open3? state.open3 = false : state.open3 = true;
        },
        toggle4: (state: DropDownMenuState) => {
            state.open4? state.open4 = false : state.open4 = true;
        },
        toggle5: (state: DropDownMenuState) => {
            state.open5? state.open5 = false : state.open5 = true;
        },
        toggle6: (state: DropDownMenuState) => {
            state.open6? state.open6 = false : state.open6 = true;
        },
        toggle7: (state: DropDownMenuState) => {
            state.open7? state.open7 = false : state.open7 = true;
        }
    } 
});

export const {toggle1, toggle2, toggle3, toggle4, toggle5, toggle6, toggle7} = dropDownSlice.actions;

export default dropDownSlice.reducer;