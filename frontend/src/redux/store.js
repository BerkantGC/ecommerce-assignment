import { configureStore } from '@reduxjs/toolkit';
import visitedReducer from './visitedSlice';

const store = configureStore({
  reducer: {
    visited: visitedReducer
  }
});

export default store;
