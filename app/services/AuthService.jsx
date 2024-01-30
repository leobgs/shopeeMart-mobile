import axios from "axios";

const api = axios.create({
  baseURL: "http://10.10.100.183:8089/auth",
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
  return api.post("/register", values);
}

export const login = (loginData) => {
  return api.post("login", loginData);
}

export const getUserData = () => {
  return api.get("/customer/");
}

export const updateUserData = () => {
  return api.put("/customer/");
}
export default api;
