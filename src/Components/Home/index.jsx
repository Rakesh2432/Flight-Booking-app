import video from "../../assets/video.mp4";
import plane from "../../assets/plane.png";
import Search from "../Search";

export default function Home() {
  return (
    <div className="Home">
      <video src={video} autoPlay loop muted style={{ width: "100%" }} />

      <div className="main">
        <img src={plane} style={{ width: "50%" }} />

        <Search />
      </div>
    </div>
  );
}
