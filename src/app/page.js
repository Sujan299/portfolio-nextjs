'use client'
import TopNavbar from '../components/TopNavbar.jsx';
import SideNavbar from '../components/SideNavbar';
import Introduction from '../components/Introduction'
import Projects from '../components/Projects';
import Skills from '../components/Skills';
export default function Home() {

  return (
    <div className='bg-custom-dark'>
      <TopNavbar />
      <div className='flex'>
        <div className='bg-custom-darkOne sm:ml-7 ml-0 rounded-sm'>
          <SideNavbar />
        </div>
        <div className='w-[100vw] md:w-[80vw] bg-custom-dark'>
          <Introduction />
          <Projects />
          <Skills />
        </div>

      </div>
    </div>
  )
}