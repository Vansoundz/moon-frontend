import Axios from "axios";

export const api = {
  getUser() {
    return Axios.get(`/api/users`);
  },
  login(username: string, password: string) {
    return Axios.post(
      "/api/users/login",
      { username, password },
      { headers: { "Content-Type": "application/json" } }
    );
  },
};
