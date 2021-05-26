import axios from "axios";
const API_KEY = "563492ad6f91700001000001b9573ceef55e40ef8bae8d98a49ad2ba";
const SEACH_PATH = 'search';
const SEACH_PARAM = 'query=';



const instance = axios.create({
  baseURL: "https://api.pexels.com/v1/",
  headers: {
    'Authorization': API_KEY,
    Accept: "application/json",
  },
  
});

export const PhotosAPI = {
  async getPhotos(query) {
    if(!query){
      query = 'nature'
    }
    const response = await instance.get(`${SEACH_PATH}?${SEACH_PARAM}${query}&per_page=12z&page=1`);
    
    return response;
  },
};
