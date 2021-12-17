import "./market.css"
import { useContext, useEffect, useState } from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import Mpost from "../mpost/Mpost";
import Mshare from "../mshare/Mshare";

export default function Market({username}) {
  const [posts, setPosts] = useState([]);
  const {user} = useContext(AuthContext);

  useEffect(()=>{
    const fetchPosts = async() => {
      const res = username
      ? await axios.get("/marketplace/profile/"+username)
      : await axios.get("/marketplace/feed/"+user._id);
      setPosts(res.data.sort((p1,p2)=>{
        return new Date(p2.createdAt) - new Date(p1.createdAt);
      }));
    }
    fetchPosts();
  },[username, user._id]);

  return (
    <div className="content">
      <div className="contentWrapper">
        <Mshare/>
        {posts.map((p)=>(
          <Mpost key={p._id} post={p}/>
        ))}      
      </div>
    </div>
  )
}
