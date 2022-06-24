import axios from 'axios'

export const API = axios.create({
  baseURL: process.env.REACT_APP_BASE_LOCAL_URL
})

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
  }
  return req
})
