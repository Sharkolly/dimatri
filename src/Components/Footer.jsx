import React from 'react'

const Footer = () => {
  return (
    <div className='w-9/12 mx-auto mt-20 mb-16 flex justify-between max-lg:w-10/12 max-lg:mt-12 max-xl:justify-center max-sm:w-[85%] max-sm:flex-col max-sm:mt-10'>
      <div className='max-xl:hidden'>
        <h1 className='text-2xl font-bold'>DIMATRI</h1>
      </div>
      <div className='flex justify-between gap-16 text-center flex-wrap max-lg:gap-12 max-lg:text-left max-sm:mt-5 max-sm:gap-8'>
        <div className='flex flex-col gap-4 opacity-85 max-sm:  '>
          <h1 className='text-xl font-bold'>Home</h1>
          
            <p className="text-[.9rem] opacity-75">About</p>
            <p className="text-[.9rem] opacity-75">Contact</p>
            <p className="text-[.9rem] opacity-75">Pricing</p>
            <p className="text-[.9rem] opacity-75">Services</p>
        </div>
        <div className='flex flex-col gap-4 opacity-85 max-sm: '>
          <h1 className='text-xl font-bold'>About</h1>
          <p className="text-[.9rem] opacity-75">Offers</p>
          <p className="text-[.9rem] opacity-75">Promotion</p>
          <p className="text-[.9rem] opacity-75">Terms and condition</p>
          <p className="text-[.9rem] opacity-75">More Information</p>
        </div>
        <div className='flex flex-col gap-4 opacity-85 max-sm:  '>
          <h1 className='text-xl font-bold'>Services</h1>
          <p className="text-[.9rem] opacity-75">Pricing</p>
          <p className="text-[.9rem] opacity-75">Products</p>
          <p className="text-[.9rem] opacity-75">Installation</p>
          <p className="text-[.9rem] opacity-75">F.A.Q</p>
        </div>
        <div className='flex flex-col gap-4 opacity-85 max-sm:  '>
          <h1 className='text-xl font-bold'>Contact</h1>
          <p className="text-[.9rem] opacity-75">Subscribe</p>
          <p className="text-[.9rem] opacity-75">Email: dimatriinfo@gmail.com</p>
          <p className="text-[.9rem] opacity-75">SponsorShip</p>
        </div>
      </div>
    </div>
  )
}

export default Footer