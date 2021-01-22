import Axios from "axios";

const Api = Axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/", // TODO: Change to production destination
  responseType: "json",
});

export function fetchTodos() {
  return new Promise((resolve, reject) => {
    Api.get(`/todos`)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error.data);
      });
  });
}
