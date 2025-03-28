'use client'

import React, { useState } from 'react'
import Nav from './Nav'
import MobileNav from './MobileNav'

const ResponsiveNav = () => {
  const [openSidebar,setOpensidebar] = useState<boolean>(false);
  const showNav=()=>setOpensidebar(true);
  const hideNav=()=>setOpensidebar(false);
    return (
    <div>
        <Nav openNav={showNav}/>
        <MobileNav open={openSidebar} closeNav={hideNav} />
    </div>
  )
}

export default ResponsiveNav