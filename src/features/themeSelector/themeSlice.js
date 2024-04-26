import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name:'theme',
    initialState:{theme:'White'},
    reducers:{
        ThemeSelect: state => {
            state.theme = state.theme === "White" ? "Dark" : "White"; // Modify the state directly
        },
    }
})

export const {ThemeSelect} = themeSlice.actions;
export default themeSlice.reducer;
