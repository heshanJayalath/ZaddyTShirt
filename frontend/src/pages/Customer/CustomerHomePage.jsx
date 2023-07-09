import React from 'react'
import Header from "../../components/Customer/Header.jsx"
import Hero from '../../components/Customer/Route/Hero.jsx'
import Categories from '../../components/Customer/Route/Categories.jsx'
import BestDeals from '../../components/Customer/Route/BestDeals.jsx'
import FeaturedProduct from '../../components/Customer/Route/FeaturedProducts.jsx'
import Sponsored from '../../components/Customer/Route/Sponsored.jsx'
import Footer from '../../components/Customer/Footer.jsx'
const CustomerHomePage = () => {
  return (
    <div>
       <Header activeHeading={1}/> 
       <Hero/>
       <Categories/>
       <BestDeals/>
       <Sponsored/>
       <FeaturedProduct/>
       <Footer/>
    </div>
  )
}

export default CustomerHomePage