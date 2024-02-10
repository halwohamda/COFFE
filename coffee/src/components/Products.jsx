import React from 'react'
import ProductsCard from '../layouts/ProductsCard'
import img1 from '../assets/product11.jpg'
import img2 from  '../assets/product2.webp'
import img3 from '../assets/product3.jpg'

const Products = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-backgroundColor'>
        <h1 className='font-semibold text-4xl text-center lg:mt-14 mt-24 mb-8'>Our Products</h1>
        <div className='flex flex-col lg:flex-row gap-12 justify-center '>
                <ProductsCard img={img1} title="Nespresso" />
                <ProductsCard img={img2} title="Aeropress" />
                <ProductsCard img={img3} title="Chemex" />
        </div>
    </div>
  )
}

export default Products