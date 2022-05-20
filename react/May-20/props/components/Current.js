const Current = (props) => {
  const local_fn = () => {
    const some_data = "This data is generated in Child";
    props.cb(some_data);
  }
  return (
    <div>
      <h6>Current Element</h6>
      <Child some_data={props.some_data} />
      <button onClick={() => {props.cb("Some data from child"); }}>Click me on Current</button>
      {/* <p>{props.some_data}</p> */}
    </div>
  )
}