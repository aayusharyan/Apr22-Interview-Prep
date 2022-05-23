const App = () => {
  const [isDark, setDark] = React.useState(false);
  
  const toggleTheme = () => {
    if(isDark) { //Currently, it is dark mode
      setDark(false); //Make it light mode;
    } else { //Otherwise, currently it is light mode
      setDark(true); //Make it dark mode;
    }
  }

  return (
    <div>
      <button onClick={toggleTheme}>Theme switch</button>
      <Container darkMode={isDark} />
    </div>
  );
}