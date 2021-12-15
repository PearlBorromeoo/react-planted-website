import "./leftbar.css"
import {RssFeed} from "@material-ui/icons"
import { Users } from "../../dummyData"
import Friends from "../friends/Friends"

export default function Leftbar() {
  return (
    <div className="leftbar">
      <div className="leftbarWrapper">
        <ul className="leftbarList">
        <li className="leftbarListItem">
            <RssFeed className="leftbarIcon"/>
            <span className="leftbarListItemText">Feed</span>
          </li>
          <li className="leftbarListItem">
            <RssFeed className="leftbarIcon"/>
            <span className="leftbarListItemText">Change</span>
          </li>
          <li className="leftbarListItem">
            <RssFeed className="leftbarIcon"/>
            <span className="leftbarListItemText">This</span>
          </li>
          <li className="leftbarListItem">
            <RssFeed className="leftbarIcon"/>
            <span className="leftbarListItemText">OK?</span>
          </li>
        </ul>
        <button className="leftbarButton">Show More</button>
        <hr className="leftbarHR"/>
        <ul className="leftbarFriendList">
          {Users.map((u)=>(
            <Friends key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  )
}

