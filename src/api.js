import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const allget = async () => {
  try {
    const res = await api.get("/home");
    return res.data;
  } catch (error) {
    console.error("err:", error);
    throw error;
  }
};

export const deleteEvent = async (id) => {
  try {
    const res = await api.delete(`/admin/event/${id}`);
    return res.data;
  } catch (error) {
    console.error("Error deleting event:", error);
    throw error;
  }
};

export const deleteclub = async (id) => {
  try {
    const res = await api.delete(`/admin/club/${id}`);
    return res.data;
  } catch (error) {
    console.error("Error deleting club:", error);
    throw error;
  }
};

export const deletepartner = async (id) => {
  try {
    const res = await api.delete(`/admin/partenaire/${id}`);
    return res.data;
  } catch (error) {
    console.error("Error deleting partenaire:", error);
    throw error;
  }
};


export const setCookie = (name, value, days) => {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
};


export const getCookie = (name) => {
  const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
  return match ? decodeURIComponent(match[2]) : null;
};

export const deleteCookie = (name) => {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
};