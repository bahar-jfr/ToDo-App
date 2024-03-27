import axios from "axios";

export function setItems(data) {
  const jsonServerURL = "http://localhost:3000/task";

  axios
    .post(jsonServerURL, data)
    .then((response) => {
      console.log("Data posted successfully: ", response.data);
    })
    .catch((error) => {
      console.error("Error posting data: ", error);
    });
}
