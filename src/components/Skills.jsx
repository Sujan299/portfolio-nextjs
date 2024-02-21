import React from 'react'

const Skills = () => {
    return (
        <div>
            <h2 className='ml-11 mr-11 mb-7 text-2xl'>What I know</h2>
            <div className='ml-11 mr-11 flex flex-wrap justify-between bg-slate-500 px-6 py-9 rounded-sm mb-8'>
                <div className="card w-64 rounded-sm mb-8">
                    <h3>Frontend</h3>
                    <button  className='px-3 py-2 bg-slate-800 mr-1 mt-3 rounded-sm'>html</button>
                    <button className='px-3 py-2 bg-slate-800 mx-1 mt-3 rounded-sm'>css</button>
                    <button className='px-3 py-2 bg-slate-800 mx-1 mt-3 rounded-sm'>Tailwind</button>
                    <button className='px-3 py-2 bg-slate-800 mr-1 mt-3 rounded-sm'>Javscript</button>
                    <button className='px-3 py-2 bg-slate-800 mx-1 mt-3 rounded-sm'>React</button>
                    <button className='px-3 py-2 bg-slate-800 mx-1 mt-3 rounded-sm'>NextJS</button>
                </div>
                <div className="card w-64 rounded-sm mb-8">
                    <h3>Backend</h3>
                    <button  className='px-3 py-2 bg-slate-800 mr-1 mt-3 rounded-sm'>NodeJS</button>
                    <button className='px-3 py-2 bg-slate-800 mx-1 mt-3 rounded-sm'>ExpressJS</button>
                    <button className='px-3 py-2 bg-slate-800 mx-1 mt-3 rounded-sm'>EJS</button>
                </div>
                <div className="card w-64 rounded-sm mb-8">
                    <h3>Databases</h3>
                    <button  className='px-3 py-2 bg-slate-800 mr-1 mt-3 rounded-sm'>Mongos</button>
                    <button className='px-3 py-2 bg-slate-800 mx-1 mt-3 rounded-sm'>MySQL</button>
                    <button className='px-3 py-2 bg-slate-800 mr-1 mt-3 rounded-sm'>PostgreSQL</button>
                </div>
                <div className="card w-64 rounded-sm mb-8">
                    <h3>Technologies</h3>
                    <button  className='px-3 py-2 bg-slate-800 mr-1 mt-3 rounded-sm'>Github</button>
                </div>
            </div>
        </div>
    )
}

export default Skills