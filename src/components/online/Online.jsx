import "./online.css"

export default function Online({user}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <li className="rightbarFriend">
      <div className="rightbarDPContainer">
        <img className="rightbarDP" src={PF+user.profilePicture} alt=""/>
        <span className="rightbarOnline"></span>
      </div>
      <span className="rightbarUser">{user.username}</span>
    </li>
)
}
