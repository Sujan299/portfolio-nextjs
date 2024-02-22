import React from 'react'
import Image from 'next/image'
import myImage from '../../public/myImage.png'

const Introduction = () => {
    return (
        <>
            <div className='ml-11 mt-10 mr-11 mb-11 flex justify-between flex-wrap bg-slate-500 px-6 py-9 rounded-sm'>
                <div className='flex flex-wrap items-center'>
                    <Image src={myImage} className='h-28 w-28 rounded-full' alt='image'/><h2 className='sm:ml-6 ml-3 text-2xl text-white'>Sujan Chaudhary<h5 className='text-sm opacity-60'>web developer</h5></h2>
                </div>
                <div className='flex items-center mx-2'>
                    <button className='sm:mt-1 mt-5 py-1 px-3 sm:ml-0 ml-1 rounded-sm bg-green-500'>Resume</button>
                </div>
            </div>
            </>
    )
}

export default Introduction