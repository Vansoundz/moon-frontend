import Axios from "axios";

const login = async ({
  username,
  password,
}: {
  username: string;
  password: string;
}) => {
  let resp = await Axios.post(
    "/api/users/login",
    { username, password },
    { headers: { "Content-Type": "application/json" } }
  );

  return resp.data;
};

const createUser = async ({
  fullname,
  email,
  password,
  username,
}: {
  fullname: string;
  email: string;
  username: string;
  password: string;
}) => {
  let resp = await (
    await Axios.post("/api/users/register", {
      email,
      password,
      name: fullname,
      username,
    })
  ).data;

  return resp;
};

const getUser = async () => {
  let resp = await (await Axios.get("/api/users")).data;
  return resp;
};

const getUserById = async (key: string, id: string) => {
  const resp = await (await Axios.get(`/api/users/${id}`)).data;
  return resp;
};

const logout = async () => {
  let resp = await (await Axios.post("/api/users/logout")).data;
  return resp;
};

export { login, createUser, getUser, logout, getUserById };
