import React from 'react'

const Compareslideup = () => {
  return (
    <div className='flex flex-row h-40 w-full bg-gray-500/50 ml-2 mr-2 bg-'>
      <div className='flex grid-cols-4 gap-5 items-center content-center'>
      <div className=''>
      <h1>First image</h1>
      </div>
      <div className=''>
      <h1>second image</h1>
      </div>
      <div className=''>
      <h1>third image</h1>
      </div>
      <div className=''>
      <button className='rounded-md p-2 text-white bg-blue-500 '>Compare</button>
      </div>
      </div>
    </div>
  )
}

export default Compareslideup
