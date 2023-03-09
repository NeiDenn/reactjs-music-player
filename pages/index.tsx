/* import Head from 'next/head' */
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { NextPage } from 'next'
import { useState } from 'react'
import Song from '..//components/Song/Song';
import Audio from '@/components/Audio/Audio'

/* type Song = {
  id: number;
  title: string;
  artist: string;
  file: string;
  image: string;
} */

const SONGS: Song[] = [
{
  id: 0,
  title: 'Legends',
  artist: 'Juice Wrld',
  file: 'songs/Juice Wrld - Legends.mp3',
  image: '/covers/3.jpg'
},
{
  id: 1,
  title: 'Rockstar',
  artist: 'Post Malone',
  file: 'songs/Post Malone - rockstar.mp3',
  image: '/covers/2.jpg'
},
{
  id: 2,
  title: 'Dancing With Your Ghost',
  artist: 'Sasha Sloan',
  file: 'songs/Sasha Sloan - Dancing With Your Ghost.mp3',
  image: '/covers/1.jpg'
}]

export const getStaticProps = async() => {
  const allSongs: Song[] = SONGS;
  return {
    props: {
      songs: allSongs
    },
    revalidate: 3600
  }
}

const inter = Inter({ subsets: ['latin'] })

const Home: NextPage<{songs: Song[]}> = ({ songs }) => {

  const [trackPlaying, setTrackPlaying] = useState<number>(0)
  const [isPlaying, setIsPlaying] = useState<boolean>(false)

  return ( 
    <div className={styles.container}>
      <div className={styles.songPlaying}>
        <Song song={songs[trackPlaying]} isPlaying={isPlaying} />
      </div>

      <div className={styles.names}>
        <p className={styles.title}>Nombre</p>
        <p className={styles.artist}>Artista</p>
        <p className={styles.album}>Álbum</p>
      </div>

      <Audio isPlaying={isPlaying} setIsPlaying={setIsPlaying} songs={songs} trackPlaying={trackPlaying} 
      setTrackPlaying={setTrackPlaying} />
    </div>
  )
}

export default Home
