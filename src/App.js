import "./styles.css";
import profile from "./components/profile.jpeg";
import Video from "./components/video";
import v1 from "./components/v1.mp4";
import v3 from "./components/v3.mp4";
import Typewriter from "typewriter-effect";

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
        <h1>SHEKHAR KUMMARI</h1>
        <img className="ml-2" alt="profile" src={profile} height="100px" />
      </div>
      <div className="app">
        <Typewriter
          onInit={(typewriter) => {
            typewriter

              .typeString(
                "The gym is not the social club for the fit. It’s a training ground for everyone"
              )

              .pauseFor(1000)
              .deleteAll()
              .typeString("It never gets easier, you just get better.")
              .start();
          }}
        />
      </div>
      <Draggable>
        <Video src={v1} />
        <Video src={v3} />
      </Draggable>
      <div className="footer">
        <div className="box-container">
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
