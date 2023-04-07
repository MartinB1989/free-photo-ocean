import axios from "axios";

const searchService = () => {
  const url = process.env.REACT_APP_API_URL
  const searchPhotos = async ({ keyWord, page = 1, photosPerPage = 20 }) => {
    const params = {
      query: keyWord,
      per_page: photosPerPage,
      page,
    }
    const { data: { results, total, total_pages }} = await axios.get(`${url}/search/photos`, {
      params
    })
    return {
      results,
      total,
      total_pages
    }
  }

  return {
    searchPhotos
  }
}

export default searchService