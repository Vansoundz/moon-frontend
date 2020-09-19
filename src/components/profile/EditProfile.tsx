import { AnimatePresence, motion } from "framer-motion";
import React, { FormEvent, useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import User from "../../models/UserModel";
import { getUser, update } from "../../services/authService";
import Loading from "../layout/Loading";

const EditProfile = () => {
  const { data: usr } = useQuery("get user", getUser);
  const [userData, setUserData] = useState<User>({});

  useEffect(() => {
    if (usr && usr.user) setUserData(usr.user);
  }, [usr]);

  const ffeed = document.querySelector(".error.name");

  const onChange = (e: FormEvent<HTMLInputElement>) => {
    setUserData({
      ...userData,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  const [updateUser, { data: user, isLoading }] = useMutation(update);
  const [profile, setProfile] = useState<File | undefined>();

  const history = useHistory();

  useEffect(() => {
    if (user && user.user) {
      toast("Profile updated successfully", { type: "success" });
      history.push(`/profile/${user.user._id}`);
    }

    // eslint-disable-next-line
  }, [user]);

  useEffect(() => {
    if (user?.errors) {
      user.errors.forEach(({ msg, param }: { msg: string; param: string }) => {
        if (param === "name") {
          ffeed!.textContent = msg;
        }
      });

      setTimeout(() => {
        if (ffeed) ffeed.textContent = "";
      }, 4000);
    }
    // eslint-disable-next-line
  }, [user]);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    let { name } = userData;
    if (!name) {
      ffeed!.textContent = "Name is required";
    } else {
      await updateUser({ user: userData, profile });
      // let resp = await register(userData);
      // if (resp) {
      //   setFeed(resp.msg);
      // } else {
      //   setFeed("");
      // }
    }

    setTimeout(() => {
      if (ffeed) ffeed.textContent = "";
    }, 4000);
  };

  return (
    <form onSubmit={onSubmit} className="auth">
      {isLoading && <Loading />}
      <div style={{ display: "flex" }}>
        <div style={{ margin: "auto" }}>
          <h4>Update profile</h4>

          <div className="">
            <div className="form-item">
              <span className="form-icon material-icons">person</span>
              <input
                className="uk-input"
                type="text"
                placeholder="full name"
                onChange={onChange}
                id="name"
              />
              <AnimatePresence>
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: `100%` }}
                  exit={{ height: 0 }}
                  className="error name"
                ></motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="file-field ">
            {profile ? (
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ fontSize: `12px` }}>
                  Selected file:
                  <span>{profile.name}</span>
                </div>
                <div
                  onClick={() => setProfile(undefined)}
                  className="material-icons"
                >
                  close
                </div>
              </div>
            ) : (
              <>
                <div className="">
                  <label style={{ cursor: "pointer" }} htmlFor="file">
                    Select file
                  </label>
                  <input
                    type="file"
                    id="file"
                    name="files"
                    hidden={true}
                    multiple
                    onChange={(e) => {
                      const files = e.target.files;

                      if (files) {
                        setProfile(files[0]);
                      }
                    }}
                  />
                </div>
              </>
            )}
            <AnimatePresence>
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: `100%` }}
                exit={{ height: 0 }}
                className="error file"
              ></motion.div>
            </AnimatePresence>
          </div>

          <button className="uk-button">Sign up</button>
        </div>
      </div>
    </form>
  );
};

export default EditProfile;
