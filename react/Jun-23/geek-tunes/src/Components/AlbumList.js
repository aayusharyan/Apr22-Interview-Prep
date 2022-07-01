import { Link } from 'react-router-dom';
import { getAlbumImage } from '../util';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleRight } from '@fortawesome/free-solid-svg-icons';
import Image from './Image';

const AlbumList = ({ albumList, loadMore, showLoadMore, horizontal=true }) => {
  return (
    <>
      <div className={`flex gap-3 mt-4 w-full overflow-x-auto ${horizontal ? "flex-nowrap" : "flex-wrap justify-evenly"}`}>
        {albumList.map((singleAlbum, idx) => {
          if (singleAlbum === -1) {
            return (
              <div className="flex-none w-32 animate-pulse rounded-lg" key={idx} >
                <div className="bg-slate-700 h-28 w-28"></div>
                <div className="h-2 bg-slate-700 rounded mt-2 w-20 mb-3"></div>
              </div>
            );
          } else {
            return (
              <Link to={`/album/${singleAlbum.id}`} key={idx}>
                <div className="flex-none w-32 cursor-pointer">
                  <Image className='h-32 w-32 border-4 border-transparent hover:border-blue-400 rounded-lg' src={getAlbumImage(singleAlbum.id)} />
                  <p className="m-0 text-sm text-gray-600 pl-1">{singleAlbum.name}</p>
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
    </>
  )
}

export default AlbumList