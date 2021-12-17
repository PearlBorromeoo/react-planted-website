import "./mshare.css"
import {PermMedia, Label, Cancel} from "@material-ui/icons"
import { useContext, useRef, useState } from "react"
import { AuthContext } from "../../context/AuthContext"
import axios from "axios";

export default function Mshare() {
  
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const {user} = useContext(AuthContext);
  const desc = useRef();
  const [file, setFile] = useState(null);

  const submitHandler = async(e) => {
    e.preventDefault();
    const newPost = {
      userID: user._id,
      description: desc.current.value,
    };
    if(file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name",filename);
      data.append("file",file);
      newPost.image = filename;
      console.log(newPost);
      try {
        await axios.post("/upload",data)        
      } catch (err) {
        console.log(err);
      }
    }
    try {
      await axios.post("/marketplace",newPost);
      window.location.reload();
    } catch (err) {
      
    }
  }

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareDP" src={user.profilePicture || PF+"profile-pictures/noDP.png"} alt="" />
          <input 
            placeholder="What's on your mind?" 
            className="shareInput"
            ref={desc}
          />
        </div>
        <hr className="shareHR"/>
        {file && (
          <div className="shareImageContainer">
            <img className="shareImage" src={URL.createObjectURL(file)} alt="" />
            <Cancel className="shareCancelImage" onClick={()=>setFile(null)}/>
          </div>
        )}
        <form className="shareBottom" onSubmit={submitHandler}>
          <div className="shareOptions">
            <label htmlFor="file" className="shareOption">
              <PermMedia htmlColor = "olive" className="shareIcon"/>
              <span className="shareOptionText">Photo/Video</span>
              <input style={{display:"none"}} type="file" id="file" accept=".png,.jpeg,.jpg" onChange={(e)=>setFile(e.target.files[0])} />
            </label>
            <div className="shareOption">
              <Label htmlColor = "red" className="shareIcon"/>
              <span className="shareOptionText">Tags</span>
            </div>
          </div>
          <button className="shareButton" type="submit" >Share</button>
        </form>
      </div>
    </div>
  )
}
