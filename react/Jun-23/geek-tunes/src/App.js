import { Route, Routes } from "react-router-dom";
import NavigationBar from "./Components/NavigationBar";
import Player from "./Components/Player";
import Home from "./Pages/Home";
import Album from './Pages/Album';
import NotFound from "./Pages/NotFound";
import Artist from "./Pages/Artist";
import Search from "./Pages/Search";

const App = _ => {
  return (
    <>
      <div className="bg-gray-200 min-h-screen pb-24">
        <NavigationBar />
        <div className="container mx-auto py-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/album/:albumId" element={<Album />} />
            <Route path="/artist/:artistId" element={<Artist />} />
            <Route path="/search">
              <Route index element={<Search />} />
              <Route path=":query" element={<Search />} />
            </Route>
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Player />
      </div>
    </>
  );
}

export default App;
