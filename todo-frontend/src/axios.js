import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-todo-api-git-master-ikiran-dev.vercel.app/",
});

export default instance;
