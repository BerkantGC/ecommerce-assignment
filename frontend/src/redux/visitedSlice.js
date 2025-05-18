import { createSlice } from '@reduxjs/toolkit';

const visitedSlice = createSlice({
  name: 'visited',
  initialState: [],
  reducers: {
    addVisitedProduct: (state, action) => {
      const exists = state.find(p => p.id === action.payload.id);
      if (!exists) {
        state.push(action.payload);
      }
    },
  },
});

export const { addVisitedProduct } = visitedSlice.actions;
export default visitedSlice.reducer;
