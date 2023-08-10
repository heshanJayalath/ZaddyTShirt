import React from 'react';
import Lottie from 'lottie-react';
import anime from '../Assets/Animations/animation_lktwtqsf.json'

const Loader = () => {
  
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Lottie loop={true} animationData={anime} width={200} height={200} />
    </div>
  )
}

export default Loader