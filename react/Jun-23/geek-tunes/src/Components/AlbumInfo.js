import React from 'react';
import { Link } from 'react-router-dom';
import { getAlbumImage } from '../util';

const AlbumInfo = ({ albumDetails }) => {
  return (
    <>
      <div className='h-52 sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/4 z-0 -mt-4 blur-sm' style={{ backgroundImage: `url('${getAlbumImage(albumDetails.id)}')`, backgroundSize: "cover" }}></div>
      <div className="container mx-auto px-4 -mt-40 z-2 relative">
        <img src={getAlbumImage(albumDetails.id)} className="p-8 sm:w-1/2 sm:-ml-2 md:-ml-3 sm:-mt-4 md:w-1/3 lg:w-1/3 xl:w-1/4 sm:inline" alt="" />

        <div className='sm:inline-block sm:p-8'>
          <p className='text-3xl font-semibold -mt-7 sm:mt-0 text-center sm:text-left'>{albumDetails.name}</p>
          {albumDetails.contributingArtists?.primaryArtist === "art.0" ? (
            <p className='text-lg  font-semibold text-center sm:text-left'>{albumDetails.artistName}</p>
          ) : (
            <Link to={`/artist/${albumDetails.contributingArtists?.primaryArtist}`}>
              <p className='text-lg underline hover:text-blue-700 font-semibold text-center sm:text-left'>{albumDetails.artistName}</p>
            </Link>
          )}

          <p className='text-center sm:text-left mt-4'>Released X years ago</p>
          <div className='flex justify-center sm:justify-start mt-4 gap-2'>{albumDetails.tags?.map((singleTag, idx) => {
            return (
              <div key={idx} className="bg-gray-300 rounded-full px-2 pb-1 inline border-blue-300 border-2">
                <span>{singleTag}</span>
              </div>
            )
          })}</div>
        </div>
      </div>
    </>
  )
}

export default AlbumInfo