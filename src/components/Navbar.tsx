import { Link } from 'react-router-dom'
import './Navbar.scss'

export default function Navbar() {
    return (
        <nav>
            <div className='nav-items'>
                <Link to="/" className='nav-item'>Home</Link>
                <Link to="/dashboard" className='nav-item'>Dashboard</Link>
                <Link to="/tasks" className='nav-item'>Tasks</Link>
            </div>
        </nav>
    )
}