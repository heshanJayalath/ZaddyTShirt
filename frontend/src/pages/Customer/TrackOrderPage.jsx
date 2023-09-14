import React from 'react'
import Header from '../../components/Owner/shared/Header';
import Footer from '../../components/Customer/Footer';
import TrackOrder from '../../components/Customer/TrackOrder';

const TrackOrderPage = () => {
  return (
    <div>
        <Header />
        <TrackOrder />
        <Footer />
    </div>
  )
}

export default TrackOrderPage