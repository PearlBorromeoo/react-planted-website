import "./share.css"
import {PermMedia, Label} from "@material-ui/icons"

export default function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareDP" src="/assets/profile-pictures/1.jpeg" alt="" />
          <input 
            placeholder="What's on your mind?" 
            className="shareInput"
          />
        </div>
        <hr className="shareHR"/>
        <div className="shareBottom">
          <div className="shareOptions">
          <div className="shareOption">
              <PermMedia htmlColor = "olive" className="shareIcon"/>
              <span className="shareOptionText">Photo/Video</span>
            </div>
            <div className="shareOption">
              <Label htmlColor = "red" className="shareIcon"/>
              <span className="shareOptionText">Tags</span>
            </div>
          </div>
          <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  )
}
