import { client } from '@/sanity/lib/client';
import React, { Children } from 'react';
import { Song } from '../utils/Interface';
import SongCard from './SongCard';

type SongSideBarProps ={
    children: React.ReactNode
}

 

export const SongSideBar =({children}: SongSideBarProps) => {

    return (
        <>
            
                <div className='min-h-screen w-96 border-r-2  dark:border-indigo-500 border-blue-500'>
                    <div className='text-center py-2 mx-7 text-2xl border-b-2 border-r border-blue-500 dark:border-indigo-500 rounded-2xl dark:bg-indigo-800 bg-blue-200'>
                         My Default Song
                    </div>
                    {children}
                </div>


            
        </>
    )
}

export default SongSideBar;