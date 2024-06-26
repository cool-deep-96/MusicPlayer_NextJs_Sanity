
import PlaySongCard from '@/app/components/PlaySongCard';
import { client } from '@/sanity/lib/client'
import { notFound } from 'next/navigation';




interface Params {
    params: {songSlug: string}

}

const getSong = async (slug : string) => {

  const query = `
  *[_type == "song" && slug.current == "${slug}"][0] {
    audioFile,
      album,
      coverImage,
      releaseYear,
      artist,
      title,
      _id,
      slug,
      "imageUrl" : coverImage.asset->url,
      "songUrl" : audioFile.asset->url
  }
  `

  const songData = await client.fetch(query);

  return songData;
}

export const revalidate= 60;

export  default async  function Page({params}: Params){
  const songData = await getSong(params?.songSlug);
  
    
    
    if(!songData){
      return notFound();
    }

  return (<>
  <PlaySongCard song={songData}/>
  </>
    
  )
}


