import type { Metadata } from 'next'
import { Inter, Fira_Code } from 'next/font/google'
import './globals.css'
import { Navbar } from '../components/Navbar'

import { Provider } from '../utils/Provider'
import SongSideBar from '../components/SongSideBar'
import { client } from '@/sanity/lib/client'
import { Song } from '../utils/Interface'
import SongCard from '../components/SongCard'


const inter = Inter({ subsets: ['latin'] })
const FiraCode = Fira_Code({subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}


const getSong = async () => {
  const querry = `
  *[_type == "song"] {
      title,
      slug,
      coverImage,
      artist,
      album,
      releaseYear,
      _id
  }
  `
  const data = await client.fetch(querry);
  return data
}

export const revalidate = 60;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const song: Song[] = await getSong();

  return (
    <html lang="en">
      <body className={`${FiraCode.className} h-full bg-blue-300 text-indigo-900 dark:bg-indigo-900 dark:text-blue-300 dark:selection:bg-purple-500`}>
        <Provider>
        <Navbar/>
        <main className='flex '>
        <SongSideBar>
        <div className='py-5 mx-2'>
                {
                    song?.length > 0 && song?.map((song) => {
                        const assetRefParts = song.coverImage.asset?._ref.split('-');
                        const id = assetRefParts && assetRefParts[1];
                        const format = assetRefParts && assetRefParts[3];
                        const ratio = assetRefParts && assetRefParts[2]
                        const assetUrl = `https://cdn.sanity.io/images/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/${process.env.NEXT_PUBLIC_SANITY_DATASET}/${id}-${ratio}.${format}`
                        



                        return (
                            
                            <div key={song._id}>
                                <SongCard song={song} assetUrl={assetUrl}/>
                            </div>
                
                        )
                    }
                    )
                }
            </div>
    
      </SongSideBar>
          <div className='flex justify-center w-full'>
            {children}
          </div>
          
          </main>
        </Provider>

      </body>
    </html>
  )
}
