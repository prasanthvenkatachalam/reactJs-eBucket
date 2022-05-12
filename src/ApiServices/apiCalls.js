import axios from "axios";

export const LoginService = (values) => {
  return axios.post("auth/login", values);
};
