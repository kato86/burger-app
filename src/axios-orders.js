import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-3f3e0.firebaseio.com/"
});

export default instance;
