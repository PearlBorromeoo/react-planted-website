import { useEffect, useState } from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import "./content.css";
import axios from "axios";

export default function Content({username}) {
  const [posts, setPosts] = useState([]);

  useEffect(()=>{
    const fetchPosts = async() => {
      const res = username
      ? await axios.get("/posts/profile/"+username)
      : await axios.get("posts/feed/61b66fd0dc0a8e1982b8de59");
      setPosts(res.data);
    }
    fetchPosts();
  },[username]);

  return (
    <div className="content">
      <div className="contentWrapper">
        <Share/>
        {posts.map((p)=>(
          <Post key={p._id} post={p}/>
        ))}      
      </div>
    </div>
  )
}
