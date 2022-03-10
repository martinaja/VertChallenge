import axios from "axios";

const baseUrl = process.env.REACT_APP_BASE_URL;

export const getApiBase = (token, url, id) => {
  const headers = {
    Authorization: `Bearer ${token}`,
    "Access-Control-Allow-Origin": "*",
  };
  const useUrl = id ? `${url}/${id}` : url;
  return axios.get(baseUrl + useUrl, { headers });
};

export const refreshToken = () => {
  return axios.post("https://www.strava.com/oauth/token", {
    client_id: 79258,
    client_secret: "3b281425359041f4bb1ec9537f30480f7f2090e7",
    refresh_token: "430d22cddb3b0455bedc8a8691f89a849f41dbd4",
    grant_type: "refresh_token",
  });
};
