import axios from "axios";

export async function getProducts() {
  return await axios
    .get(`http://localhost:8080/product`)
    .then((resp) => resp.data);
}

