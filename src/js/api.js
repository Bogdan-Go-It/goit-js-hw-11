import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '39075375-5b34e06531f7ac4e6ab0771c6';

export const fetchImgs = async (searchQuery, PER_PAGE = 40, page = 1) => {
  const { data } = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      q: searchQuery,
      page,
      per_page: PER_PAGE,
    },
  });
  // console.log('Response:', response); //
  const { hits, totalHits } = data;
  console.log(data);
  return { hits, totalHits };
};
