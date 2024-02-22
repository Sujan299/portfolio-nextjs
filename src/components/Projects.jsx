import React from 'react'
import Image from 'next/image'
// import myImage from '../../public/myImage.jpg'
import Crypto from '../../public/projectsThumbail/crypto.png'
import Portfolio from '../../public/projectsThumbail/portfolio.png'
import Blogging from '../../public/projectsThumbail/blogging.png'
import Videohub from '../../public/projectsThumbail/videohub.png'

const Projects = () => {
  return (
    <div className='mb-11'>
        <h2 className='ml-11 mr-11 mb-6 text-2xl'>Projects</h2>
        <div className='ml-11 mr-11 flex justify-center flex-wrap bg-slate-500 px-6 py-9 rounded-sm'>
            <div className="card mb-8 mr-3">
                <Image src={Crypto} className='h-48 w-64 rounded-sm mb-2' alt='img' />
                <h4>Etherium</h4>
                <p className='opacity-60'>tech: Nextjs, react</p>
            </div>
            <div className="card mb-8 mr-3">
                <Image src={Blogging} className='h-48 w-64 rounded-sm mb-2' alt='img' />
                <h4>Etherium</h4>
                <p className='opacity-60'>tech: Nextjs, react</p>
            </div>
            <div className="card mb-8 mr-3">
                <Image src={Videohub} className='h-48 w-64 rounded-sm mb-2' alt='img' />
                <h4>Etherium</h4>
                <p className='opacity-60'>tech: Nextjs, react</p>
            </div>
            <div className="card mb-8 mr-3">
                <Image src={Portfolio} className='h-48 w-64 rounded-sm mb-2' alt='img' />
                <h4>Etherium</h4>
                <p className='opacity-60'>tech: Nextjs, react</p>
            </div>
        </div>
    </div>
  )
}

export default Projects;