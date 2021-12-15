import "./friends.css"

export default function Friends({user}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <li className="leftbarFriend">
      <img className="leftbarFriendDP" src={PF+user.profilePicture} alt="" />
      <span className="leftbarFriendName">{user.username}</span>
    </li>
  )
}
