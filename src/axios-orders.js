import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-a3a97.firebaseio.com/"
});

export default instance;
