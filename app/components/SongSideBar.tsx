
import React from 'react';

import About from './About';

type SongSideBarProps ={
    children: React.ReactNode
}

 

export const SongSideBar =({children}: SongSideBarProps) => {

    return (
        <>
            
                <div className='min-h-screen w-96 max-h-screen border-r-2  dark:border-indigo-500 border-blue-500'><About/>
                    <div className='text-center py-2 px-2 mx-7 text-2xl border-b-2 border-r border-blue-500 dark:border-indigo-500 rounded-2xl dark:bg-indigo-800 bg-blue-200'>
                         My Default Song
                          
                    </div>
                    <div className='h-5/6 overflow-scroll overflow-hidden overflow-x-hidden custom-scroll'>
                      {children}  
                    </div>
                    
                </div>
               
                   
                


            
        </>
    )
}

export default SongSideBar;