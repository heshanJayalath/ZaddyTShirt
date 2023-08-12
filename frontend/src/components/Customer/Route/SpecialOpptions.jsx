import React from 'react'
import { brandingData } from '../../../Static/Customer/data'
import styles from '../../../Styles/Customer/styles'

const SpecialOpptions = () => {
  return (
    <div className='bg-blue-50'>
      <div className={`${styles.section} hidden sm:block`}>
        <div
          className={`brandings mb-4 flex justify-between w-full shadow-sm bg-blue-50 p-8 rounded-md`}
        >
          {brandingData &&
            brandingData.map((i, index) => (
              <div className="flex mt-2 items-start" key={index}>
                <div className='mt-2 '>{i.icon}</div>
                
                <div className="px-3">
                  <h3 className="font-bold text-lg md:text-lg">{i.title}</h3>
                  <p className="text-sm md:text-base">{i.Description}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default SpecialOpptions
