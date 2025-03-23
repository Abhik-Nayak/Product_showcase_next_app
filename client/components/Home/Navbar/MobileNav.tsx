import { navLinks } from '@/constant/constant'
import Link from 'next/link'
import React from 'react'
import { CgClose } from 'react-icons/cg'

type Props = {open:boolean ; closeNav:()=>void}

const MobileNav = ({open,closeNav}: Props) => {
    const navOpen = open? 'translate-x-0': "translate-x-[-100%]"
    return (
        <div>
            {/* Overlay */}
            <div className={`${navOpen} fixed inset-0  transform transition-all duration-500 z-[1002] bg-black opacity-70 w-full h-screen`} />
            <div className={`${navOpen} text-white fixed justify-center flex flex-col h-full transform transition-all duration-300 delay-300 w-[80%] sm:w-[60%] bg-[#3674B5] space-y-6 z-[1050]`}>
                {navLinks.map((link) => {
                    return (
                        <Link key={link.id} href={link.url}>
                            <p className='text-white w-fit text-xl ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px]'>
                                {link.label}
                            </p>
                        </Link>
                    )
                })}
                {/* close icon */}
                <CgClose className='absolute top-[0.7rem] cursor-pointer right-[1.5rem] sm:w-8 sm:h-8 w-6 h-6' onClick={closeNav}/>
            </div>





        </div>
    )
}

export default MobileNav