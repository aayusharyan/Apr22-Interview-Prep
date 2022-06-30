import { useState } from 'react'
import SearchForm from '../Components/SearchForm'
import TracksTab from '../Components/TracksTab';
import AlbumsTab from '../Components/AlbumsTab';
import ArtistsTab from '../Components/ArtistsTab';

const Search = () => {
  const [tab, setTab] = useState(1);
  return (
    <>
      <div className='container mx-auto px-4'>
        <SearchForm />
        <div className='py-4'>
          <div className='border-gray-400 w-full border-t'></div>
        </div>
        <div className='container flex flex-wrap gap-4 justify-center my-4'>
          <button className={`p-2 px-4 border-2  rounded-full font-semibold ${tab == 1 ? "border-blue-400 text-blue-900 bg-blue-100" : "border-gray-400 hover:bg-blue-50 hover:border-blue-200"}`} onClick={_ => setTab(1)}>Tracks</button>
          <button className={`p-2 px-4 border-2  rounded-full font-semibold ${tab == 2 ? "border-blue-400 text-blue-900 bg-blue-100" : "border-gray-400 hover:bg-blue-50 hover:border-blue-200"}`} onClick={_ => setTab(2)}>Albums</button>
          <button className={`p-2 px-4 border-2  rounded-full font-semibold ${tab == 3 ? "border-blue-400 text-blue-900 bg-blue-100" : "border-gray-400 hover:bg-blue-50 hover:border-blue-200"}`} onClick={_ => setTab(3)}>Artists</button>
        </div>
        <div className='container mt-8'>
          {tab == 1 ? <TracksTab /> : tab == 2 ? <AlbumsTab /> : <ArtistsTab />}
        </div>
      </div>
    </>
  )
}

export default Search