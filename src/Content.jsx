import { Index } from "./Index";
import { New } from "./New";

export function Content() {
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
