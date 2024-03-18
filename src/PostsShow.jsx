/* eslint-disable react/prop-types */
export function PostsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdatePost(props.post.id, params);
    event.target.reset();
  };
  return (
    <div id="posts-show">
      <h2>Title: {props.post.title}</h2>
      <p>Body: {props.post.body}</p>
      <p>Image: {props.post.image}</p>

      <h1>Edit this recipe</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input defaultValue={props.post.title} name="" type="text" />
        </div>
        <div>
          Body: <input defaultValue={props.post.body} type="text" />
        </div>
        <div>
          Image: <input defaultValue={props.post.image} type="text" />
        </div>
        <button type="sumbit">Update Post</button>
      </form>
    </div>
  );
}
