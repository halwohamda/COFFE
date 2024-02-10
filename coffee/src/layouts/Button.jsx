import React from 'react'

const Button = (props) => {
  return (
    <div>
        <button className='px-6 py-1 border-white bg-[#FFDCAB] hover:text-[#AB6B2E] transition-all rounded-full border-2 '>
                {props.title}
        </button>
    </div>
  )
}

export default Button