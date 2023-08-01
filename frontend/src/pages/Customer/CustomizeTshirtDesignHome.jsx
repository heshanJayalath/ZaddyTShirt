import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useSnapshot } from 'valtio';
import state from '../../store';
import logo from '../../Assets/Customer/CustomerHomePage/Logo.jpg'
import CustomButton from '../../components/Customer/CustomButton';
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation
} from '../../config/motion'

const CustomizeTshirtDesignHome = () => {
  const snap = useSnapshot(state);
  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className='home' {...slideAnimation('left')}>
          <motion.header {...slideAnimation("down")}>
            <img
              src={logo}
              alt='logo'
              className='w-20 h-20 object-contain'
            />
          </motion.header>
          <motion.div className='home-content' {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className='head-text'>Build Your Imagination</h1>
            </motion.div>
            <motion.div {...headContentAnimation} className='flex flex-col gap-5'>
              <p className='max-w-md font-normal text-gray-600 text-base'>
                Create yout unique and exclusive shirt with our brand-new 3D customization tool.Define your own style.
              </p>
              <CustomButton
                type="filled"
                title="Customize It"
                handleClick ={()=> state.intro =false}
                customStyles ="w-fit px-4 py-2.5 font-bold text-sm"

              />
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  )
}

export default CustomizeTshirtDesignHome