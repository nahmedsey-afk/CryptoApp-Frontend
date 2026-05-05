const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

// Helper for making API requests with credentials (cookies)
async function request(endpoint, options = {}) {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include", // Send cookies for JWT
    ...options,
  };

  // Add Bearer token from localStorage as fallback
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(`${API_BASE}${endpoint}`, config);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong");
  }

  return data;
}

// ========================
// Auth API
// ========================

export async function registerUser({ name, email, password }) {
  const data = await request("/register", {
    method: "POST",
    body: JSON.stringify({ name, email, password }),
  });
  if (data.data?.token) {
    localStorage.setItem("token", data.data.token);
  }
  return data;
}

export async function loginUser({ email, password }) {
  const data = await request("/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
  if (data.data?.token) {
    localStorage.setItem("token", data.data.token);
  }
  return data;
}

export async function getProfile() {
  return request("/profile");
}

export async function logoutUser() {
  localStorage.removeItem("token");
  return request("/logout", { method: "POST" });
}

// ========================
// Crypto API
// ========================

export async function getAllCryptos() {
  return request("/crypto");
}

export async function getTopGainers() {
  return request("/crypto/gainers");
}

export async function getNewListings() {
  return request("/crypto/new");
}

export async function addCrypto({ name, symbol, price, image, change24h }) {
  return request("/crypto", {
    method: "POST",
    body: JSON.stringify({ name, symbol, price, image, change24h }),
  });
}
