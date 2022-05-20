const Parent = (props) => {
  const cb_function = (a) => {
    console.log(a);
    alert("Callback called");
  }

  return (
    <div>
      <h5>Parent element</h5>
      <Current some_data={props.some_data} cb={cb_function} />
      {/* <p>{props.some_data}</p> */}
    </div>
  )
}