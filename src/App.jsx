function Header() {
  return (
    <div>
      <header>
        <a href="#">Me</a> | <a href="#posts-new">Person 1</a> | <a href="#posts-index">Person 2</a>
      </header>
    </div>
  );
}
function New() {
  return (
    <div>
      <div id="posts-new">
        <h1>A blog by Hana</h1>
        <body>welcome to my blog page now heres a picture of pluto</body>
        <img
          src="https://images.lifestyleasia.com/wp-content/uploads/sites/7/2024/01/19153732/pluto-1600x900.jpg"
          width="500"
        />
        <p>and dont tell me its not a planet</p>
      </div>
    </div>
  );
}
function Index(props, posts) {
  console.log("The posts are", posts);
  return (
    <div>
      <p>The name is {props.name}</p>
      <div id="posts-index">
        <h1>qwerty</h1>
        <body>is a person that exsists</body>
        <img
          src="https://png.pngtree.com/png-vector/20190419/ourmid/pngtree-yellow-smiley-face-png-image_960884.jpg"
          alt=""
        />
        <h1>asdf</h1>
        <body>is another exsisting person</body>
        <img src="https://wallpapers.com/images/featured/coolest-pictures-88c269e953ar0aw4.jpg" alt="" />
      </div>
    </div>
  );
}
function Footer() {
  return (
    <div>
      <footer>
        <p>Copyright 2022</p>
      </footer>
    </div>
  );
}
function Content() {
  let name = "Test";
  let posts = [
    {
      id: 1,
      title: "oh no",
      body: "weeee",
      image:
        "https://imgd.aeplcdn.com/664x374/n/cw/ec/101487/classic-350-2021-right-front-three-quarter-4.jpeg?isig=0&q=80",
    },
    {
      id: 2,
      title: "ship",
      body: "ahoy",
      image: "https://cdn.britannica.com/78/196578-131-B0FC5325/harbor-Pirate-Ship-way-campaign-marines-oceans.jpg",
    },
    {
      id: 3,
      title: "tacos",
      body: "are super good",
      image:
        "https://brandsitesplatform-res.cloudinary.com/image/fetch/w_1540,c_scale,q_auto:eco,f_auto,fl_lossy,dpr_1.0,e_sharpen:85/https://assets.brandplatform.generalmills.com%2F-%2Fmedia%2Fproject%2Fgmi%2Foldelpaso%2Foldelpaso-us%2Frecipes%2Fqtcu578og0gukdk_kb_rmg_gmi_hi_res_jpeg.jpeg%3F%201540w",
    },
  ];
  return (
    <div>
      <New />
      <Index posts={posts} />
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}
export default App;
