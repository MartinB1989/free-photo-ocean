import axios from "axios";

const photosService = () => {
  const url = process.env.REACT_APP_API_URL
  const getPhotoById = async (photoId) => {
    const { data } = await axios.get(`${url}/photos/${photoId}`)
    return data
  }

  return {
    getPhotoById
  }
}

export default photosService