import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAthlete } from "../services/athleteServices";

const initialState = {
  data: {},
  status: "idle",
  errorMsg: "",
  loader: false,
};

const athleteSlice = createSlice({
  name: "activities",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAsyncAthlete.pending, (state) => {
        state.status = "pending";
        state.loader = true;
      })
      .addCase(getAsyncAthlete.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "success";
        state.loader = false;
      })
      .addCase(getAsyncAthlete.rejected, (state, action) => {
        state.errorMsg = action.payload;
        state.status = "error";
        state.loader = false;
      });
  },
});

export const getAsyncAthlete = createAsyncThunk(
  "athlete/getAthleteData",
  async () => {
    try {
      const response = await getAthlete();
      return response.data;
    } catch (err) {
      throw new Error(err);
    }
  }
);

export default athleteSlice.reducer;
