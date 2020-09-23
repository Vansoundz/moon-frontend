import Axios from "axios";
import User from "../models/UserModel";
import dotenv from "dotenv";
import { setHead } from "./util";
import cookies from "js-cookie";

dotenv.config();

const backendUrl = process.env.REACT_APP_PROD_BACKEND;
// const backendUrl = process.env.REACT_APP_DEV_BACKEND;

const login = async ({
  username,
  password,
}: {
  username: string;
  password: string;
}) => {
  let resp = await Axios.post(`${backendUrl}/api/users/login`, {
    username,
    password,
  });

  return resp.data;
};

const createUser = async ({ user }: { user: User }) => {
  try {
    let resp = (
      await Axios.post(`${backendUrl}/api/users/register`, {
        ...user,
      })
    ).data;

    return resp;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const getUser = async () => {
  try {
    let resp = (await Axios.get(`${backendUrl}/api/users`, setHead())).data;

    return resp;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const getUserById = async (key: string, id: string) => {
  try {
    const resp = (await Axios.get(`${backendUrl}/api/users/${id}`)).data;
    return resp;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const logout = async () => {
  let resp = (await Axios.post(`${backendUrl}/api/users/logout`)).data;
  cookies.remove("auth");
  return resp;
};

const update = async ({ user, profile }: { user: User; profile?: File }) => {
  try {
    if (!user._id) return { errors: [{ msg: "Unauthorized" }] };
    const form = new FormData();
    if (profile) {
      form.append("image", profile);
    }
    if (user.name) form.append("name", user.name);

    // @ts-ignore
    if (user.socialMedia) form.append("socialMedia", user.socialMedia);
    let resp = (
      await Axios.patch(`${backendUrl}/api/users`, form, setHead(true))
    ).data;

    return resp;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export { login, createUser, getUser, logout, getUserById, update };
