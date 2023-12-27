import Link from 'next/link';
import React from 'react'

export const NotFound= () => {
  return (
    <>
    <div className='flex  flex-col '>
        <div >Song Not Found use search bar</div>
    <Link href={`/`}> 
     return to home page
    </Link>
    </div>
    
    </>
  )
}

export default NotFound;