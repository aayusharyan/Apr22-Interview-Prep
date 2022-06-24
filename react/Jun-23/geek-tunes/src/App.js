import NavigationBar from "./Components/NavigationBar";
import Player from "./Components/Player";
import Home from "./Pages/Home";

const App = _ => {
  return (
    <>
      <div class="bg-gray-200 min-h-screen pb-24">
        <NavigationBar />
        <div className="container mx-auto py-4">
          <Home />
        </div>
        <Player />
      </div>
    </>
  );
}

export default App;
