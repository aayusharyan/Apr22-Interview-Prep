const Child = (props) => {

  const clicked = () => {
    alert("Button clicked");
  }

  return (
    <div>
      <h6>Child component</h6>
      <button onClick={clicked}>Click me</button>
      <button onClick={() => { console.log("Inline clicked"); }}>Inline click</button>
      <input type="text" onKeyUp={ _ => console.log("Hello") } />
      <p>{props.some_data}</p>
    </div>
  )
}