import axios from "axios"

const baseUrl = "https://jsonplaceholder.typicode.com/"

const createInstance = (url: string) => {
  return axios.create({
    baseURL: url,
    headers: {
      "Content-Type": "application/json",
    },
  })
}

export default createInstance(baseUrl)
