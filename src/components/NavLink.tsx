import { Link } from "react-router-dom";
import './NavLink.scss'

interface Props {
    to: string
    name: string
}

export default function NavLink({to, name}: Props) {
    return (
        <Link to={to} className="nav-link">{name}</Link>
    )
}