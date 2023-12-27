"use client"

import { useEffect, useState } from "react";
import { useSound} from 'use-sound'




type PlaySongCardProps = {
    song: {
        audioFile: string,
      album: string,
      coverImage: string,
      releaseYear: string,
      artist: string,
      title: string,
      _id:string,
      slug: string,
      imageUrl : string,
      songUrl : string

    }
}

const PlaySongCard = ({song}: PlaySongCardProps) => {
    const [isPlay, setIsPlay] = useState(false);
    const [play, {stop}] = useSound(song.songUrl);

    useEffect(()=>{

    },[])
  
    console.log(stop);

  return (
    <>
    <div className='place-self-center'>
      <img src={`${song.imageUrl}`}/>
      <div className='flex max-w-screen-sm justify-between text-xl py-6 px-5'>
        <button>previous</button>
        <button onClick={()=>{setIsPlay(!isPlay); isPlay? stop():play()}}>{isPlay? 'Pause':'Play'}</button>
        <button>next</button>

      </div>
      
    </div>
    </>
  )
}

export default PlaySongCard