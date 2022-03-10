import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getActivitie, getActivities } from "../services/activitieServices";

const initialState = {
  activities: [],
  activitie: [],
  status: "idle",
  errorMsg: "",
  loader: false,
};

const activitiesSlice = createSlice({
  name: "activities",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAsyncActivities.pending, (state) => {
        state.status = "pending";
        state.loader = true;
      })
      .addCase(getAsyncActivities.fulfilled, (state, action) => {
        state.activities = action.payload;
        state.status = "success";
        state.loader = false;
      })
      .addCase(getAsyncActivities.rejected, (state, action) => {
        state.errorMsg = action.payload;
        state.status = "error";
        state.loader = false;
      })

      .addCase(getAsyncActivitie.pending, (state) => {
        state.status = "pending";
        state.loader = true;
      })
      .addCase(getAsyncActivitie.fulfilled, (state, action) => {
        state.activitie = action.payload;
        state.status = "success";
        state.loader = false;
      })
      .addCase(getAsyncActivitie.rejected, (state, action) => {
        state.errorMsg = action.payload;
        state.status = "error";
        state.loader = false;
      });
  },
});

export const getAsyncActivities = createAsyncThunk(
  "activities/getActivitiesData",
  async () => {
    try {
      const response = await getActivities();
      return response.data;
    } catch (err) {
      throw new Error(err);
    }
  }
);

export const getAsyncActivitie = createAsyncThunk(
  "activities/getActivitieData",
  async (id) => {
    try {
      const response = await getActivitie(id);
      return response.data;
    } catch (err) {
      throw new Error(err);
    }
  }
);

export default activitiesSlice.reducer;
