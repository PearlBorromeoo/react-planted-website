import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";

export default function Rightbar({user}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const HomeRightbar = () => {
    return(
      <>
        <div className="birthdayContainer">
          <img className="birthdayImage" src="/assets/gift.png" alt=""/>
          <span className="birthdayText">
            <b>Haku Yamamoto</b> and <b>3 other friends</b> have a birthday today
             </span>
        </div>
        <img className="rightbarAD" src="/assets/advertisment.jpeg" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map(u=>(
            <Online key={u.id} user={u} />
          ))}
        </ul>      
      </>
    )
  }

  const ProfileRightbar = () => {
    return (
      <>
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
          <div className="rightbarFollowing">
            <img 
              className="rightbarFollowingDP" 
              src="assets/profile-pictures/1.jpeg" 
              alt="" 
            />
            <span className="rightbarFollowingName">Melissa Sace</span>
          </div>
          <div className="rightbarFollowing">
            <img 
              className="rightbarFollowingDP" 
              src="assets/profile-pictures/2.jpeg" 
              alt="" 
            />
            <span className="rightbarFollowingName">Melissa Sace</span>
          </div>
          <div className="rightbarFollowing">
            <img 
              className="rightbarFollowingDP" 
              src="assets/profile-pictures/3.jpeg" 
              alt="" 
            />
            <span className="rightbarFollowingName">Melissa Sace</span>
          </div>
          <div className="rightbarFollowing">
            <img 
              className="rightbarFollowingDP" 
              src="assets/profile-pictures/4.jpeg" 
              alt="" 
            />
            <span className="rightbarFollowingName">Melissa Sace</span>
          </div>
          <div className="rightbarFollowing">
            <img 
              className="rightbarFollowingDP" 
              src="assets/profile-pictures/5.jpeg" 
              alt="" 
            />
            <span className="rightbarFollowingName">Melissa Sace</span>
          </div>
        </div>
      </>
    )
  }
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {user ? <ProfileRightbar/> : <HomeRightbar/>}
      </div>
    </div>
  )
}
