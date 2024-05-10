// store.js
import { configureStore, createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    roles: [],
    minBasePay: 0,
    setBySearch: "",
    setByExperience: 0,
    location: [],
  },
  reducers: {
    setRoles: (state, action) => {
      state.roles = action.payload;
    },
    setMinBasePay: (state, action) => {
      state.minBasePay = action.payload;
    },

    setByExperience: (state, action) => {
      state.Experience = action.payload;
    },

    setByLocation: (state, action) => {
      state.location = action.payload;
    },

    setBySearch: (state, action) => {
      state.searchCompany = action.payload;
    },
  },
});

export const {
  setRoles,
  setMinBasePay,
  setByExperience,
  setBySearch,
  setByLocation,
} = filtersSlice.actions;

const store = configureStore({
  reducer: {
    filters: filtersSlice.reducer,
  },
});

export default store;
