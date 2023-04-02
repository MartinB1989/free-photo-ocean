import axios from "axios";

const AxiosInterceptor = () => {
  axios.interceptors.request.use(config => {
    config.headers.Authorization = `Client-ID ${process.env.REACT_APP_CLIENT_ID}`
    return config
  })
}

export default AxiosInterceptor