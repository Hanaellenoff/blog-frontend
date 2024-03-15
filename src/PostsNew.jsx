import axios from "axios";

export function PostsNew() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/posts.json", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
      })
      .catch((error) => {
        console.log(error.response.data.errors);
      });
  };
  return (
    <div>
      <div id="posts-new">
        <h1>What to do when your bored</h1>
        <form onSubmit={handleSubmit}>
          <div>
            Title: <input name="title" type="text" />
          </div>
          <div>
            Body: <input name="body" type="text" />
          </div>
          <div>
            Image: <input name="image" type="text" />
          </div>
          <div>
            <button type="submit">Create Post</button>
          </div>
        </form>
        <p>The only rule:</p>
        <a href="https://www.youtube.com/watch?v=YJPHK5NNtpQ">
          <button>dont tell me plutos not a planet</button>
        </a>
      </div>
    </div>
  );
}
