import axios from "axios";

export async function deleteData(id) {
  const jsonServerURL = `http://localhost:3000/task/${id}`;
  const data = await axios.delete(`${jsonServerURL}`);
  return data;
}
