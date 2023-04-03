import axios from "axios";

const searchService = () => {
  const url = process.env.REACT_APP_API_URL
  const searchPhotos = async ({ keyWord, page = 1, photosPerPage = 20 }) => {
    const params = {
      query: keyWord,
      per_page: photosPerPage,
      page,
    }
    const { data } = await axios.get(`${url}/search/photos`, {
      params
    })
    return data
  }

  return {
    searchPhotos
  }
}

export default searchService