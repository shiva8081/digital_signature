import React from 'react'

export const Footer = () => {
    const date=new Date();
  return (
    <div className='bg fixed bottom-0 bg-blue-300 '>copy right &copy; {date.getFullYear()}</div>
  )
}
