import { useState } from 'react'

const Player = () => {
  return (
    <>
      <nav className=" fixed bottom-0 w-full">
        <input type="range" className="w-full -mb-4" />
        <div className='bg-gray-800'>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center">
                <img className="h-full p-2" src='https://api.napster.com/imageserver/v2/albums/Alb.111750366/images/500x500.jpg' />
              </div>
              <div className="flex-1 flex items-center justify-center">
                <h3 class="text-white">Song Name</h3>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

              </div>
            </div>
          </div>
        </div>

      </nav>
    </>
  )
}

export default Player