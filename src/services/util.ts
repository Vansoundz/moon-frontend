import cookies from "js-cookie";

export const setHead = (multipart: boolean = false) => {
  const t = cookies.get(`auth`);
  const headers = {
    "Content-Type": multipart ? "multipart/form-data" : "application/json",
    "moon-auth": t,
  };

  return { headers };
};
