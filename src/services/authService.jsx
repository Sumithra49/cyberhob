// src/services/authService.jsx
import axios from "axios";

const API_URL = "https://reqres.in/api/login"; // Mock Login API

export const login = async (email, password) => {
  try {
    const response = await axios.post(API_URL, { email, password });
    localStorage.setItem("token", response.data.token);
    localStorage.setItem("user", JSON.stringify({ name: "John Doe", email })); // Mock user
    return response.data;
  } catch (error) {
    throw new Error("Invalid credentials");
  }
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};

export const getUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export const isAuthenticated = () => !!localStorage.getItem("token");
