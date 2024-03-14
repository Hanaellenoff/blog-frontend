/* eslint-disable react/prop-types */
export function Index(props) {
  console.log(props);
  return (
    <div id="posts-index">
      <div className="cards">
        {props.posts.map((post) => (
          <div key={post.id} className="posts card">
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <img src={post.image} alt="" />
            <button onClick={() => props.onShowPost(post)}>More info</button>
          </div>
        ))}
      </div>
    </div>
  );
}
