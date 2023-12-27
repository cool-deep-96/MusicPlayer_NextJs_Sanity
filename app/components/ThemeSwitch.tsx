"use client"
import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { DarkIcon , LightIcon} from './Icons';

const ThemeSwitch = () => {
    const {theme, setTheme} = useTheme();
    const [mount, setMount] = useState(false);
    useEffect(()=>{
        setMount(true);
    },[]);

    if(!mount){
        return null;
    }

  return (
    <button onClick={()=> setTheme(theme === "light"? "dark": "light")}>
        {theme === "light" ? <DarkIcon/>: <LightIcon/>}
   

        
    </button>
  )
}



export default ThemeSwitch;
