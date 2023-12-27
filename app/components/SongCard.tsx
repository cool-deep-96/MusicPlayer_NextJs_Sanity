import Link from "next/link"

type songTemplate = {

  song: {
    _id: string,
    slug: {
      current: string
    }
    title: string,
    artist: string,
    album: string,
    releaseYear: string,

  }
  ,
  assetUrl: string,


}

const SongCard = ({song, assetUrl}: songTemplate) => {
  return (
    <>
      <Link  href={`/song/${song.slug.current}`}>

        <div className='py-2 mt-8 flex flex-row border-b-2 dark:border-indigo-400 border-blue-400'>
          <div>
            <img src={`${assetUrl}`} className='h-20 w-20  ' />

          </div>
          <div className='pl-3 w-full'>
            <p>{song.title}</p>
            <p className='text-xs mb-3'>{song.artist}</p>
            <div className='flex flex-row justify-between text-xs'>
              <p>{song.album}</p>
              <p >{song.releaseYear}</p>

            </div>


          </div>


        </div>
      </Link>

    </>
  )
}

export default SongCard