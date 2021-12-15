import React from 'react'
import Image from 'next/image'
import elixir from '../public/elixir.png'
import cryptorings from '../public/thecryptorings.png'


export default function Projects() {
    return (
        <div id='projects'>
            <div className="flex flex-col space-y-10 py-20 px-10">
                <h2 className='text-3xl'>Projects</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div className='cursor-pointer'>
                        <Image className="rounded-xl" src={elixir}/>
                    </div>
                    <div className='cursor-pointer'>
                        <Image className="rounded-xl" src={cryptorings}/>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
