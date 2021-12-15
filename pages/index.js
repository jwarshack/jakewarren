import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'
import Hero from '../components/Hero'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <div className='font-mono'>
      <Head>
        <title>Jake Warren</title>
      </Head>
      <Navbar/>
      <Hero/>
      <Projects/>
      <Contact/>
    </div>
    
  )
}
