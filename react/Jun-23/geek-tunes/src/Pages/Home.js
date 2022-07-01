import React from 'react'
import TopAlbums from '../Components/TopAlbums'
import TopArtists from '../Components/TopArtists'
import TopSongs from '../Components/TopSongs'

const Home = () => {
  return (
    <>
      <div className="container pl-2">
        <h1 className="text-3xl font-semibold ">Good Morning</h1>
        <br />
        <TopSongs />
        <br />
        <TopAlbums />
        <br />
        <TopArtists />
      </div>
    </>
  )
}

export default Home