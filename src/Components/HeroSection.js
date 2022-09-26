import React from 'react'
import ImageScroller from './Hero/ImageScroller'
import InfoSection from './Hero/InfoSection'
import SideNav from './Hero/SideNav'

const HeroSection = () => {
  return (
    <div className=' relative mx-auto top-[6.3rem]  flex lg:space-x-2 lg:max-w-8xl '>
        {/**side */}
        <div className='w-[20%] hidden lg:block'>
            <SideNav />
        </div>
        {/**scroller */}
        <div className='w-[100%] lg:w-[60%]'>
            <ImageScroller />
        </div>
 {/**scroller */}
 <div className='w-[20%]  hidden lg:block'>
            <InfoSection />
        </div>
    </div>
  )
}

export default HeroSection