import SingleTrackCard from '../Components/SingleTrackCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleRight } from '@fortawesome/free-solid-svg-icons';

const SongList = ({ list, loadMore, showLoadMore }) => {
  return (
    <>
      <div className='flex gap-4 flex-wrap justify-evenly items-stretch'>
        {list.map((singleTrack, idx) => {
          if (singleTrack == -1) {
            return (
              <>
                <div className='w-full sm:w-5/12 md:w-1/4 lg:w-1/5 h-14 min-h-14 border-gray-700 border-2 rounded-md flex items-center'>
                  <div class="h-6 ml-2 animate-pulse bg-slate-700 rounded-full w-8"></div>
                  <div class="h-6 ml-4 animate-pulse bg-slate-700 rounded-full w-48"></div>
                  <div class="h-10 ml-auto animate-pulse bg-slate-700 rounded-full w-10 mr-3"></div>
                </div>
              </>
            );
          } else {
            return (
              <SingleTrackCard key={idx} index={idx + 1} trackDetail={singleTrack} />
            );
          }
        })}
        {(loadMore !== undefined) && showLoadMore ? (
          <div onClick={loadMore} class="w-full sm:w-5/12 md:w-1/4 lg:w-1/5 min-h-14 flex-none cursor-pointer border-2 border-gray-700 rounded-md flex justify-center items-center hover:border-blue-700 hover:bg-blue-100">
            <p class="m-2 text-xl pl-1">Load More &nbsp; <FontAwesomeIcon icon={faCircleRight} /></p>
          </div>
        ) : false}
      </div>
    </>
  )
}

export default SongList