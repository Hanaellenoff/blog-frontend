function App() {
  return (
    <div>
      <header>
        <a href="#">Home</a> | <a href="#posts-index">All posts</a> | <a href="#posts-new">New post</a>
      </header>

      <div id="posts-new">
        <h1>A blog by Hana</h1>
        <body>welcome to my blog page now heres a picture of pluto</body>
        <img src="https://images.lifestyleasia.com/wp-content/uploads/sites/7/2024/01/19153732/pluto-1600x900.jpg" />
        <p>and dont tell me its not a planet</p>
      </div>

      <div id="posts-index">
        <h1>qwerty</h1>
        <body>is a person that exsists</body>
        <img
          src="https://png.pngtree.com/png-vector/20190419/ourmid/pngtree-yellow-smiley-face-png-image_960884.jpg"
          alt=""
        />
        <h2>asdf</h2>
        <body>is another exsisting person</body>
        <img src="https://wallpapers.com/images/featured/coolest-pictures-88c269e953ar0aw4.jpg" alt="" />
      </div>

      <footer>
        <p></p>
      </footer>
    </div>
  );
}

export default App;
