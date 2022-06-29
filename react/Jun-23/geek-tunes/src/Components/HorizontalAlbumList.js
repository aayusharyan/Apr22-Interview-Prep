import { Link } from 'react-router-dom';
import { getAlbumImage } from '../util';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleRight } from '@fortawesome/free-solid-svg-icons';

const HorizontalAlbumList = ({ albumList, loadMore, showLoadMore }) => {
  return (
    <>
      <div class="flex flex-nowrap gap-3 mt-4 w-full overflow-x-auto">
        {albumList.map((singleAlbum, idx) => {
          if (singleAlbum == -1) {
            return (
              <div class="flex-none w-32 animate-pulse rounded-lg" key={idx} >
                <div class="bg-slate-700 h-28 w-28"></div>
                <div class="h-2 bg-slate-700 rounded mt-2 w-20 mb-3"></div>
              </div>
            );
          } else {
            return (
              <Link to={`/album/${singleAlbum.id}`} key={idx}>
                <div class="flex-none w-32 cursor-pointer">
                  <img className='border-4 border-transparent hover:border-blue-400 rounded-lg' src={getAlbumImage(singleAlbum.id)} />
                  <p class="m-0 text-sm text-gray-600 pl-1">{singleAlbum.name}</p>
                </div>
              </Link>
            );
          }
        })}
        {(loadMore !== undefined) && showLoadMore ? (
          <div onClick={loadMore} class="flex-none w-36 cursor-pointer border-2 hover:border-4 hover:border-blue-400 border-gray-300 rounded-md h-32 flex justify-center items-center">
            <p class="m-0 text-lg pl-1">Load More <FontAwesomeIcon icon={faCircleRight} /></p>
          </div>
        ) : false}
      </div>
    </>
  )
}

export default HorizontalAlbumList