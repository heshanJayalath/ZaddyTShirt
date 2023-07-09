import React from 'react'
import styles from '../../../Styles/Customer/styles'

const Sponsored = () => {
    return (
        <div className={`${styles.section} hidden sm:block bg-white py-10 px-5 mb-12 cursor-pointer rounded-xl`}>
            <div className='flex justify-between w-full'>
                <div className='flex items-start'>
                    <img src='https://logos-world.net/wp-content/uploads/2020/04/Nike-Logo-700x394.png' style={{width:"150px", objectFit:"contain"}} />
                </div>
                <div className='flex items-start'>
                    <img src='https://logos-world.net/wp-content/uploads/2020/04/Adidas-Logo-700x394.png' style={{width:"150px", objectFit:"contain"}} />
                </div>
                <div className='flex items-start'>
                    <img src='https://logos-world.net/wp-content/uploads/2020/04/Air-Jordan-Logo-700x394.png' style={{width:"150px", objectFit:"contain"}} />
                </div>
                <div className='flex items-start'>
                    <img src='https://logos-world.net/wp-content/uploads/2020/12/Kappa-Logo-700x394.png' style={{width:"150px", objectFit:"contain"}} />
                </div>
                <div className='flex items-start'>
                    <img src='https://logos-world.net/wp-content/uploads/2020/04/Puma-Logo-700x394.png' style={{width:"150px", objectFit:"contain"}}  />
                </div>
            </div>
        </div>
    )
}

export default Sponsored