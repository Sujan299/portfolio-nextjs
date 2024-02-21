import TopNavbar from '../components/TopNavbar.jsx';
import SideNavbar from '../components/SideNavbar';
import Introduction from '../components/Introduction'
import Projects from '../components/Projects';
import Skills from '../components/Skills';
export default function Home() {
  return (
    <div>
      <TopNavbar />
      <div className='flex'>
        <div className='bg-slate-500'>
          <SideNavbar />
        </div>
        <div className='w-[100vw] md:w-[80vw] bg-slate-800'>
          <Introduction />
          <Projects />
          <Skills /> 
        </div>
      </div>
    </div>
  )
}