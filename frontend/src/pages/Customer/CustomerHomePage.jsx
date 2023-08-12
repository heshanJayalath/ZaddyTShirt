import React from 'react'
import Header from "../../components/Customer/Header.jsx"
import Hero from '../../components/Customer/Route/Hero.jsx'
import Categories from '../../components/Customer/Route/Categories.jsx'
import BestDeals from '../../components/Customer/Route/BestDeals.jsx'
import FeaturedProduct from '../../components/Customer/Route/FeaturedProducts.jsx'
import Sponsored from '../../components/Customer/Route/Sponsored.jsx'
import Footer from '../../components/Customer/Footer.jsx'
import SpecialOpptions from '../../components/Customer/Route/SpecialOpptions.jsx'
import Material from '../../components/Customer/Route/Material.jsx'
const CustomerHomePage = () => {
  return (
    <div>
       <Header activeHeading={1}/> 
       <Hero/>
        <SpecialOpptions/>
       <div className='flex w-full'>
        <div className='w-2.5/12'>
        <Categories/>
        <Material/>
        </div>
        <div className='w-9.5/12'>
        <BestDeals/>
        <FeaturedProduct/>
        <Sponsored/>
       
        </div>
       </div>
       
       
       <Footer/>
    </div>
  )
}

export default CustomerHomePage