import axios from "axios";

const fetchApi = (url: string) => {
  return axios.get(url);
};

export default fetchApi;
