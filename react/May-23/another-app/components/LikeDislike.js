const LikeDislike = () => {
  const [counter, setCounter] = React.useState(0);
  return(
    <div>
      <button onClick={_ => setCounter(counter + 1)}>👍🏻</button>
      <button onClick={_ => setCounter(counter - 1)}>👎🏻</button>
      <p>{counter}</p>
    </div>
  )
}