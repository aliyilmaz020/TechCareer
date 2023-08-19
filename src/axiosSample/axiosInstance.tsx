/* eslint-disable prettier/prettier */
import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://northwind.vercel.app',
  timeout: 1000,
});
