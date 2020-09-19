import Axios from "axios";
import User from "../models/UserModel";

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

const createUser = async ({ user }: { user: User }) => {
  let resp = await (
    await Axios.post("/api/users/register", {
      ...user,
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

const update = async ({ user, profile }: { user: User; profile?: File }) => {
  if (!user._id) return { errors: [{ msg: "Unauthorized" }] };
  const form = new FormData();
  if (profile) {
    form.append("image", profile);
  }
  if (user.name) form.append("name", user.name);
  let resp = await (await Axios.patch(`/api/users`, form)).data;

  return resp;
};

export { login, createUser, getUser, logout, getUserById, update };
