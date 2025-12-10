import React from 'react'
import home from '../assets/home.png'
import stars from '../assets/stars.png';
import Button from '../components/Button';
import home1 from '../assets/home1.png';
import home2 from '../assets/home2.png';
import home3 from '../assets/home3.png';

const Home = ({title, des, input, textGray, starDes}) => {
  return (
    <div className='flex justify-around py-15'>
      <div className='max-w-[600px] flex flex-col gap-3'>
        <h1 className='text-7xl font-bold'>{title}</h1>
        <p className='text-2xl text-gray-600'>{des}</p>
        <form>
          <input type="email" placeholder={input} className='border border-gray-600 px-8 py-2 rounded-4xl'/>
          <Button>Sign Up Free</Button>
        </form>
        <span className='text-lg text-gray-500'>{textGray}</span>

        <div className='flex my-6 gap-7 bg-gray-100 max-w-max p-5 rounded-lg'>
          <div>
            <img src={stars} alt="" />
            <p>{starDes}</p>
          </div>

          <div className='flex gap-5 items-center'>
            <img src={home1} alt="Company 1" />
            <img src={home2} alt="Company 2" />
            <img src={home3} alt="Company 3" />
          </div>
        </div>
      </div>

      <div>
        <img src={home} alt="" />
      </div>
    </div>
  )
}

export default Home