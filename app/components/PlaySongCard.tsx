"use client"

import { useEffect, useRef, useState } from "react";





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
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState<number>(0);
    const [currentPlayedTime, setCurrentPlayedTime] = useState<number>(0);
    let animationId: number;


    const audioPlayer = useRef<HTMLAudioElement | null>(null);
    const progressBar = useRef<HTMLInputElement| null>(null);
   



    useEffect(()=>{
      const second:number = Math.floor(audioPlayer?.current?.duration || 0)
      setDuration(second);
      progressBar.current?.setAttribute('max', `${second}`);
 
    },[audioPlayer?.current?.onloadedmetadata, audioPlayer?.current?.readyState])

    const handleAudio = () =>{
      if(!isPlaying){
        audioPlayer?.current?.play();
        setIsPlaying(true);
        sliding();
       
 
      } else {
        audioPlayer?.current?.pause();
        setIsPlaying(false);
        cancelAnimationFrame(animationId);
        
        
      }
      
    }

    const sliding = ()=>{
        progressBar.current!.value=`${audioPlayer.current?.currentTime}` ||"0";
        setCurrentPlayedTime(parseInt(progressBar.current?.value|| "0", 10));
        animationId = requestAnimationFrame(sliding);
        
        
        
      

    }
    const changeRange = ()=>{
      const currentTimeInSeconds = parseInt(progressBar.current?.value || "0", 10);

      if (!isNaN(currentTimeInSeconds)) {
        audioPlayer.current!.currentTime = currentTimeInSeconds;
      }

  
      console.log(parseInt(progressBar.current?.value|| "0", 10))


      

    }

    const calculateTime = (second: number) => {
      const hours: number = Math.floor(second/3600);
      const returnedHours = hours < 10 ? `0${hours}` : `${hours}`;
      const minutes: number = Math.floor((second%3600 )/ 60);
      const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
      const seconds : number= Math.floor(second % 60);
      const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
      return `${returnedHours== '00'? '':returnedHours+':'}${returnedMinutes}:${returnedSeconds}`;
    }

    
  
    

  return (
    <>
    <div className='place-self-center'>
      <img src={`${song.imageUrl}`}/>
      <audio ref={audioPlayer} src={`${song.songUrl}`}></audio>
      
      <div>
        <input  type="range" className='w-full' defaultValue="0" ref={progressBar} onChange={changeRange} />
      </div>
      <div className="flex flex-row justify-between">
        <p>{calculateTime(currentPlayedTime)}</p>
      <p>{calculateTime(duration)}</p>
      </div>
      
      <div className='flex max-w-screen-sm justify-between text-xl py-6 px-5'>

        <button>previous</button>
        <button onClick={handleAudio}>{isPlaying? 'Pause':'Play'}</button>
        <button>next</button>
        

      </div>
      
    </div>
    </>
  )
}

export default PlaySongCard