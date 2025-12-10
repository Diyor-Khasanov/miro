import React from 'react'

const Link = ({children}) => {
  return (
    <a href='#!' className='text-indigo-600 underline text-lg'>{children}</a>
  )
}

export default Link