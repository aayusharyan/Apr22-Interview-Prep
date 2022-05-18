const Conditional = () => {
  const flag = true;
  const condition = () => {
    if(flag) {
      return (<TrueFlag />)
    } else {
      return (<FalseFlag />)
    }
  }
  const btn_class = "main-button";
  return (
    <div>
      {/* {condition()} */}
      {/* {(() => {
        if(flag) {
          return (<TrueFlag />)
        } else {
          return (<FalseFlag />)
        }
      })()} */}
      {flag ? <TrueFlag /> : <FalseFlag />}
      {/* <button style={{backgroundColor: "#FFFFFF", border: "2px solid grey", borderRadius: "5px"}}> */}
      <button className={btn_class}>
        {flag ? "True Flag" : "False Flag"}
      </button>
    </div>
  )
}

// <condition> ? <true> : <false>


// if(flag == true)
// if(flag)
/*

dfjhgfkjdghj
djfhgkj
dfgjkdjfhgjk
 */