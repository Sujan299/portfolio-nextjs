'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import projectDetails from './projectDetails'

const Projects = () => {
    return (
        <div className='mb-11'>
            <div className='ml-11 mr-11 mb-6 text-2xl text-white text-opacity-100 font-semibold'>Projects</div>
            <div className='ml-11 mr-11 flex justify-center flex-wrap bg-custom-dark px-6 py-9 gap-4'>
                {/* <Link href='/'> */}
                {
                    projectDetails.map((e) => {
                        return (<div>
                            <div className="card mb-8 mr-3 w-full sm:w-80 sm:h-auto">
                                <Image src={e.img} className='rounded-t-xl sm:w-80 sm:h-80' alt='img' />
                                <div className='bg-white text-black p-2 rounded-b-xl'>
                                    <h2 className='font-semibold'>{e.name}</h2>
                                    <div className='opacity-60'>Tech: {e.TechUsed}</div>
                                    <div className='flex justify-between mt-4'><button className='text-blue-500 opacity-95 rounded-sm'>
                                        <Link href={e.LiveLink} className='opacity-200 font-bold' target='_blank'>Live</Link>
                                    </button><Link href={e.gitHubLink} className='font-bold opacity-50' target='_blank'>github</Link></div>
                                </div>
                            </div>
                        </div>)
                    })
                }




            </div>
        </div>
    )
}

export default Projects;