const Button = (props) => {
  return (
    <button>{props.content ? props.content : "Click me"}</button>
  )
}