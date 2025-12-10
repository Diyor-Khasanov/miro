import React from 'react'

const Props = (prop) => {
  let { name, lastName, age } = prop
  age = Number(age);
  return (
    <div className='m-2 max-w-max py-4 px-8 rounded text-2xl font-bold bg-amber-600 text-white'>Welcome {name} {lastName}. You are {age} years old</div>
  )
}

export default Props