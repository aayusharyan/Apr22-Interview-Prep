import { useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagicWandSparkles } from '@fortawesome/free-solid-svg-icons';

const SearchForm = () => {
  const inputRef = useRef();
  const navigate = useNavigate();
  const {query} = useParams();

  const search = e => {
    e.preventDefault();
    navigate(`/search/${inputRef.current.value}`);
  }

  return (
    <form onSubmit={search}>
      <div className='flex justify-center gap-5 flex-wrap my-3'>
        <input className='px-2 outline-3 outline-blue-300 focus:outline-blue-700 outline rounded-sm' type="text" ref={inputRef} placeholder="What's on your mind..." defaultValue={query} />
        <button type="submit" className='border-2 border-gray-500 p-1 px-2 rounded-md hover:border-blue-700 hover:bg-blue-100 cursor-pointer'>
          Magical Search <FontAwesomeIcon icon={faMagicWandSparkles} />
        </button>
      </div>
    </form>
  )
}

export default SearchForm