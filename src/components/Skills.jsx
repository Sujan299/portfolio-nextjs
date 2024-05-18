import React from 'react'

const Skills = () => {
    return (
        <div className=''>
            <div className='ml-11 mr-11 mb-7 text-2xl text-white text-opacity-100 font-semibold'>What I know</div>
            <div className='ml-11 mr-11 flex flex-wrap justify-between bg-custom-darkOne px-6 py-9 rounded-sm mb-8 '>
                <div className="card w-64 rounded-sm mb-8">
                    <div className=''>Frontend</div>
                    <button  className='px-3 py-2 mr-1 mt-3 rounded-lg bg-custom-dark'>html</button>
                    <button className='px-3 py-2 mx-1 mt-3 rounded-lg bg-custom-dark'>css</button>
                    <button className='px-3 py-2 mx-1 mt-3 rounded-lg bg-custom-dark border border-green-500'>Tailwind</button>
                    <button className='px-3 py-2 mr-1 mt-3 rounded-lg bg-custom-dark border border-yellow-200'>Javscript</button>
                    <button className='px-3 py-2 mx-1 mt-3 rounded-lg bg-custom-dark border border-green-500'>React</button>
                    <button className='px-3 py-2 mx-1 mt-3 rounded-lg bg-custom-dark'>NextJS</button>
                </div>
                <div className="card w-64 rounded-sm mb-8">
                    <div>Backend</div>
                    <button  className='px-3 py-2 bg-custom-dark mr-1 mt-3 rounded-lg border border-green-500'>NodeJS</button>
                    <button className='px-3 py-2 bg-custom-dark mx-1 mt-3 rounded-lg'>ExpressJS</button>
                    <button className='px-3 py-2 bg-custom-dark mx-1 mt-3 rounded-lg'>EJS</button>
                </div>
                {/* <div className="card w-64 rounded-sm mb-8">
                    <div>Databases</div>
                    <button  className='px-3 py-2 bg-slate-800 mr-1 mt-3 rounded-sm'>Mongos</button>
                    <button className='px-3 py-2 bg-slate-800 mx-1 mt-3 rounded-sm'>MySQL</button>
                    <button className='px-3 py-2 bg-slate-800 mr-1 mt-3 rounded-sm'>PostgreSQL</button>
                </div> */}
                <div className="card w-64 rounded-sm mb-8">
                    <div>Technologies</div>
                    <button  className='px-3 py-2 mr-1 mt-3 rounded-lg bg-custom-dark'>Github</button>
                </div>
            </div>
        </div>
    )
}

export default Skills