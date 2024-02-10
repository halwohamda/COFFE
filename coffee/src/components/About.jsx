import React from 'react';
import Button from "../layouts/Button";
import img from "../assets/about.jpg";

const About = () => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center lg:px-32 px-5 bg-backgroundColor'>
        <h1 className='font-semibold text-center text-4xl lg:mt-14 mt-24 mb-8 '>About Us</h1>
        <div className='flex flex-col lg:flex-row items-center gap-5 '>
                <div className='w-full lg:w-2/4  ' >
                        <img src={img} alt="" className='rounded-lg '/>
                </div>
                <div className='w-full lg:w-2/4 p-4 space-y-3 '>
                        <h2 className='font-semibold text-3xl '>What Makes Our Coffee special</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum ipsam assumenda necessitatibus sequi deleniti, rerum molestias eius aliquam sunt ab suscipit dignissimos quo!</p>

                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque mollitia velit beatae ducimus vero? Adipisci in enim obcaecati velit </p>

                       <Button title="Learn More" />
                </div>
        </div>
    </div>
  )
}

export default About