import axios from "axios";

const api = axios.create({
  baseURL: "http://10.10.100.192:8080/api/auth/",
  headers: {
    "Content-Type": "application/json",
  },
});

// api.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

export const register = () => {
    return api.post("/register");
}

export const login = (loginData) => {
    return api.post("", loginData);
  }

export default api;
