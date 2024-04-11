import React from 'react'

const Header = () => {
    return (
        <header className='bg-[#3D3D46] z-10 py-4 fixed top-0 right-0 left-0 shadow-sm shadow-white' >
            <div className="w-10/12 mx-auto flex justify-between items-center
             max-lg:w-11/12">
                <div >
                    <h1 className='text-xl font-bold text-white'>DIMATRI</h1>
                </div>
                <div>
                    <nav>
                        <ul className='flex justify-between gap-8 text-sm opacity-75 max-sm: hidden' >
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Product</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </nav>
                </div>
                <div>
                    <button className='bg-[#1A89E2] px-6 py-1.5 rounded-[.6rem] hover:opacity-75 '>Subscribe</button>
                </div>
            </div>
        </header>
    )
}

export default Header
