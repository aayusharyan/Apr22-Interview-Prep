const Container = () => {
  return (
    <div className="container">
      <h2 className="title">Password Generator</h2>
      <ConfigurationOptions />
      <br />
      <button className="action_btn">Generate</button>
      <p className="op_pass">ABCD</p>
    </div>
  )
}