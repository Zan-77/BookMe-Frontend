import { createSlice } from "@reduxjs/toolkit";


export const searchSlice = createSlice({
    name: "Search",
    initialState: {
        searchValue: "",
        searchResult: []
    },
    reducers: {
        setStoreSearchValue: (state, action) => {
            state.searchValue = action.payload;
        },
        setStoreSearchResult: (state, action) => {
            state.searchResult = action.payload
        }
    }
})

export const { setStoreSearchValue, setStoreSearchResult } = searchSlice.actions

export default searchSlice.reducer