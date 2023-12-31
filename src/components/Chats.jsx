import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";
import { auth } from "./firebase";

import { useAuth } from "../contexts/AuthContext";

export default function Chats() {
  const didMountRef = useRef(false);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const history = useNavigate();

  async function handleLogout() {
    await auth.signOut();

    history.push("/");
  }

  async function getFile(url) {
    let response = await fetch(url);
    let data = await response.blob();

    return new File([data], "userPhoto.jpg", { type: "image/jpeg" });
  }

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;
    }
    if (!user || user === null) {
      history.push("/");

      return;
    }

    axios
      .get("https://api.chatengine.io/users/me/", {
        headers: {
          "project-id": import.meta.env.VITE_PUBLIC_ID,
          "user-name": user.email,
          "user-secret": user.uid,
        },
      })
      .then(() => {
        setLoading(false);
      })
      .catch((e) => {
        let formdata = new FormData();
        formdata.append("email", user.email);
        formdata.append("username", user.email);
        formdata.append("secret", user.uid);

        getFile(user.photoURL).then((avatar) => {
          formdata.append("avatar", avatar, avatar.name);

          axios
            .post("https://api.chatengine.io/users/", formdata, {
              headers: {
                "private-key": import.meta.env.VITE_PRIVATE_ID,
              },
            })

            .then(() => setLoading(false))
            .catch((e) => console.log("e", e.response));
        });
      });
  }, [user, history]);

  if (!user || loading) return <div />;

  return (
    <div className="chats-page">
      <div className="nav-bar">
        <div className="logo-tab">Unichat</div>

        <div onClick={handleLogout} className="logout-tab">
          Logout
        </div>
      </div>

      <ChatEngine
        height="calc(100vh - 66px)"
        projectID={import.meta.env.VITE_PUBLIC_ID}
        userName={user.email}
        userSecret={user.uid}
      />
    </div>
  );
}
