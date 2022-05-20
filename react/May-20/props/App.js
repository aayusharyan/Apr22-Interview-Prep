const App = () => {
  const fetch_response = "Very Important";
  return (
    <div>
      <h2>My react app</h2>
      <Parent some_data={fetch_response} />
    </div>
  );
}