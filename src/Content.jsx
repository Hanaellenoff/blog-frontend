import { Index } from "./Index";
import { New } from "./New";
import axios from "axios";
import { useState, useEffect } from "react";

export function Content() {
  const [posts, setPosts] = useState([]);
  const handleIndexPosts = () => {
    axios.get("http://localhost:3000/posts.json").then((response) => {
      setPosts(response.data);
      // console.log(posts);
    });
  };
  useEffect(handleIndexPosts, []);
  return (
    <div>
      <New />
      <Index posts={posts} />
    </div>
  );
}
