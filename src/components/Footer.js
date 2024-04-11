import React from 'react'

export const Footer = () => {
    const date=new Date();
  return (
    <div className='bg fixed bottom-0 w-full bg-blue-300 text-center py-2'>
      &copy; {date.getFullYear()} Your Company Name
    </div>
  )
}
