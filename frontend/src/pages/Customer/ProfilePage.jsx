import React, { useState } from 'react'
import Header from '../../components/Customer/Header'
import ProfileSideBar from '../../components/Customer/ProfileSideBar'
import ProfileContent from '../../components/Customer/ProfileContent'
import styles from '../../Styles/Customer/styles'

const ProfilePage = () => {
    const [active, setActive] = useState(1);
  return (
    <div>
        
          <Header />
          <div className={`${styles.section} flex bg-[#f5f5f5] py-10`}>
            <div className="w-[335px] sticky 800px:mt-0">
              <ProfileSideBar active={active} setActive={setActive} />
            </div>
            <ProfileContent active={active} />
          </div>
        
    </div>
  )
}

export default ProfilePage