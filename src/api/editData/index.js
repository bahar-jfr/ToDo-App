import axios from "axios";

export async function editData(id,updatedTask) {
  const jsonServerURL = `http://localhost:3000/task/${id}`;
  const data = await axios.put(`${jsonServerURL}`,updatedTask);
  return data;
}
