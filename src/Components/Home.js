import React from 'react'
import SubInfo from './Hero/SubInfo'
import HeroSection from './HeroSection'
import Products from './Products'
import AwesomeDeals from './Products/AwesomeDeals'
import BrandProducts from './Products/BrandProducts'
import ExlusiveCat from './Products/ExlusiveCat'
import FeaturedCat from './Products/FeaturedCat'
import FlashSale from './Products/FlashSale'
import OtherCat from './Products/OtherCat'
import TopItems from './Products/TopItems'
const Home = () => {
  return (
    <div className=''>
    <HeroSection />
    <SubInfo />
    <FlashSale />
    <BrandProducts />
    <FeaturedCat />
    <TopItems /> 
    <AwesomeDeals />
    <OtherCat />
    <ExlusiveCat />
   {/** */}
   {/** <Products /> */}
    </div>
  )
}

export default Home