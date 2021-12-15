import React from 'react'
import Image from 'next/image'

import jwar from '../public/shack.png'


export default function Hero() {
    return (
        <div id='landing'>
            <div className="flex flex-col md:flex-row space-y-10 items-center md:space-x-10 py-20 px-10 max-w-5xl mx-auto" style={{height: "650px"}}>
                <div>
                    <p className='text-lg'>Hi, I am</p>
                    <p className='ml-5 my-4 text-5xl font-bold'>Jake Warren</p>
                    <p >I am a full stack Web3 developer building dapps on the Ethereum network. I have a deep passion for learning and love decentralization!</p>
                </div>
                <div className='relative'>
                    <div className='absolute bg-blue-100 rounded-full self-end -top-20 opacity-10 left-5 invisible md:visible' style={{width: "300px", height: "300px"}}></div>
                    <Image className="rounded-full relative" width={300} height={300} src={jwar} layout='fixed'/>
                </div>

            </div>
        </div>
    )
}
