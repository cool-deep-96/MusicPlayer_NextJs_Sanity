"use client"

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { NextButton, PauseButton, PlayButton, PreviousButton } from "./Icons";





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


    useEffect(() => {
      const handleLoadedMetadata = () => {
     
        const second:number = Math.floor(audioPlayer?.current?.duration || 0)
        setDuration(second);
        progressBar.current?.setAttribute('max', `${second}`);
      };
      
  
      if (audioPlayer.current) {
        audioPlayer.current.addEventListener('loadedmetadata', handleLoadedMetadata);
      }
  
      // Clean up the event listener when the component unmounts
      
    }, []);
   
    


    useEffect(()=>{
      ;
      const second:number = Math.floor(audioPlayer?.current?.duration || 0)
      setDuration(second);
      progressBar.current?.setAttribute('max', `${second}`);
 
    },[ audioPlayer.current?.onloadedmetadata]);

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
        progressBar.current!.value =`${audioPlayer.current?.currentTime}` ||"0";
        setCurrentPlayedTime(parseInt(progressBar.current?.value|| "0", 10));
        
        progressBar.current?.style.setProperty('--selected-region', `${(parseInt(progressBar.current?.value || "0", 10)/ duration )* 100}%`)
        animationId = requestAnimationFrame(sliding);
    

    }
  
    const changeRange = ()=>{
      const currentTimeInSeconds = parseInt(progressBar.current?.value || "0", 10);

      if (!isNaN(currentTimeInSeconds)) {
        audioPlayer.current!.currentTime = currentTimeInSeconds;
      }
      progressBar.current?.style.setProperty('--selected-region', `${(parseInt(progressBar.current?.value|| "0", 10)/ duration )* 100}%`)

      setCurrentPlayedTime(parseInt(progressBar.current?.value|| "0", 10));


      

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
    <div className=' lg:h-[550px] lg:w-[450px] place-self-center pb-8'>
      <div className=" ">
        <Image src={`${song.imageUrl}`} width={`${500}`} height={`${600}`} alt={`Song Cover Image`}/>
      </div>
      
      <audio  ref={audioPlayer} src={`${song.songUrl}`} ></audio>
      
      <div className="range">
        <input  type="range" className='w-full' defaultValue="0" ref={progressBar} onChange={changeRange} />
      </div>
      <div className="flex flex-row justify-between">
        <p>{calculateTime(currentPlayedTime)}</p>
      <p>{calculateTime(duration)}</p>
      </div>
      
      <div className='flex max-w-screen-sm justify-between text-xl py-6 px-5 '>

        <button><PreviousButton/></button>
        <button onClick={handleAudio}>{isPlaying? <PauseButton/>:<PlayButton/>}</button>
        <button><NextButton/></button>
        

      </div>
      
    </div>
    </>
  )
}

export default PlaySongCard