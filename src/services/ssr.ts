import axios from "axios";
import { parseCookies } from "nookies";

export function getAPIClient(ctx?: any) {
  const { 'nextauth-token': token } = parseCookies(ctx);

  const api = axios.create({
    baseURL: 'https://test-flimed-backend.herokuapp.com/',
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`
  }
  
  return api;
}