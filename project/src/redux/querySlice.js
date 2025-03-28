import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  history: [],
};

const querySlice = createSlice({
  name: "queries",
  initialState,
  reducers: {
    addQuery: (state, action) => {
      state.history.unshift(action.payload);
    },
  },
});

export const { addQuery } = querySlice.actions;
export default querySlice.reducer;