import React from 'react'
import image1 from '../svg/Product/Group-1.svg'
import image2 from '../svg/Product/Group-2.svg'
import image3 from '../svg/Product/Group-3.svg'
import image4 from '../svg/Product/Group.svg'

const Product = () => {
    return (
        <div className='w-9/12 mx-auto my-7 max-lg:w-11/12'>
            <div className='text-center text-[#87BFEB]'>
                <h1 className='text-3xl font-bold'>Our Product</h1>
                <p className='text-[.6rem] opacity-70'>What We Sell To Our Customers</p>
            </div>

            <div className='flex justify-around my-9 max-sm:flex-col gap-6'>
                <div className='bg-[#B7D3E8] w-80 h-80 rounded-full max-sm:mx-auto '>
                    <img src={image4}   className='mt-8 scale-[0.97]'  alt="" />
                </div>
                <div className='w-7/12 mb-8 max-lg:w-6/12  max-sm:w-11/12 mx-auto '>
                    <h1 className='text-[1.7rem] opacity-80 font-bold text-right'>Lorem Ipsum</h1>
                    <p className='mt-3 mb-5 text-[#8C8C8C] text-xs text-justify' >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi cupiditate amet non aspernatur, tenetur ipsam! Incidunt numquam, aut aliquam, quae ad porro quia consequatur unde quo, praesentium repellat rerum harum ipsum. Similique, iste dolorum, voluptates tempora placeat, voluptatibus veniam inventore quae modi reiciendis labore beatae blanditiis ducimus eum unde? Nulla, maxime laudantium nostrum numquam saepe quia quasi ipsum voluptatibus praesentium qui fugit odio assumenda officia! Minus distinctio explicabo beatae animi neque molestias illo aut quisquam ducimus corrupti odio nemo nam cumque voluptatibus fuga enim quas totam odit, unde quod ipsum! Consequuntur in, consectetur, ab ducimus eligendi iste voluptates cumque, ut nihil necessitatibus fuga nemo dolorem quia quam nulla atque eaque corporis accusantium. Non voluptatibus libero necessitatibus labore accusamus fugit ex voluptatem, explicabo nostrum nisi ad inventore in, laboriosam dolores, provident vero rerum rem. Quam ratione error illum voluptate ab sed eum laborum quae. Voluptas dignissimos nostrum repellendus cupiditate qui ipsum molestiae amet accusamus iste dolore sequi laborum, eaque, labore maxime nisi vel culpa. Sed, doloribus placeat hic veniam saepe est molestias laboriosam beatae voluptates cumque sapiente vel quibusdam et6assumenda possimus ex rerum odit similique blanditiis ipsam. Tenetur repudiandae explicabo facilis, aliquam debitis iusto molestiae natus sed voluptatem inventore rerum!!</p>
                    <hr className='bg-[#B7D3E8]/80 w-full border-none rounded-sm h-1' />
                </div>
            </div>
            <div className='flex justify-around my-7 max-sm:flex-col-reverse gap-6 my-12'>
                <div className='w-7/12 mb-8 max-lg:w-6/12  max-sm:w-11/12 mx-auto '>
                    <h1 className='text-[1.7rem] opacity-80 font-bold'>Lorem Ipsum</h1>
                    <p className='mt-3 mb-5 text-[#8C8C8C] text-xs text-justify' >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi cupiditate amet non aspernatur, tenetur ipsam! Incidunt numquam, aut aliquam, quae ad porro quia consequatur unde quo, praesentium repellat rerum harum ipsum. Similique, iste dolorum, voluptates tempora placeat, voluptatibus veniam inventore quae modi reiciendis labore beatae blanditiis ducimus eum unde? Nulla, maxime laudantium nostrum numquam saepe quia quasi ipsum voluptatibus praesentium qui fugit odio assumenda officia! Minus distinctio explicabo beatae animi neque molestias illo aut quisquam ducimus corrupti odio nemo nam cumque voluptatibus fuga enim quas totam odit, unde quod ipsum! Consequuntur in, consectetur, ab ducimus eligendi iste voluptates cumque, ut nihil necessitatibus fuga nemo dolorem quia quam nulla atque eaque corporis accusantium. Non voluptatibus libero necessitatibus labore accusamus fugit ex voluptatem, explicabo nostrum nisi ad inventore in, laboriosam dolores, provident vero rerum rem. Quam ratione error illum voluptate ab sed eum laborum quae. Voluptas dignissimos nostrum repellendus cupiditate qui ipsum molestiae amet accusamus iste dolore sequi laborum, eaque, labore maxime nisi vel culpa. Sed, doloribus placeat hic veniam saepe est molestias laboriosam beatae voluptates cumque sapiente vel quibusdam et assumenda possimus ex rerum odit similique blanditiis ipsam. Tenetur repudiandae explicabo facilis, aliquam debitis iusto molestiae natus sed voluptatem inventore rerum!!</p>
                    <hr className='bg-[#C8C8C8]/80 w-full border-none rounded-sm h-1' />
                </div>
                <div className='bg-[#C8C8C8] w-80 h-80 rounded-full max-sm:mx-auto '>
                <img src={image2} className='mt-8 scale-[0.97]'  alt="" />
                </div>
            </div>
            <div className='flex justify-around my-7 max-sm:flex-col gap-6 my-12'>
                <div className='bg-[#3A99E4] w-80 h-80 rounded-full max-sm:mx-auto '>
                <img src={image1} className='mt-8 scale-[0.97]'  alt="" />
                </div>
                <div className='w-7/12 mb-8 max-lg:w-6/12  max-sm:w-11/12 mx-auto '>
                    <h1 className='text-[1.7rem] opacity-80 font-bold text-right'>Lorem Ipsum</h1>
                    <p className='mt-3 mb-5 text-[#8C8C8C] text-xs text-justify' >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi cupiditate amet non aspernatur, tenetur ipsam! Incidunt numquam, aut aliquam, quae ad porro quia consequatur unde quo, praesentium repellat rerum harum ipsum. Similique, iste dolorum, voluptates tempora placeat, voluptatibus veniam inventore quae modi reiciendis labore beatae blanditiis ducimus eum unde? Nulla, maxime laudantium nostrum numquam saepe quia quasi ipsum voluptatibus praesentium qui fugit odio assumenda officia! Minus distinctio explicabo beatae animi neque molestias illo aut quisquam ducimus corrupti odio nemo nam cumque voluptatibus fuga enim quas totam odit, unde quod ipsum! Consequuntur in, consectetur, ab ducimus eligendi iste voluptates cumque, ut nihil necessitatibus fuga nemo dolorem quia quam nulla atque eaque corporis accusantium. Non voluptatibus libero necessitatibus labore accusamus fugit ex voluptatem, explicabo nostrum nisi ad inventore in, laboriosam dolores, provident vero rerum rem. Quam ratione error illum voluptate ab sed eum laborum quae. Voluptas dignissimos nostrum repellendus cupiditate qui ipsum molestiae amet accusamus iste dolore sequi laborum, eaque, labore maxime nisi vel culpa. Sed, doloribus placeat hic veniam saepe est molestias laboriosam beatae voluptates cumque sapiente vel quibusdam et assumenda possimus ex rerum odit similique blanditiis ipsam. Tenetur repudiandae explicabo facilis, aliquam debitis iusto molestiae natus sed voluptatem inventore rerum!!</p>
                    <hr className='bg-[#3A99E4]/80 w-full border-none rounded-sm h-1' />
                </div>
            </div>
            <div className='flex justify-around my-7 max-sm:flex-col-reverse gap-6 my-12'>
                <div className='w-7/12 mb-8 max-lg:w-6/12  max-sm:w-11/12 mx-auto'>
                    <h1 className='text-[1.7rem] opacity-80 font-bold'>Lorem Ipsum</h1>
                    <p className='mt-3 mb-5 text-[#8C8C8C] text-xs text-justify' >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi cupiditate amet non aspernatur, tenetur ipsam! Incidunt numquam, aut aliquam, quae ad porro quia consequatur unde quo, praesentium repellat rerum harum ipsum. Similique, iste dolorum, voluptates tempora placeat, voluptatibus veniam inventore quae modi reiciendis labore beatae blanditiis ducimus eum unde? Nulla, maxime laudantium nostrum numquam saepe quia quasi ipsum voluptatibus praesentium qui fugit odio assumenda officia! Minus distinctio explicabo beatae animi neque molestias illo aut quisquam ducimus corrupti odio nemo nam cumque voluptatibus fuga enim quas totam odit, unde quod ipsum! Consequuntur in, consectetur, ab ducimus eligendi iste voluptates cumque, ut nihil necessitatibus fuga nemo dolorem quia quam nulla atque eaque corporis accusantium. Non voluptatibus libero necessitatibus labore accusamus fugit ex voluptatem, explicabo nostrum nisi ad inventore in, laboriosam dolores, provident vero rerum rem. Quam ratione error illum voluptate ab sed eum laborum quae. Voluptas dignissimos nostrum repellendus cupiditate qui ipsum molestiae amet accusamus iste dolore sequi laborum, eaque, labore maxime nisi vel culpa. Sed, doloribus placeat hic veniam saepe est molestias laboriosam beatae voluptates cumque sapiente vel quibusdam et assumenda possimus ex rerum odit similique blanditiis ipsam. Tenetur repudiandae explicabo facilis, aliquam debitis iusto molestiae natus sed voluptatem inventore rerum!!</p>
                    <hr className='bg-[#D7D7D7]/80 w-full border-none rounded-sm h-1' />
                </div>
                <div className='bg-[#8C8C8C] w-80 h-80 rounded-full max-sm:mx-auto '>
                <img src={image3} className='mt-8 scale-[0.97]'  alt="" />
                </div>
            </div>
        </div>
    )
}

export default Product
