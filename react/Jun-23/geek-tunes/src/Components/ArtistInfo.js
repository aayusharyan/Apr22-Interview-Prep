import React from 'react';
import { Link } from 'react-router-dom';
import { getArtistImage } from '../util';

const ArtistInfo = ({ artistDetails }) => {

  const randomBlurb = () => {
    if (artistDetails.blurbs?.length > 0) {
      const randomIdx = Math.floor(Math.random() * artistDetails.blurbs?.length);
      return artistDetails.blurbs[randomIdx];
    }
    return "";
  }

  return (
    <>
      <div className='h-52 sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/4 z-0 -mt-4 blur-sm' style={{ backgroundImage: `url('${getArtistImage(artistDetails.id)}')`, backgroundSize: "cover" }}></div>
      <div className="container mx-auto px-4 -mt-40 z-2 relative">
        <img src={getArtistImage(artistDetails.id)} className="p-8 sm:w-1/2 sm:-ml-2 md:-ml-3 sm:-mt-4 md:w-1/3 lg:w-1/3 xl:w-1/4 sm:inline" />

        <div className='sm:inline-block sm:p-8 sm:w-2/5'>
          <p className='text-3xl font-semibold inline -mt-7 sm:mt-0 text-center sm:text-left'>{artistDetails.name}</p>
          <br />
          <div className='inline-block'>
            <p className='text-center sm:text-left mt-4'>{randomBlurb()}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ArtistInfo