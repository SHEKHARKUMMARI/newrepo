import "../styles.css";
const handleIn = (e) => {
  e.target.controls = "cotrols";
};
const handleOut = (e) => {
  e.target.controls = "";
};
function Video(props) {
  return (
    <div>
      <video
        id="p1"
        src={props.src}
        height="100px"
        width="200px"
        // controls="controls"
        className="fl"
        onMouseEnter={handleIn}
        onMouseLeave={handleOut}
      />
    </div>
  );
}
export default Video;
