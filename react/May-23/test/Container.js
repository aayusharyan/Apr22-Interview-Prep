// const Container = (props) => {
//   if(props.darkMode) {
//     return (
//       <div className={`class1 ${props.darkMode? 'trur': 'false'}`} style={{ backgroundColor: "black"}}>
//         <h2 style={{ color: "white" }}>Currently in Dark mode</h2>
//       </div>
//     );
//   } else {
//     return (
//       <div>
//         <h2>Currently in Light mode</h2>
//       </div>
//     );
//   }
// }

const Container = (props) => {
  return (
    <div className={props.darkMode ? "dark" : "light"}>
      <h2>{props.darkMode ? "This is dark mode" : "This is light mode"}</h2>
    </div>
  );
}