import axios from 'axios';

// const BASE_URL = 'http://localhost:3000/product/';

export async function getProduct(endpoint) {
  const { data } = await axios.post(`http://localhost:3000/task/${endpoint}`);
  return data;
}
axios.post