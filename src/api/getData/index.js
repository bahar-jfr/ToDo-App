import axios from "axios";

export async function getData(page = 1, per = 999 , searchItem = "") {
  const jsonServerURL = `http://localhost:3000/task?_page=${page}&_limit=${per}&taskName_like=${searchItem}`;
  const data = await axios.get(`${jsonServerURL}`);

  return {
    data: data,
    totalPage: Math.ceil(data.headers["x-total-count"] / per),
  };
}
