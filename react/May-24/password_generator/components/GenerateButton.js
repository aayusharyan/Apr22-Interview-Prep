const GenerateButton = (props) => {
  const [password, setPassword] = React.useState("");

  const generatePassword = () => {
    let chars = "";
    switch(props.casing) {
      case "lower":
        chars = "abcdefghijklmnopqrstuvwxyz";
        break;
      case "upper":
        chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        break;
      case "mixed":
        chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        break;
      default:
        chars = "abcdefghijklmnopqrstuvwxyz";
        break;
    }

    if(props.incNumber) {
      chars = chars + "1234567890";
    }
    if(props.incSplChars) {
      chars = chars + "_&*+@!#$%";
    }

    let charCount = props.charCount;
    if(charCount > 16) { charCount = 16; }
    if(charCount < 1)  { charCount = 1;  }

    let pass = "";
    for(let i = 0; i < charCount; i++) {
      const index = Math.floor(Math.random() * chars.length);
      const singleChar = chars.charAt(index);
      pass = pass + singleChar;
    }
    setPassword(pass);    
  }
  return(
    <>
      <button className="action_btn" onClick={generatePassword}>Generate</button>
      {password !== "" ? <p className="op_pass">{password}</p> : false }
    </>
  )
}