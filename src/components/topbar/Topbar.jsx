import "./topbar.css"
import { Search, Person, Chat, Notifications } from "@material-ui/icons"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"

export default function Topbar() {
  const {user} = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{textDecoration:"none"}}>
          <span className="logo">Planted</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon"/>
          <input placeholder="Search" className="searchInput" />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <Link to={`/marketplace`} style={{textDecoration:"none"}}>
          <span className="topbarLink">Marketplace</span>
          </Link>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Link to="/messenger" style={{color:"wheat"}}>
            <Chat />
            </Link>
            {/* <span className="topbarIconBadge">1</span> */}
          </div>
        </div>
        <Link to={`/profile/${user.username}`} style={{textDecoration:"none"}}>
          <img src={user.profilePicture ? user.profilePicture : PF+"profile-pictures/noDP.png"} alt="" className="topbarDP" />          
        </Link>
        <Link to={`/profile/${user.username}`} style={{textDecoration:"none"}}>
        <span className="topbarUsername">{user.username}</span>
        </Link>
      </div>
    </div>
  )
}
