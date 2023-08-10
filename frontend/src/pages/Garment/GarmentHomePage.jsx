import React from 'react'
import styles from '../../Styles/Customer/styles'
import GarmentInfo from '../../components/Garment/new/GarmentInfo'
import GamrmentProfileData from '../../components/Garment/new/GamrmentProfileData'

const GarmentHomePage = () => {
  return (
    <div className={`${styles.section} bg-[#f5f5f5]`}>
         <div className="w-full flex py-10 justify-between">
          <div className="w-[25%] bg-[#fff] rounded-[4px] shadow-sm overflow-y-scroll h-[90vh] sticky top-10 left-0 z-10">
            <GarmentInfo isGarmentOwner={true} />
          </div>
          <div className="w-[72%] rounded-[4px]">
            <GamrmentProfileData isGarmentOwner={true} />
          </div>
         </div>
    </div>
  )
}

export default GarmentHomePage