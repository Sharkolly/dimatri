import React from 'react'

const Profile = () => {
    return (
        <section className='w-9/12 mx-auto max-lg:w-11/12 '>
            <div className='mt-28 bg-[#B7B7B7]/20 flex justify-between gap-20 px-7 py-10 rounded-md max-sm:flex-col-reverse gap-7'>
            <div className='w-6/12 max-sm:w-full'>
                    <div className=''>
                        <h1 className="font-bold text-2xl mb-4"> DIMATRI MACHINES </h1>
                        <p className="opacity-75 text-sm text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum aperiam ad quos quo dicta vero dolorum quidem officia ratione placeat cum eius voluptatibus, dolor optio, a iusto similique odit obcaecati eos perferendis error! Optio iure, alias at rerum quos praesentium, minus sapiente voluptates aspernatur non aperiam neque obcaecati, veritatis mollitia maxime fuga libero nulla quidem! Saepe voluptas rerum ratione, molestiae libero animi aliquid nam voluptatibus a aut. Quibusdam aliquid tempora rem eveniet deleniti tenetur nisi, repellendus enim mollitia ratione quo blanditiis numquam excepturi asperiores. Maxime consectetur incidunt, corporis iure asperiores molestiae praesentium accusamus eos similique mollitia laudantium minus. Nobis, consequatur?</p>
                    </div>
                    <div className='mt-6'>
                        <button className='bg-[#1A89E2] px-3 py-1.5 mr-5 rounded-[.5rem] hover:opacity-75 text-sm'>Order Now</button>
                        <button className='bg-[#8E8E8E] px-3 py-1.5 rounded-[.5rem] hover:opacity-75 text-sm'> View More &gt; </button>
                    </div>
                </div>
                <div className='w-5/12 rounded-lg bg-white/60 max-sm:w-full h-64'>
                </div>

            </div>

            <div className='flex justify-between w-5/12 mx-auto items-center mt-7 h-auto text-center font-bold max-sm:w-8/12'>
                <div className="bg-white/70 py-3  px-3 rounded-xl">
                    <h1 className="text-black "> 2648+ <br />  Reviews</h1>
                </div>
                <div className='border-r-8 rounded-[.1rem] w-1.5 border-[#1A89E2] h-[4.5rem] flex items-center bg-white opacity-30'>

                </div>
                <div className="bg-white/70 py-3 px-3 rounded-lg">
                    <h1 className="text-black">537+ <br /> Ordered</h1>
                </div>
                <div className='border-r-8 rounded-[.1rem] w-1.5 border-[#1A89E2] h-[4.5rem] flex items-center bg-white opacity-30'>

                </div>
                <div className="bg-white/70 py-3 px-3 rounded-lg">
                    <h1 className="text-black">420+  <br /> Sold</h1>
                </div>

            </div>
        </section>
    )
}

export default Profile
