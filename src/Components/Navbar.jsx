import {Link} from 'react-router-dom'
import logo from '../assets/logo.png'


export default function Navbar() {
  return (
    <>
    <div className='flex px-3 bg-white border-b border-blue-900 sticky top-0 z-50 w-full  text-amber-950 font-semibold justify-between font-semi-bold'>
    <img src={logo} alt="" className='w-35 lg:w-50' />
    <nav className='flex justify-center  gap-3 items-center'>
        <Link to='/'>Home</Link>
        <Link to='/blog'>Blog</Link>
        <Link to="/checklist">Checklist</Link>
        <Link to="/progress">Progress</Link>
        <Link to="/books">Books</Link>
    </nav>
    </div>
    </>
  )
}
