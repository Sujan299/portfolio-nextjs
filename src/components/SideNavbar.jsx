'use client'
import React from 'react'
import { Icon } from '@iconify/react';
export default function SideNavbar() {
    return (
        // flex flex-col justify-center
        // toogle hidden here
        <nav className='ml-14 mr-4 mt-9 gap-y-6 md:block  w-[50vw] h-[100vh] md:w-[30vw] lg:w-[18vw] xl:w-[15vw] hidden'>
            <ul>
                <li className='mb-6 h-6'><a href="/" className='transition-all ease-in-out duration-150 hover:pl-2 h-6 flex items-center'><Icon icon="mdi-light:home" className='inline mr-1' height={24}/>Home</a></li>
                <li className='mb-6'><a href="/" className='transition-all ease-in-out duration-150 hover:pl-2 h-6 flex items-center'><Icon icon="ph:code" className='inline mr-1' height={24}/>Code</a></li>
                <li className='mb-6'><a href="/" className='transition-all ease-in-out duration-150 hover:pl-2 h-6 flex items-center'><Icon icon="gridicons:trending" className='inline mr-1' height={24}/>Trendings</a></li>
                <li className='mb-6'><a href="/mini-porjects" className='transition-all ease-in-out duration-150 hover:pl-2 h-6 flex items-center'><Icon icon="arcticons:zoho-projects" className='inline mr-1' height={24}/>Mini-projects</a></li>
            </ul>
            <hr className ='my-5'/>
            <ul>
                <h2 className='font-bold mb-4 text-2xl'>Socials</h2>
                <li className='mb-6'><a href="/" className='transition-all ease-in-out duration-150 hover:pl-2 h-6 flex items-center'><Icon icon="mingcute:github-line" className='inline mr-1' height={24}/>Github</a></li>
                <li className='mb-6'><a href="/" className='transition-all ease-in-out duration-150 hover:pl-2 h-6 flex items-center'><Icon icon="uit:linkedin-alt" className='inline mr-1' height={24}/>Linkedin</a></li>
            </ul>
        </nav>
    )
}