import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const NavigationBar = () => {
  return (
    <>
      <nav className="bg-gray-800 z-50 relative">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            </div>
            <div className="flex-1 flex items-center sm:items-stretch justify-start">
              <Link to="/">
                  <p className='text-white text-3xl font-bold ml-4 hover:text-blue-200 hover:underline'>Geek Tunes</p>
              </Link>
              
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <Link to="/search">
                <button type="button" className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                  <span className='w-6 inline-block'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavigationBar