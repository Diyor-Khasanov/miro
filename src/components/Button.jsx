import React from 'react'

const Button = ({children}) => {
  return (
    <button className='bg-purple-600 text-white text-sm font-semibold px-4 py-2 m-2 rounded-2xl'>{children}</button>
  )
}

export default Button