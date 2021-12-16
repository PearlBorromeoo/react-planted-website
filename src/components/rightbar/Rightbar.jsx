import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import {Add, Remove} from "@material-ui/icons"

export default function Rightbar({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [followings, setFollowings] = useState([]);
  const {user:currentUser,dispatch} = useContext(AuthContext);
  const [followed,setFollowed] = useState(false);

  useEffect(()=>{
    currentUser.following.includes(user?._id)
  },[currentUser,user]);

  useEffect(() => {
    const getFollowings = async () => {
      try {
        console.log(user);
        const followingList = await axios.get("/users/followings/" + user._id);
        setFollowings(followingList.data);
      } catch (err) {
        console.log(err);
      }
    };
    getFollowings();
  }, [user]);

  const handleClick = async()=> {
    try {
      if(followed) {
        await axios.put("/users/"+user._id+"/unfollow", {userID:currentUser._id});
        dispatch({type:"UNFOLLOW",payload:user._id})
      } else {
        await axios.put("/users/"+user._id+"/follow", {userID:currentUser._id});
        dispatch({type:"FOLLOW",payload:user._id})
      }
    } catch (err) {
      console.log(err)
    }
    setFollowed(!followed)
  }

  const HomeRightbar = () => {
    return (
      <>
        {console.log("home:iamrunning")}
        <div className="birthdayContainer">
          <img className="birthdayImage" src="/assets/gift.png" alt="" />
          <span className="birthdayText">
            <b>Haku Yamamoto</b> and <b>3 other friends</b> have a birthday
            today
          </span>
        </div>
        <img className="rightbarAD" src="/assets/advertisment.jpeg" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        {console.log("profile:iamrunning")}
        {user.username !== currentUser.username && (
          <button className="rightbarFollowButton" onClick={handleClick}>
            {followed ? "Unfollow" : "Follow"}
            {followed ? <Remove/> : <Add/>}
          </button>
        )}
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Name: </span>
            <span className="rightbarInfoValue">{user.name}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City: </span>
            <span className="rightbarInfoValue">Tokyo</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City: </span>
            <span className="rightbarInfoValue">Tokyo</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City: </span>
            <span className="rightbarInfoValue">Tokyo</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City: </span>
            <span className="rightbarInfoValue">Tokyo</span>
          </div>
        </div>
        <h4 className="rightbarTitle">Followings</h4>
        <div className="rightbarFollowings">
          {followings.map((following) => (
            <Link to={"/profile/"+following.username} style={{textDecoration:"none"}}>
              <div className="rightbarFollowing">
                <img
                  className="rightbarFollowingDP"
                  src={following.profilePicture || PF + "profile-pictures/noDP.png"}
                  alt=""
                />
                <span className="rightbarFollowingName">
                  {following.username}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {user ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}
