import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import { Carrusel } from '../components/Carousel'
import Buttons from '../components/Buttons'
import { Container } from 'postcss'
import News from '../components/News'
import Banner from '../components/Banner'



export default function Home() {
  return (
    <div className='content-center'>
      <Head>
        <title>Municipalidad de La Rioja</title>
      </Head>
      <div className='bg-secondary content-center'>
      <Carrusel />
      <Buttons /> 
       <News />
       <Banner />
       <Buttons />
              </div>

    </div>
  )
}
