import Axios from "axios";

// [General example for API requests]

export const instance = Axios.create({
  withCredentials: true,
  headers: {
    "API-KEY": "8256ff37-d3d1-441d-908a-445078d78397",
  },
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
});