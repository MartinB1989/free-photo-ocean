import axios from "axios";

const photosService = () => {
  const url = process.env.REACT_APP_API_URL
  const getPhotoById = async (photoId) => {
    const { data } = await axios.get(`${url}/photos/${photoId}`)
    return data
  }

  const getRandomPhoto = async () => {
    const { data } = await axios.get(`${url}/photos/random`)
    return data
  }
  return {
    getPhotoById,
    getRandomPhoto
  }
}

export default photosService