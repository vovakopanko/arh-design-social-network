import * as Axios from "axios";

// [General example for API requests]

export const instance = Axios.create({
  withCredentials: true,
  headers: {
    "API-KEY": "247ce20c-2ebe-44cd-a251-5ad89231d744",
  },
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
});