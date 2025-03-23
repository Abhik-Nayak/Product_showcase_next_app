import { navLinks } from '@/constant/constant'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaShoppingBag } from 'react-icons/fa'
import { HiBars3BottomRight } from 'react-icons/hi2'

type Props = { openNav: () => void }

const Nav = ({ openNav }: Props) => {
    const [navBg, setNavBg] = useState(false);

    useEffect(() => {
        const handler = () => {
            if (window.scrollY >= 90) setNavBg(true);
            else setNavBg(false);
        };

        window.addEventListener("scroll", handler)
    }, [])
    return (
        <div className={`transition-all ${navBg ? 'bg-[#578FCA] shadow-md' : 'fixed bg-[#3674BF]'} duration-200 h-[12vh] z-[100] fixed w-full `}>
            <div className='flex items-center h-full justify-between sm:w-[80%] w-[90%] mx-auto'>
                <div className='text-white font-bold text-2xl sm:text-3xl'>Logo</div>
                {/* Navlink */}
                <div className='hidden lg:flex items-center space-x-10'>
                    {navLinks.map((link) => {
                        return (
                            <Link
                                href={link.url}
                                key={link.id}
                                className='text-white hover:text-green-300 font-semibold transition-all duration-200'>
                                <p>{link.label}</p>
                            </Link>
                        )
                    })}
                </div>
                <div className='flex items-center space-x-4'>
                    {/* Buy now button */}
                    <a href="#_" className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-[#578FCA] rounded-xl group">
                        <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-blue-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                            <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                        </span>
                        <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-[#3674B5] rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
                        <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white flex flex-row">
                            <FaShoppingBag className='mr-3 w-5 h-5' />
                            Buy now
                        </span>
                    </a>

                    {/* theme switch button */}
                    <HiBars3BottomRight className='w-8 h-8 cursor-pointer text-white lg:hidden' onClick={openNav} />
                </div>

            </div>
        </div>
    )
}

export default Nav