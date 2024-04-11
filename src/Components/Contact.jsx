import React from 'react';
import image6 from '../svg/Reviews/Group 7.svg'

const Contact = () => {
  return (
    <div className='bg-[#000] w-full py-24'>
          <div className='w-9/12 mx-auto flex justify-around items-center max-lg:gap-20 max-sm:flex-col-reverse  '>
              <div className=''>
                  <h1 className='text-center text-4xl font-bold mb-9 max-lg:text-3xl max-sm:text-xl mt-8'>Subscribe To Our <br /> NewsLetter</h1>

                  <div className='text-left '>
                      <input type="text" placeholder='Email address' className='w-full mb-5 bg-transparent border-b-4 pb-2 mt-2 focus: outline-none' name="" id="" />
                      <button type='submit' className='bg-[#1A89E2] px-6 py-1.5 rounded-[.6rem] hover:opacity-75 '>Subscribe</button>
                  </div>
              </div>
              <div>
                  <img src={image6} alt="" />
              </div>
      </div>
    </div>
  )
}

export default Contact
