function Video(props) {
  return (
    <div>
      <video
        id="p1"
        src={props.src}
        height="100px"
        width="200px"
        controls="controls"
      />
    </div>
  );
}
export default Video;
