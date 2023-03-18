import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "fc9cf14ce45b4c1884ba1553ea8d89c6",
  },
});
