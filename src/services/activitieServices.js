import { getApiBase, refreshToken } from "./baseHTTP";

const getAllActivitiesApiUrl = process.env.REACT_APP_GET_ATHLETE_ACTIVITIES;
const getActivitieApiUrl = process.env.REACT_APP_GET_ATHLETE_ACTIVITY;

export const getActivities = async () => {
  const response = await refreshToken();
  const token = response?.data.access_token;
  return getApiBase(token, getAllActivitiesApiUrl);
};

export const getActivitie = async (id) => {
  const response = await refreshToken();
  const token = response?.data.access_token;
  return getApiBase(token, getActivitieApiUrl, id);
};
