import Link from 'next/link';
import React from 'react'

export const NotFound= () => {
  return (
    <>
    <div className='flex  flex-col place-self-center'>
        <div className=''>Song Not Found</div>
    <Link href={`/`}> 
     return to home page
    </Link>
    </div>
    
    </>
  )
}

export default NotFound;