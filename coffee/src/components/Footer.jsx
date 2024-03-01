import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gradient-to-r from-[#FFDCAB] to-[#AB6B2E] text-black rounded-t-3xl mt-8 md:mt-0 '>
        <div className='flex flex-col md:flex-row justify-between p-8 md:px-32 px-5 '>
                <div className='w-full md:w-1/4'>
                        <h1 className='font-semibold text-xl pb-4'>HalwoCoffee</h1>
                        <p className='text-sm '>Welcome to Our Coffe havent! Explore Our AroMatic brows, savor
                                Artisanal flavors , and distcover the perfect roas to elevate your daily ritual
                                 </p>
                </div>
                <div>
                        <h1 className='font-md text-xl pb-4 pt-5 md:pt-0 '>Links</h1>
                        <nav className='flex flex-col gap-2 '>
                                <a className='hover:text-backgroundColor transition-all cursor-pointer' href="/">Menu</a>
                                <a className='hover:text-backgroundColor transition-all cursor-pointer' href="/">About Us</a>
                                <a className='hover:text-backgroundColor transition-all cursor-pointer' href="/">Products</a>
                                <a className='hover:text-backgroundColor transition-all cursor-pointer' href="/">Reviews</a>
                        </nav>
                </div>

                <div>
                <h1 className='font-md text-xl pb-4 pt-5 md:pt-0 '>Menu</h1>
                        <nav className='flex flex-col gap-2 '>

                                <a className='hover:text-backgroundColor transition-all cursor-pointer' href="/">Cappuccino</a>
                                <a className='hover:text-backgroundColor transition-all cursor-pointer' href="/">Latte</a>
                                <a className='hover:text-backgroundColor transition-all cursor-pointer' href="/">Americano</a>
                               
                        </nav>
                </div>

                <div>
                <h1 className='font-md text-xl pb-4 pt-5 md:pt-0 '>Contact Us</h1>
                        <nav className='flex flex-col gap-2 '>
                                
                                <a className='hover:text-backgroundColor transition-all cursor-pointer' href="/">
                                        HalwoCoffe@gmail.com
                                </a>
                                <a className='hover:text-backgroundColor transition-all cursor-pointer' href="/">
                                        +251992914707
                                </a>
                                <a className='hover:text-backgroundColor transition-all cursor-pointer' href="/">
                                        Social Media 
                                </a>
                               
                        </nav>
                </div>
        </div>
                <div>
                        <p className='text-center py-4'>
                                @copyright developed by
                                <span className='text-backgroundColor '>We Developer</span>

                                All rights reserved 
                        </p>
                </div>
    </div>
  )
}

export default Footer