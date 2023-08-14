import React from 'react'
import styles from '../../../Styles/Customer/styles'
import { Link } from 'react-router-dom'

const Hero = () => {


    return (
        <div className={`relative min-h-[70vh] 800px:min-h[80vh]  hidden w-full bg-no-repeat md:flex ${styles.noramlFlex}`}
            style={{
                backgroundImage: `url("https://d24ckpbeefupyb.cloudfront.net/images/Embroidery/custom-t-shirts-banner.jpg")`,
                backgroundSize: 'cover',
                zIndex:"-10"
            }}
        >
        <Link to="/products" className="absolute bottom-[20%] left-[20%]">
            <div className={`${styles.button} mt-5`}>
                <span className='text-[#fff] font-[400] text-[18px]'>
                    Shop Now
                </span>
            </div>
        </Link>
        </div>
    )
}

export default Hero