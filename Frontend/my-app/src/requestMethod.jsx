import axios from "axios";

const BASE_URL = "http://192.168.0.94:5000/api";

const myStorage = window.localStorage;
const currentUser = JSON.parse(myStorage.getItem("admin"));

const TOKEN = currentUser ? currentUser.accessToken : null;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
