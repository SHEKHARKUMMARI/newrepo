import "./styles.css";
import profile from "./components/profile.jpeg";
import Video from "./components/video";
import v1 from "./components/v1.mp4";
import v2 from "./components/v2.mp4";
import v4 from "./components/v4.mp4";
import v5 from "./components/v5.mp4";
import v3 from "./components/v3.mp4";
import Typewriter from "typewriter-effect";
// import Typist from "react-typist";
// import Cart from "../components/cart";
import { Draggable } from "react-drag-reorder";
import Background from "./components/background.jpeg";

var sectionStyle = {
  width: "100%",
  height: "100vh",
  backgroundImage: `url(${Background})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat"
};

export default function App() {
  return (
    <div className="App" style={sectionStyle}>
      <div className="df justifycenter">
        <h1 className="or">SHEKHAR KUMMARI</h1>
        <img className="ml-2" alt="profile" src={profile} height="100px" />
      </div>
      <div>
        <h1 className="ml-8 dib">What i can give you:</h1>
        <div className="app dib">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("lifetime fitness.")

                .pauseFor(1000)
                .deleteAll()
                .typeString("fitness world.")

                .pauseFor(1000)
                .deleteAll()
                .typeString("weight lose.")
                .start();
            }}
          />
        </div>
      </div>
      <h1 className="text-center">learn through tutorials :</h1>
      <Draggable>
        <Video src={v1} />
        <Video src={v3} />
        <Video src={v2} />
        <Video src={v4} />
        <Video src={v5} />
      </Draggable>
      <div className="footer">
        <div className="box-container df spaceAround">
          <div className="box">
            <p>
              {" "}
              <i className="fas fa-map-marker-alt"></i> hyderabad, india 504214{" "}
            </p>
            <p>
              {" "}
              <i className="fas fa-envelope"></i> kummarishekhar9@gmail.com{" "}
            </p>
            <p>
              {" "}
              <i className="fas fa-phone"></i> +91 9603053523
            </p>
          </div>

          <h1 className="credit">
            personal trainer <a href="#">shekhar kummari</a>
          </h1>
        </div>
      </div>
    </div>
  );
}
