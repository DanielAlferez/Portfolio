import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeSec: 'Home'
};

const menuSlice = createSlice({
    name: "menu",
    initialState,
    reducers: {
      setSec: (state, action) => {
        state.activeSec = action.payload;
      }
    }
  })


export const { setSec } = menuSlice.actions;

export default menuSlice.reducer;
