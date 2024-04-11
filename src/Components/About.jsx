import React from 'react'
import img1 from '../svg/Group-1.svg';
import img2 from '../svg/Group-2.svg';
import img3 from '../svg/Group.svg'; 
import side1 from '../svg/Path-1.svg'; 
import side2 from '../svg/Path.svg'; 

const About = () => {
  return (
      <div className='my-16 relative overflow-hidden  '>
      <div>
        <h1 className='font-bold text-center text-[#87BFEB] text-3xl'>About Us</h1>
          </div> 

        {/* <div className='flex justify-between items-center relative'>
        </div> */}
        <img src={side1}className=' absolute top-10 translate-x-[-10rem] left-0' alt="" />
        <img src={side2} className=' absolute  top-10 right-[0rem] translate-x-[8rem] overflow-hidden ' alt="" />

          <div className='flex justify-between w-9/12 gap-7 mx-auto mt-6 opacity-90 max-lg:w-11/12 max-sm:gap-4 max-sm:flex-col-reverse' >
              <div className='w-4/12 bg-[#1A89E2]  rounded-md max-sm:w-full'>                                
                  <img src={img1}  className='w-full z-6 mt-4 max-sm:scale-[.9]' alt="" />

                  <div className='bg-[#87BFEB] mt-8 py-5  rounded-b-lg '>
                      <div className='bg-white mx-6 text-[#757575] px-3.5 py-3 rounded-lg' >
                          <h1 className='text-xl font-bold mb-2 text-center'>Engineering</h1>
                          <p className='text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias vel nisi atque alias autem sint dolor possimus dolore. Nostrum hic voluptas sunt itaque beatae fugiat saepe recusandae nisi delectus?</p>
                      </div>
                  </div>
              </div>
              <div className='w-4/12 bg-[#87BFEB] relative rounded-md max-sm:w-full '>
              <img src={img2}  className='w-full mt-4 max-sm:scale-[.9]'alt="" />

                  <div className='bg-[#969696] mt-8 py-5 rounded-b-lg  '>
                      <div className='bg-white mx-6 text-[#757575] px-3.5 py-3 rounded-lg ' >
                          <h1 className='text-xl font-bold mb-2 text-center'>Power</h1>
                          <p className='text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias vel nisi atque alias autem sint dolor possimus dolore. Nostrum hic voluptas sunt itaque beatae fugiat saepe recusandae nisi delectus?</p>
                      </div>
                  </div>
              </div>
              <div className='w-4/12 bg-[#969696]  relative rounded-md max-sm:w-full '>
              <img src={img3}  className='w-full mt-4  max-sm:scale-[.9]'alt="" /> 

                  <div className='bg-[#1A89E2] mt-8 py-5 rounded-b-lg '>
                      <div className='bg-white mx-6 text-[#757575] px-3.5 py-3 rounded-lg ' >
                          <h1 className='text-xl font-bold mb-2 text-center'>Recycling</h1>
                          <p className='text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias vel nisi atque alias autem sint dolor possimus dolore. Nostrum hic voluptas sunt itaque beatae fugiat saepe recusandae nisi delectus?</p>
                      </div>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default About
