import "./post.css"
import {MoreVert} from "@material-ui/icons"
import { useEffect, useState } from "react";
import axios from "axios";
import {format} from "timeago.js";
import {Link} from "react-router-dom"

export default function Post({post}) {
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(()=>{
    const fetchUser = async() => {
      const res = await axios.get(`/users?userID=${post.userID}`);
      setUser(res.data)
    }
    fetchUser();
  },[post.userID])

  const likeHandler =()=>{
    setLike(isLiked?like-1:like+1)
    setIsLiked(!isLiked)
  }
  
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`profile/${user.username}`}>
            <img className="postDP" src={user.profilePicture || PF+"profile-pictures/noDP.png"} alt="" />
            </Link>
            <span className="postUser">{user.username}</span>
            <span className="postDate">{format(post.createdAt)}</span>
          </div>
          <div className="postTopRight">
            <MoreVert/>
          </div>
        </div>
        <div className="postCenter">
          <span className="postContent">{post.description}</span>
          <img className="postImage" src={PF+post.image} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src={`${PF}like.png`} onClick={likeHandler} alt="" />
            <span className="likeCount">{like} likes</span>
          </div>
          <div className="postBottomRight">
            <span className="commentCount">{post.comment} comment</span>
          </div>
        </div>
      </div>
    </div>
  )
}
