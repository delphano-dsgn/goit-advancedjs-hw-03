import axios from 'axios';

const API_KEY = '55519599-d6063fdf91732cac9901be169'; 
const BASE_URL = 'https://pixabay.com/api/';
 
export function getImagesByQuery(query) {
  return axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    }
  }).then(response => {
    return response.data;
  });
}