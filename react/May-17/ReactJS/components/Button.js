function Button() {
  const text = "Click the button";
  const id = "something";

  function alertSomething() {
    alert("Hi");
  }

  return (
    <button onClick={alertSomething} id={id}>{text}</button>
  )
}