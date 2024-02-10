import React from 'react'
import ReviewCard from '../layouts/ReviewCard'
import img1 from '../assets/review11.jpg'
import img2 from '../assets/review2.jpg'
import img3 from '../assets/review3.jpg'

const Review = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-backgroundColor'>
       <h1 className='font-semibold text-center text-4xl lg:mt-14 mt-24'>Customers Review</h1>
       <div className='flex flex-col lg:flex-row gap-5 justify-center py-4 my-8'>
        <ReviewCard  img={img1} title="Avav Razhitt"  />
        <ReviewCard img={img2} title="Halwa Adem" />
        <ReviewCard img={img3} title="Varhia Kader" />
       </div>
    </div>
  )
}

export default Review