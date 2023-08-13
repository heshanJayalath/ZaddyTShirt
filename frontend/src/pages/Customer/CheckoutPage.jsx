import React from 'react'
import Header from '../../components/Customer/Header'
import CheckoutSteps from '../../components/Customer/CheckoutSteps'
import Checkout from '../../components/Customer/Checkout'
import Footer from '../../components/Customer/Footer'

const CheckoutPage = () => {
    return (
        <div>
            <Header />
            <br />
            <br />
            <CheckoutSteps active={1} />
            <Checkout />
            <br />
            <br />
            <Footer />
        </div>
    )
}

export default CheckoutPage