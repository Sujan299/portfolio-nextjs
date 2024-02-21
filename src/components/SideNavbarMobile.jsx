import { Icon } from '@iconify/react';

export default function SideNavbarMobile({hidden}) {
    console.log(hidden)
    return (
        <nav className='w-[100vw] h-[100vh] fixed top-0 left-0 bg-slate-500 z-10 flex flex-col pl-16 pr-16 pt-14 md:hidden gap-y-6 hidden'>
            <div className='flex justify-between'>
                <div>
                    <Icon icon="material-symbols-light:circle" height={24} className='bg-green-500 rounded-xl border-none inline' />
                    <Icon icon="material-symbols-light:circle" height={24} className='bg-green-500 rounded-xl border-none inline' />
                    <Icon icon="material-symbols-light:circle" height={24} className='bg-green-500 rounded-xl border-none inline' />
                </div>
                <div>
                    <Icon icon="charm:cross" height={27} className='bg-green-500 rounded-xl border-none inline' />
                </div>
            </div>
            <ul>
                <li className='mb-6 h-6'><a href="/" className='transition-all ease-in-out duration-150 hover:pl-2 h-6 flex items-center'><Icon icon="mdi-light:home" className='inline mr-1' height={24} />Home</a></li>
                <li className='mb-6'><a href="/" className='transition-all ease-in-out duration-150 hover:pl-2 h-6 flex items-center'><Icon icon="ph:code" className='inline mr-1' height={24} />Code</a></li>
                <li className='mb-6'><a href="/" className='transition-all ease-in-out duration-150 hover:pl-2 h-6 flex items-center'><Icon icon="gridicons:trending" className='inline mr-1' height={24} />Trendings</a></li>
                <li className='mb-6'><a href="/mini-projects" className='transition-all ease-in-out duration-150 hover:pl-2 h-6 flex items-center'><Icon icon="arcticons:zoho-projects" className='inline mr-1' height={24} />Mini-projects</a></li>
            </ul>
            <hr />
            <ul>
                <h2 className='font-bold mb-4 text-2xl'>Socials</h2>
                <li className='mb-6'><a href="/" className='transition-all ease-in-out duration-150 hover:pl-2 h-6 flex items-center'><Icon icon="mingcute:github-line" className='inline mr-1' height={24} />Github</a></li>
                <li className='mb-6'><a href="/" className='transition-all ease-in-out duration-150 hover:pl-2 h-6 flex items-center'><Icon icon="uit:linkedin-alt" className='inline mr-1' height={24} />Linkedin</a></li>
            </ul>
        </nav>
    )
}