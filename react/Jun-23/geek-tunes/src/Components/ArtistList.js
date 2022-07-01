import React from 'react';
import { Link } from 'react-router-dom';
import { getArtistImage } from '../util';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleRight } from '@fortawesome/free-solid-svg-icons';
import Image from './Image';

const ArtistList = ({ list, loadMore, showLoadMore, horizontal = true }) => {
  return (
    <div className={`flex gap-3 mt-4 w-full overflow-x-auto ${horizontal ? "flex-nowrap" : "flex-wrap justify-evenly"}`}>
      {list.map((singleArtist, idx) => {
        if (singleArtist === -1) {
          return (
            <div className="flex-none w-32 animate-pulse rounded-lg" key={idx}>
              <div className="bg-slate-700 h-20 w-28"></div>
              <div className="h-2 bg-slate-700 rounded mt-2 w-20 mb-3"></div>
            </div>
          );
        } else {
          return (
            <Link to={`/artist/${singleArtist.id}`} key={idx}>
              <div className="flex-none w-32 cursor-pointer">
                <Image className="w-32 h-24 border-4 border-transparent hover:border-blue-400 rounded-lg" src={getArtistImage(singleArtist.id)} />
                <p className="m-0 text-sm text-gray-600 pl-1">{singleArtist.name}</p>
              </div>
            </Link>
          );
        }
      })}
      {(loadMore !== undefined) && showLoadMore ? (
        <div onClick={loadMore} className="flex-none w-36 cursor-pointer border-2 hover:border-4 hover:border-blue-400 border-gray-300 rounded-md h-32 flex justify-center items-center">
          <p className="m-0 text-lg pl-1">Load More <FontAwesomeIcon icon={faCircleRight} /></p>
        </div>
      ) : false}
    </div>
  )
}

export default ArtistList;