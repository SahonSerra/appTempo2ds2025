import axios from "axios";

const api = axios.create({
  baseURL: 'https://api.hgbrasil.com/',
});

export default api;