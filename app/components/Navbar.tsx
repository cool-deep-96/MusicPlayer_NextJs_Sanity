import React from 'react'
import ThemeSwitch from './ThemeSwitch'
import { Lilita_One } from 'next/font/google'

const font = Lilita_One({weight: "400", subsets:["latin"]})

export const Navbar = () => {
    return (<>
    <div className='max-w-screen-sm mx-auto '>
        <div className=' flex flex-row  justify-between px-6 py-3 '>
            <div className={`flex items-center text-xl ${font.className}`}>Music <span className='text-pink-500 '> Player</span></div>
            <ThemeSwitch />
        </div>
    </div>
        
    </>

    )
}

