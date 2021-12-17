import axios from "axios";
import { useEffect, useState } from "react";
import "./conversation.css";

export default function Conversation({ conversation, currentUser }) {
  const [user, setUser] = useState(null);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    const friendID = conversation.members.find((m) => m !== currentUser._id);

    const getUser = async () => {
      try {
        const res = await axios("/users?userID=" + friendID);
        setUser(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [currentUser, conversation]);
  return (
    <div className="conversation">
      {console.log(user)}
      <img
        src={
          user?.profilePicture
            ? user.profilePicture
            : PF + "profile-pictures/noDP.png"
        }
        alt=""
        className="conversationImage"
      />
      <span className="conversationName">{user?.username}</span>
    </div>
  );
}
