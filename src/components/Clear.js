import React from 'react'

export const Clear = ({handleclear}) => {
  return (
    <div className='mb-4   '><button onClick={handleclear} className='border-2 border-black bg-red-500 text-white w-28 h-9'>clear</button></div>
  )
}
