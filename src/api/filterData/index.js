import axios from "axios";

export async function filterData(key, value) {
  const jsonServerURL = `http://localhost:3000/task?${key}=${value}`;
  const data = await axios.get(`${jsonServerURL}`);
  return data;
}
