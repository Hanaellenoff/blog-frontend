import { Index } from "./Index";
import { New } from "./New";
import axios from "axios";
import { useState, useEffect } from "react";
import { Modal } from "./Modal";

export function Content() {
  const [posts, setPosts] = useState([]);
  const handleIndexPosts = () => {
    axios.get("http://localhost:3000/posts.json").then((response) => {
      setPosts(response.data);
      console.log(posts);
    });
  };
  const [currentPost, setCurrentPost] = useState({});
  const [isPostsShowVisible, setIsPostsShowVisible] = useState(false);
  const handleShowPost = (post) => {
    setIsPostsShowVisible(true);
    setCurrentPost(post);
  };

  const handleClose = () => {
    setIsPostsShowVisible(false);
  };

  useEffect(handleIndexPosts, []);
  return (
    <div>
      <New />
      <Index posts={posts} onShowPost={handleShowPost} />
      <Modal show={isPostsShowVisible} onClose={handleClose}>
        <h2>Title: {currentPost.title}</h2>
        <p>Description: {currentPost.body}</p>
        <p>created at: {currentPost.created_at}</p>
      </Modal>
    </div>
  );
}
