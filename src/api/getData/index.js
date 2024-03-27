import axios from "axios";

export async function getData(page = 1, per = 5) {
  const jsonServerURL = `http://localhost:3000/task?_page=${page}&_per_page=${per}`;
  const data = await axios.get(`${jsonServerURL}`);
  return data;
}
