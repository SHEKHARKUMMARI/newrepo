export default function Cart(props) {
  function dragover_handler(ev) {
    ev.preventDefault();
    ev.dataTransfer.dropEffect = "move";
  }
  function drop_handler(ev) {
    ev.preventDefault();
    // Get the id of the target and add the moved element to the target's DOM
    const data = ev.dataTransfer.getData("application/my-app");
    ev.target.appendChild(document.getElementById(data));
  }
  return (
    <>
      <div id="target" onDrop={drop_handler} onDragOver={dragover_handler}>
        {props.children}
      </div>
    </>
  );
}
