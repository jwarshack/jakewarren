import React from 'react'
import { BsTwitter, BsGithub, BsLinkedin, BsMedium } from 'react-icons/bs'

export default function Contact() {
    return (
        <div id="contact">
            <div className="flex flex-col space-y-10 py-20 px-10">
                <div className='flex text-3xl space-x-4 justify-center'>
                    <a href='https://twitter.com/jwarshack' target="_blank" rel="noopener noreferrer"><BsTwitter/></a>
                    <a href='https://github.com/jwarshack' target="_blank" rel="noopener noreferrer"><BsGithub/></a>
                    <a href='https://medium.com/@thelasthash' target="_blank" rel="noopener noreferrer"><BsMedium/></a>
                    <a href='https://www.linkedin.com/in/jake-warren-1279a5136/' target="_blank" rel="noopener noreferrer"><BsLinkedin/></a>
                </div>
                <p className="max-w-2xl text-center mx-auto">If you want to connect with me for work or just to chat, DM on <span><a className="contact-link" href='https://twitter.com/jwarshack' target="_blank" rel="noopener noreferrer">twitter</a></span> or shoot me an <span><a className="contact-link" href="mailto:jwarshack@gmail.com">email</a></span>!</p>
            </div>
            
        </div>
    )
}
