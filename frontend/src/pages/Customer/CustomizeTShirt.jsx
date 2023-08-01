import React from 'react'
import CustomizeTshirtDesignHome from './CustomizeTshirtDesignHome'
import Canvas from '../../Canvas'
import Customizer from './Customizer';

const CustomizeTShirt = () => {
  return (
    <main className='app transition-all ease-in'>
      <CustomizeTshirtDesignHome />
      {/* <Canvas /> */}
      <Customizer />
    </main>
  )
}

export default CustomizeTShirt