import axios from 'axios'

export const API = axios.create({
  baseURL: process.env.REACT_APP_BASE_LOCAL_URL
})
