const App = () => {
  const [data, setData] = React.useState("Something");
  
  // Without Destructuring...
  // const arr = React.useState("Something");
  // const data = arr[0];
  // const setData = arr[1];

  const change_fn = () => {
    // data = "Other thing";
    // alert(data);
    // document.getElementById('display_container').innerText = data;
    setData("Other thing");
  }
  return(
    <div>
      <h2>My stateful app</h2>
      <h3 id="display_container">{data}</h3>
      <button onClick={change_fn}>Change Data</button>
      <Child str1="Some data" str2 = "Another data" sumit="My name" />
    </div>
  );
}

const Child = (props) => {
  console.log(props);
  return (
    <p>Something from Child</p>
  )
}