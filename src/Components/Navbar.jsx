import {NavLink} from 'react-router-dom'
import logo from '../assets/logo.png'


export default function Navbar() {
  const linkClass = ({isActive}) => isActive ? "text-blue-900 font-bold border-b-2 text-xs sm:text-sm md:text-md lg:text-lg" : "text-xs sm:text-sm md:text-md lg:text-lg text-blue-900 hover:underline";

  return (
    <>
    <div className='flex px-3 lg:px-8 bg-blue-50 sticky top-0 z-50 w-full max-w-full overflow-hidden text-amber-950 font-semibold justify-between font-semi-bold'>
    <img src={logo} alt="lofo" className=' md:w-35 w-20 lg:w-50' />
    <nav className='flex justify-center text-blue-900 gap-1.5 lg:gap-3 items-center'>
        <NavLink to="/" className={linkClass}>Home</NavLink>
        <NavLink to="/blog" className={linkClass}>Blog</NavLink>
        <NavLink to="/checklist" className={linkClass}>Checklist</NavLink>
        <NavLink to="/progress" className={linkClass}>Progress</NavLink>
        <NavLink to="/books" className={linkClass}>Books</NavLink>
    </nav>
    </div>
    </>
  )
}
