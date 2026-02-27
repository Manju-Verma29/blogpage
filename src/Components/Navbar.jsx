import {Link} from 'react-router-dom'
import logo from '../assets/logo.png'


export default function Navbar() {
  return (
    <>
    <div className=' flex p-3 text-neutral-400 justify-between font-semi-bold'>
    <img src={logo} alt="" className='w-35 lg:w-50' />
    <nav className='flex justify-center gap-3 items-center'>
        <Link to='/'>Home</Link>
        <Link to="/checklist">Checklist</Link>
        <Link to="/progress">Progress</Link>
    </nav>
    </div>
    </>
  )
}
