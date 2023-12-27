import Link from "next/link"
import { Lilita_One } from "next/font/google"
import { BackArrow } from "./Icons"

const font = Lilita_One({weight: "400", subsets:["latin"]})

export const CmsNavbar = () => {
  return (
    <div className={`${font.className} flex justify-between items-center py-1 px-10`}>
        <Link href='/'>
          <BackArrow/>
        </Link>
        <div className={`flex items-center text-xl ${font.className}`}>Music <span className='text-pink-500'> Player</span></div>
        
    </div>
  )
}



