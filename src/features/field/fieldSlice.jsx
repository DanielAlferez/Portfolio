import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  field: "Backend",
};

const fieldSlice = createSlice({
    name: "field",
    initialState,
    reducers: {
        selectField: (state, action) => {
            state.field = action.payload
        }
    }   
  })
  
export const { selectField } = fieldSlice.actions;

export default fieldSlice.reducer;
