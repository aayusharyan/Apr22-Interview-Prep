import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';

function App() {
  // const [likes, setLikes] = useState(0);
  // const [pass1, setPass1] = useState("");
  // const [pass2, setPass2] = useState("");
  // const [match, setMatch] = useState(true);
  // useEffect(() => {
  //   console.log("Hello World");
  // }, []);

  // useEffect(() => {
  //   console.log("Update world"); 
  // }, [likes]);

  // useEffect(() => {
  //   if(pass1 === pass2) {
  //     setMatch(true);
  //   } else {
  //     setMatch(false);
  //   }
  // }, [pass1, pass2]);

  // useEffect(() => {
  //   return () => {
  //     console.log("This will be alled when unmounted");
  //   }
  // }, [])

  const [users, setUsers] = useState([]);

  //https://reqres.in/api/users
  useEffect(() => {
    // (async () => {
    //   const res = await fetch('https://reqres.in/api/users');
    //   const response = await res.json();
    //   setUsers(response.data);
    // })();
    fetch('https://reqres.in/api/users')
    .then(res => res.json())
    .then(response => setUsers(response.data));
  }, [])
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <button onClick={_ => setLikes(likes + 1)}>Like</button>
        <h3>{likes}</h3>
        <button onClick={_ => setLikes(likes - 1)}>Dislike</button> */}

        {/* <input type="text" onKeyUp={e => setPass1(e.target.value)} />
        <input type="text" onKeyUp={e => setPass2(e.target.value)} />
        {match ? <h3>Password Match</h3> : <h3>Password Don't match</h3>} */}

        <ul>
          {users.map((single_user, idx) => {
            return <li>{single_user.first_name} {single_user.last_name} ({single_user.email})</li>
          })}
        </ul>


      </header>
    </div>
  );
}

export default App;
