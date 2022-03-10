import { getApiBase, refreshToken } from "./baseHTTP";

const getAllAthletesApiUrl = process.env.REACT_APP_GET_ATHLETE;

export const getAthlete = async () => {
  const response = await refreshToken();
  const token = response?.data.access_token;
  return getApiBase(token, getAllAthletesApiUrl);
};
