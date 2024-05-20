import React from 'react'
import Image from 'next/image'
import myImage from '../../public/myImage.png'
const resumeUrl = "http://localhost:3000/resume/resume.pdf"
const Introduction = () => {
    const downloadResume = (url)=>{
        const fileName=url.split("/").pop();
        const aTag = document.createElement("a");
        aTag.href=url;
        aTag.setAttribute("download",fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
    }
    return (
        <div className=''>
            <div className="xs:ml-11 mt-10 xs:mr-11 mr-0 ml-0 sm:ml-11 sm:mr-11 mb-11 flex justify-between flex-wrap bg-no-repeat bg-cover px-6 py-9 rounded-sm bg-[url('https://us.123rf.com/450wm/photodee/photodee1407/photodee140702127/30117298-blurred-of-car-in-city-at-night.jpg?ver=6')]">
                <div className='flex flex-wrap items-center'>
                    <Image src={myImage} className='h-28 w-28 rounded-full' alt='image'/><div className='sm:ml-6 ml-3 text-2xl text-white font-semibold'>Sujan Chaudhary<div className='text-sm opacity-60'>web developer</div></div>
                </div>
                <div className='flex items-center mx-2'>
                    <button onClick={()=>{downloadResume(resumeUrl)}} className='sm:mt-1 mt-5 py-1 px-3 sm:ml-0 ml-1 rounded-sm bg-green-500 text-white text-opacity-100'>
                        Resume
                    </button>
                </div>
            </div>
            </div>
    )
}

export default Introduction