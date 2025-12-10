import React from 'react'

const Button = ({children}) => {
  return (
    <button className='bg-indigo-600 text-white px-5 py-2 m-2 rounded-4xl'>{children}</button>
  )
}

export default Button