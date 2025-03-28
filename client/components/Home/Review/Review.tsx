import React from 'react'
import ReviewSlide from './ReviewSlide'

type Props = {}

const Review = (props: Props) => {
  return (
    <div className='pt-0 pb-30'>
      <h1 className='text-2xl sm:text-3xl text-center text-gray-900 dark:text-white font-bold'>
        30k+ Customer&apos;s Trust Us
      </h1>
      <span className='w-16 h-1 bg-blue-600 mx-auto mt-3 block'></span>
      <div className='w-[90%] sm:w-[80%] lg:w-[60%] mx-auto mt-16'>
        <ReviewSlide/>
      </div>
    </div>
  )
}

export default Review