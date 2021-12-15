import "./profile.css"
import Content from "../../components/content/Content";
import Leftbar from "../../components/leftbar/Leftbar";
import Rightbar from "../../components/rightbar/Rightbar";
import Topbar from "../../components/topbar/Topbar";
import axios from "axios"
import { useState, useEffect } from "react";
import {useParams} from "react-router"

export default function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState({});
  const username = useParams().username;

  useEffect(()=>{
    const fetchUser = async() => {
      const res = await axios.get(`/users?username=${username}`);
      setUser(res.data)
    }
    fetchUser();
  },[username])
  

  return (
    <>
      <Topbar/>
      <div className="profile">
        <Leftbar/>
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img 
                className="profileCoverImage" 
                src={user.coverPicture || PF+"profile-pictures/noCP.jpeg"} 
                alt="" />
              <img 
                className="profileDP" 
                src={user.profilePicture || PF+"profile-pictures/noDP.png"}
                alt="" />
            </div>
            <div className="profileInfo">
              <h4 className="ProfileInfoName">{user.username}</h4>
              <span className="ProfileInfoDesc">{user.description}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Content username={username}/>
            <Rightbar user={user}/>
          </div>
        </div>
      </div>
    </>
  )
}
