import Axios from "axios";
import dotenv from "dotenv";
import { setHead } from "./util";
dotenv.config();

// const backendUrl = process.env.REACT_APP_DEV_BACKEND;
const backendUrl = process.env.REACT_APP_PROD_BACKEND;

const createComment = async ({ id, text }: { id: string; text: string }) => {
  try {
    let resp = await (
      await Axios.post(`${backendUrl}/api/comments/${id}`, { text }, setHead())
    ).data;
    return resp;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const deleteComment = async ({
  comment_id,
  property_id,
}: {
  property_id: string;
  comment_id: string;
}) => {
  try {
    let resp = (
      await Axios.delete(
        `${backendUrl}/api/comments/${property_id}/${comment_id}`,
        setHead()
      )
    ).data;
    return resp;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export { createComment, deleteComment };
