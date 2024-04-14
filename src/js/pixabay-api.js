import axios from 'axios';

export async function getImage(inputValue, page) {
  const BASE_URL = 'https://pixabay.com';
  const END_POINT = '/api/';
  const params = new URLSearchParams({
    key: '42962590-b9bb006e5b1e7f6cfce132ccb',
    q: inputValue,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 15,
    page,
  });
  const url = `${BASE_URL}${END_POINT}?${params}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching images');
  }
}
