import Axios, { AxiosInstance } from 'axios'

const instance: AxiosInstance = Axios.create()

instance.defaults.headers.common['Content-Type'] = 'application/json'

instance.interceptors.request.use((req) => {
  const token: string | null = localStorage.getItem('token')
  if (token) req.headers.common['x-auth-token'] = token
  return req
})

export const authInstance: AxiosInstance = Axios.create()

authInstance.defaults.headers.common = { Authorization: localStorage.getItem('jwtToken') }

export default instance
