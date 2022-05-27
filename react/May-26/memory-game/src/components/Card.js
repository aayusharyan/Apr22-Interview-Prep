const Card = (props) => {
  const flipCard = () => {
    props.flip(props.index);
  }
  return (
    <div className={`card ${props.isFlipped ? "flipped" : ""}`} onClick={flipCard}>
      <div className="content">
        <h1>{props.emoji}</h1>
      </div>
    </div>
  )
}

export default Card;