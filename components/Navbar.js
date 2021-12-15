import React from 'react'
import {BsGithub, BsTwitter, BsMedium} from 'react-icons/bs'
import Link from 'next/link'

export default function Navbar() {
    return (
        <div className='flex justify-between items-center px-10 py-7' style={{backgroundColor: "#99BF72"}}>
            <Link href="/#projects">Projects</Link>
            <div className='flex text-2xl md:text-4xl space-x-4 md:space-x-6'>
                <a href='https://twitter.com/jwarshack' target="_blank" rel="noopener noreferrer"><BsTwitter/></a>
                <a href='https://github.com/jwarshack' target="_blank" rel="noopener noreferrer"><BsGithub/></a>
                <a href='https://medium.com/@thelasthash' target="_blank" rel="noopener noreferrer"><BsMedium/></a>
            </div>
            <Link href="/#contact">Contact</Link>
        </div>
    )
}
