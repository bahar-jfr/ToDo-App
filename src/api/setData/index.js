import axios from "axios";

export function setData(data) {
  const jsonServerURL = "http://localhost:3000/task";
  axios.post(jsonServerURL, data)
}
