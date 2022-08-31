import axios from "axios";

const AxiosClient = () => {
  const instance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
  });

  return instance;
};

export const $axios = AxiosClient();
