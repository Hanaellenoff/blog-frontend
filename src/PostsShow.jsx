/* eslint-disable react/prop-types */
export function PostsShow(props) {
  return (
    <div>
      <h2>Title: {props.post.title}</h2>
      <p>Description: {props.post.body}</p>
      <p>created at: {props.post.created_at}</p>
    </div>
  );
}
