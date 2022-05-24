const PasswordMatcher = () => {
  const [pass1, setPass1] = React.useState("");
  const [pass2, setPass2] = React.useState("");

  return(
    <div>
      <p>{pass1 === pass2 ? "Passwords match" : "Passwords don't match"}</p>
      <input type="text" onKeyUp={e => setPass1(e.target.value)} />
      <input type="text" onKeyUp={e => setPass2(e.target.value)} />
      
    </div>
  );
}